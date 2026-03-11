import { useState } from 'react';

export default function MessagesPage({ messages, onSendMessage }) {
  const [content, setContent] = useState('');
  return (
    <div className="glass p-4">
      <h2 className="text-xl font-semibold mb-3">Messaging</h2>
      <div className="space-y-2 mb-3">
        {messages.map((message) => (
          <div key={message.id} className="bg-slate-800 rounded p-2 text-sm">
            <span className="text-blue-300">{message.from}</span>: {message.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input className="flex-1 bg-slate-800 rounded p-2" placeholder="Write a message" onChange={(e) => setContent(e.target.value)} />
        <button className="bg-blue-600 rounded px-4" onClick={() => onSendMessage({ from: 'You', to: 'Marketplace', content })}>Send</button>
      </div>
    </div>
  );
}
