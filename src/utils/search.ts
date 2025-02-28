import Fuse from 'fuse.js';
import { sampleDocData, cdpComparisons, irrelevantTopics, cdpList } from '../data/cdpData';
import { SearchResult } from '../types';

// Combine all documentation data
const getAllDocData = () => {
  const allDocs: SearchResult[] = [];
  
  // Add CDP-specific documentation
  Object.entries(sampleDocData).forEach(([cdp, docs]) => {
    docs.forEach(doc => {
      allDocs.push({
        title: doc.title,
        content: doc.content,
        url: doc.url,
        cdp: cdp,
        score: 0
      });
    });
  });
  
  // Add comparison data
  cdpComparisons.forEach(doc => {
    allDocs.push({
      title: doc.title,
      content: doc.content,
      url: doc.url,
      cdp: 'comparison',
      score: 0
    });
  });
  
  return allDocs;
};

// Configure Fuse.js for fuzzy searching
const configureFuse = () => {
  const allDocs = getAllDocData();
  
  return new Fuse(allDocs, {
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'content', weight: 0.3 }
    ],
    includeScore: true,
    threshold: 0.4,
    ignoreLocation: true
  });
};

// Check if a question is about CDPs
const isRelevantQuestion = (question: string): boolean => {
  const cdpKeywords = ['segment', 'mparticle', 'lytics', 'zeotap', 'cdp', 'customer data platform'];
  const howToKeywords = ['how to', 'how do i', 'how can i', 'steps to', 'guide for'];
  
  const lowerQuestion = question.toLowerCase();
  
  // Check for CDP-related keywords
  const hasCdpKeyword = cdpKeywords.some(keyword => lowerQuestion.includes(keyword));
  
  // Check for "how-to" question patterns
  const isHowToQuestion = howToKeywords.some(keyword => lowerQuestion.includes(keyword));
  
  return hasCdpKeyword || isHowToQuestion;
};

// Check if question is asking for a comparison
const isComparisonQuestion = (question: string): boolean => {
  const comparisonKeywords = ['compare', 'comparison', 'versus', 'vs', 'difference between', 'better than'];
  const lowerQuestion = question.toLowerCase();
  
  return comparisonKeywords.some(keyword => lowerQuestion.includes(keyword));
};

// Search for relevant documentation
export const searchDocumentation = (question: string): SearchResult[] => {
  const fuse = configureFuse();
  
  // Handle irrelevant questions
  if (!isRelevantQuestion(question)) {
    return [{
      title: irrelevantTopics[0].title,
      content: irrelevantTopics[0].content,
      url: irrelevantTopics[0].url,
      cdp: 'off-topic',
      score: 0
    }];
  }
  
  // Prioritize comparison results for comparison questions
  if (isComparisonQuestion(question)) {
    const results = fuse.search(question);
    const comparisonResults = results.filter(result => result.item.cdp === 'comparison');
    
    if (comparisonResults.length > 0) {
      return comparisonResults.map(result => ({
        ...result.item,
        score: result.score || 0
      }));
    }
  }
  
  // Regular search
  const results = fuse.search(question);
  
  return results.slice(0, 3).map(result => ({
    ...result.item,
    score: result.score || 0
  }));
};

// Generate a response based on search results
export const generateResponse = (question: string, results: SearchResult[]): string => {
  if (results.length === 0) {
    return "I couldn't find specific information about that. Could you rephrase your question or ask about a different CDP feature?";
  }
  
  if (results[0].cdp === 'off-topic') {
    return results[0].content;
  }
  
  const bestResult = results[0];
  
  if (bestResult.cdp === 'comparison') {
    return `${bestResult.content}\n\nYou can find more detailed information in the respective documentation.`;
  }
  
  // Format the response for how-to questions
  const cdpName = cdpList.find(cdp => cdp.name.toLowerCase() === bestResult.cdp)?.name || bestResult.cdp;
  
  return `${bestResult.content}\n\nYou can find more detailed information in the ${cdpName} documentation: ${bestResult.url}`;
};