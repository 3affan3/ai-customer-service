// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", fromBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, fromBot: false }]);
      setInputValue("");
      // Here you can add more logic for bot responses or API calls.
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response.", fromBot: true },
        ]);
      }, 1000);
    }
  };

  return (
    <div className=" bg-gray-800 p-4 w-full max-w-lg mx-auto rounded-lg shadow-lg ">
      <div className="flex-grow overflow-y-auto max-h-60 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.fromBot ? "text-left" : "text-right"
            } text-white`}
          >
            <div
              className={`inline-block rounded-lg px-4 py-2 ${
                message.fromBot ? "bg-gray-700" : "bg-blue-600"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
      </div>
    </div>
  );
};


export default Chatbot;
