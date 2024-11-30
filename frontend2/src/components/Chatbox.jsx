import React, { useState } from "react";
import Header from "./Header";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    {
      sender: "friend",
      text: "Yeah, I did! I went with a few friends. It was pretty good but kind of predictable, you know?",
    },
    {
      sender: "me",
      text: "I get what you mean.",
    },
    {
      sender: "me",
      text: "The special effects were amazing though! I couldn’t stop staring at the scenes with the spaceships. The detail was insane!",
    },
    {
      sender: "friend",
      text: "Totally! The space battles were definitely the highlight. The storyline, though... I felt like I'd seen it all before.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle message sending
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { sender: "me", text: inputValue }]);
      setInputValue(""); // Clear the input field after sending
    }
  };

  // Handle "Enter" key press to send the message
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="w-screen h-screen pt-0 overflow-x-hidden">
      <div>
        <Header />
        <div className="flex flex-col lg:flex-row h-full bg-[url('images/chatbox_bg.png')] bg-contain text-white overflow-hidden">
          {/* Sidebar */}
          <div className="lg:w-3/12 w-full bg-sidebarGray p-4 overflow-hidden lg:block hidden">
            <h2 className="text-lg font-semibold mb-4">Chats</h2>
            <div className="space-y-4">
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                    <div>
                      <p className="font-medium">Richard Wright</p>
                      <p className="text-sm text-gray-400">Sent you a post</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Header inside Chat Window */}
            <div className="flex items-center justify-between bg-sidebarGray p-4 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                <div className="">
                  <h2 className="text-lg font-semibold">Richard Wright</h2>
                  <p className="text-sm text-gray-400">
                    Where should we go tomorrow?
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="p-2 rounded-full hover:bg-gray-700">
                  <i className="fas fa-search"></i>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 bg-chat-pattern bg-cover">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg text-sm ${
                        message.sender === "me"
                          ? "bg-gray-700"
                          : "bg-purple-600"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="bg-gray-800 p-4 border-t border-gray-700 flex items-center gap-3">
              <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <i className="fas fa-paperclip"></i>
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-gray-700 p-2 rounded-lg text-sm text-gray-300 outline-none focus:ring-2 focus:ring-purple-600"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button
                className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500"
                onClick={handleSendMessage}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
