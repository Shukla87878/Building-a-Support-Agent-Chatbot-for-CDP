import React from 'react';
import { Bot } from 'lucide-react';

const WelcomeMessage: React.FC = () => {
  return (
    <div className="flex w-full mb-6">
      <div className="flex max-w-[80%]">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 mr-3">
          <Bot size={20} className="text-gray-700" />
        </div>
        <div className="py-3 px-4 rounded-lg bg-gray-100 text-gray-800">
          <p className="font-medium mb-2">Hello! I'm your CDP Support Assistant.</p>
          <p className="mb-2">I can help you with "how-to" questions about:</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Segment</li>
            <li>mParticle</li>
            <li>Lytics</li>
            <li>Zeotap</li>
          </ul>
          <p className="mb-2">Try asking me questions like:</p>
          <ul className="list-disc pl-5">
            <li>"How do I set up a new source in Segment?"</li>
            <li>"How can I create a user profile in mParticle?"</li>
            <li>"How do I build an audience segment in Lytics?"</li>
            <li>"How can I integrate my data with Zeotap?"</li>
            <li>"How does Segment's audience creation compare to Lytics'?"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;