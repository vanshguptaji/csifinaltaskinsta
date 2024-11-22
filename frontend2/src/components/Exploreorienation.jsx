import React from 'react'
import Header from './Header'
import Sidebar from './LeftSidebar'
import Explore from './Explore'

function Exploreorienation() {
  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <Header />

      <div className="w-screen flex flex-grow bg-black">
        <Sidebar />

        <div className="flex-grow p-4">
          <Explore />
        </div>
      </div>
    </div>
  )
}

export default Exploreorienation