import React from 'react'
const Favgroups = () => {
    const topics = [
        { id: 1, name: 'Time Management', image: 'src/images/rickandmorty3.jpg' },
        { id: 2, name: 'Audio Books', image: 'src/images/rickandmorty3.jpg' },
        { id: 3, name: 'Sports', image: 'src/images/rickandmorty3.jpg' },
        { id: 4, name: 'Cooking at home', image: 'src/images/rickandmorty3.jpg' },
        { id: 5, name: 'Freedom of Soul', image: 'src/images/rickandmorty3.jpg' },
        { id: 6, name: 'Faming', image: 'src/images/rickandmorty3.jpg' },
      ];
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-md max-w-lg mx-auto">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Your Favourite Groups</h2>
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
          <button className="px-4 py-1 text-sm text-purple-400  rounded-full hover:bg-purple-400 hover:text-white">
            Unfollow
          </button>
        </li>
      ))}
    </ul>
  </div>

  )
}

export default Favgroups