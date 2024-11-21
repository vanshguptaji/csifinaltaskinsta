import React from "react";
import Header from "./Header";
import Sidebar from "./LeftSidebar";

const Chatbox = () => {
  return (
    <div className="w-screen h-screen pt-0 overflow-x-hidden">
      <div className="">
        <Header />
        <div className="flex h-full bg-[url('../../images/chatbox_bg.png')] bg-contain text-white overflow-hidden">
          {/* Sidebar */}
          
          {/* Chat List */}
          <div className="w-1/4 bg-sidebarGray p-4 overflow-hidden">
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
                <div>
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
                {/* Sender Message */}
                <div className="flex justify-start">
                  <div className="max-w-xs bg-purple-600 p-3 rounded-lg text-sm">
                    Yeah, I did! I went with a few friends. It was pretty good but
                    kind of predictable, you know?
                  </div>
                </div>
                {/* Receiver Message */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-gray-700 p-3 rounded-lg text-sm">
                    I get what you mean.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-xs bg-gray-700 p-3 rounded-lg text-sm">
                    The special effects were amazing though! I couldn’t stop staring
                    at the scenes with the spaceships. The detail was insane!
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-xs bg-purple-600 p-3 rounded-lg text-sm">
                    Totally! The space battles were definitely the highlight. The
                    storyline, though... I felt like I'd seen it all before.
                  </div>
                </div>
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
              />
              <button className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500">
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
