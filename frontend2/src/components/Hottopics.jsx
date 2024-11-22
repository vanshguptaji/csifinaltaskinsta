import React from 'react';

const HotTopics = () => {
  const topics = [
    { id: 1, name: 'Alanna Myassa', image: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Alanna Myassa', image: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Alanna Myassa', image: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Alanna Myassa', image: 'https://via.placeholder.com/40' },
  ];

  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-md max-w-lg mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Hot Topics</h2>
        <a href="#" className="text-purple-400 hover:underline text-sm">
          See All
        </a>
      </div>

      {/* List of Topics */}
      <ul className="space-y-4">
        {topics.map((topic) => (
          <li key={topic.id} className="flex justify-between items-center">
            {/* Profile Info */}
            <div className="flex items-center">
              <img
                src={topic.image}
                alt={topic.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span>{topic.name}</span>
            </div>
            {/* Read Button */}
            <button className="px-4 py-1 text-sm text-purple-400 border border-purple-400 rounded-full hover:bg-purple-400 hover:text-white">
              Read
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotTopics;