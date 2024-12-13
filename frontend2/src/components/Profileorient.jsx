import React from 'react'
import Header from './Header'
import Sidebar from './LeftSidebar'
import ProfilePage from './Profilepage'

function Profileorient() {
  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="w-screen flex flex-grow bg-black">
        <div className="fixed top-[120px] left-12 h-[calc(100vh-64px)] w-[250px] z-40 hidden lg:block">
          <Sidebar />
        </div>

        <div className="md:mt-16 mt-20 flex-grow lg:ml-[140px] p-4">
          <ProfilePage />
        </div>
      </div>
    </div>
  )
}

export default Profileorient