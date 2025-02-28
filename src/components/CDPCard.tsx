import React from 'react';
import { CDPInfo } from '../types';
import * as Icons from 'lucide-react';

interface CDPCardProps {
  cdp: CDPInfo;
}

const CDPCard: React.FC<CDPCardProps> = ({ cdp }) => {
  // Dynamically get the icon component
  const IconComponent = Icons[cdp.logo as keyof typeof Icons] || Icons.Database;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <IconComponent size={24} className="text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold">{cdp.name}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-3">{cdp.description}</p>
      <a 
        href={cdp.docUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 text-sm hover:underline flex items-center"
      >
        <Icons.ExternalLink size={14} className="mr-1" />
        Documentation
      </a>
    </div>
  );
};

export default CDPCard;