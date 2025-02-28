import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message, CDPInfo } from './types';
import { cdpList } from './data/cdpData';
import { searchDocumentation, generateResponse } from './utils/search';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import CDPCard from './components/CDPCard';
import WelcomeMessage from './components/WelcomeMessage';
import { Database } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      role: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate processing time
    setTimeout(() => {
      // Search documentation
      const searchResults = searchDocumentation(content);
      
      // Generate response
      const responseContent = generateResponse(content, searchResults);
      
      // Add assistant message
      const assistantMessage: Message = {
        id: uuidv4(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <Database size={24} className="text-blue-600" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">CDP Support Agent</h1>
        </div>
      </header>
      
      <div className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-6">
        {/* Main chat area */}
        <div className="flex-1 flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.length === 0 && <WelcomeMessage />}
            
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            {isLoading && (
              <div className="flex justify-center my-4">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
        
        {/* Sidebar with CDP info */}
        <div className="md:w-80 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Supported CDPs</h2>
          {cdpList.map(cdp => (
            <CDPCard key={cdp.name} cdp={cdp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;