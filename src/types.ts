export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface CDPInfo {
  name: string;
  docUrl: string;
  description: string;
  logo: string;
}

export interface SearchResult {
  title: string;
  content: string;
  url: string;
  cdp: string;
  score: number;
}