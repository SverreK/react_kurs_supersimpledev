import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingSpinner from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const keyDown = (event) => {
    event.key === 'Enter' && sendMessage() && setInputText('');
    event.key === 'Escape' && setInputText('') && setInputText('');
  };

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }
    setIsLoading(true);
    setInputText('');

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="loading-spinner" src={LoadingSpinner} />,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);

    setIsLoading(false);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ]);
  }

  function clear() {
    localStorage.clear();
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={keyDown}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        disabled={inputText === ''}
        className="send-button"
      >
        Send
      </button>
      <button className="clear-button" onClick={clear}>
        Clear
      </button>
    </div>
  );
}
