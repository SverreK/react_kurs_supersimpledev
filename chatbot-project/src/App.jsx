import { useState, useEffect } from 'react';
import { ChatInput } from './components/ChatInput';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem('messages')) || []
  );

  useEffect(() => {
    const responses = {
      'How are you?': 'Im fine! Thanks for asking!',
      'How are you doing today?': "I'm doing fine thanks!",
    };
    Chatbot.addResponses(responses);
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <p className="welcome-title">
        {chatMessages.length === 0
          ? 'Welcome to the chatbot project! Send a message using the textbox below.'
          : ''}
      </p>
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
