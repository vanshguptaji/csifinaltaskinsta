import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightPanel from "./components/RightPanel";
import useGetAllPost from "./hooks/useGetAllPost";

function App2() {
  useGetAllPost();
  return (
    <div className="w-screen h-screen flex flex-col bg-sidebarGray text-white overflow-x-hidden">
      <Header />

      <div className="w-screen flex flex-grow bg-sidebarGray">
        <Sidebar />

        <div className="flex-grow p-4">
          <Feed />
        </div>

        <RightPanel />
      </div>
    </div>
  );
}

export default App2;
