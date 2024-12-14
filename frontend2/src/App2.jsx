// import React from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/LeftSidebar";
// import Feed from "./components/Feed";
// import RightPanel from "./components/RightPanel";
// import useGetAllPost from "./hooks/useGetAllPost";
// import SidebarAnki from "./components/LeftSidebarAnki";

// function App2() {
//   useGetAllPost();
//   return (
//     <div className="w-screen h-screen flex flex-col bg-black text-white overflow-x-hidden">
//       {/* <Header /> */}
//       <div className="fixed top-0 left-0 w-full z-50 ">
//         <Header />
//       </div>

//       <div className="flex flex-grow pt-[64px] bg-black">
//         {/* <Sidebar /> */}
//         {/* <SidebarAnki/> */}
//         <div className="fixed top-[120px] left-4 h-[calc(100vh-64px)] w-[250px] z-40">
//           <Sidebar />
//         </div>

//         <div className="lg:ml-[250px] mt-12 flex-grow p-4">
//           <Feed />
//         </div>

//         {/* Right Panel */}
//         <div className="md:mt-12">
//         <RightPanel />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App2;



// import React from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/LeftSidebar";
// import Feed from "./components/Feed";
// import RightPanel from "./components/RightPanel";
// import useGetAllPost from "./hooks/useGetAllPost";
// import SidebarAnki from "./components/LeftSidebarAnki";

// function App2() {
//   useGetAllPost();
//   return (
//     <div className="w-screen h-screen flex flex-col bg-black text-white overflow-x-hidden">
//       {/* Header: Fixed at the top */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Header />
//       </div>

//       <div className="flex flex-grow pt-[64px] bg-black">
//         {/* Sidebar: Fixed on the left */}
//         <div className="fixed top-[120px] left-12 h-[calc(100vh-64px)] w-[250px] z-40 hidden lg:block">
//           <Sidebar />
//         </div>

//         {/* Main Content: Adjust for responsiveness */}
//         <div className="md:mt-12 mt-20 flex-grow lg:ml-[250px] p-4">
//           <Feed />
//         </div>

//         {/* Right Panel: Display only on larger screens */}
//           <RightPanel />
//       </div>
//     </div>
//   );
// }

// export default App2;

import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightPanel from "./components/RightPanel";
import useGetAllPost from "./hooks/useGetAllPost";

function App2() {
  useGetAllPost();

  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white overflow-x-hidden">
      {/* Header: Fixed at the top */}
      <div className="fixed top-0 left-0 w-full z-40">
        <Header />
      </div>

      <div className="flex flex-col lg:flex-row flex-grow pt-[64px] bg-black">
        {/* Sidebar: Fixed on the left for larger screens */}
        <div className="fixed top-[120px] left-12 h-[calc(100vh-64px)] w-[250px] z-40 hidden lg:block">
          <Sidebar />
        </div>

        <div className="block lg:hidden z-50">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="md:mt-16 mt-20 flex-grow lg:ml-[250px] p-4">
          <Feed />
          {/* Right Panel: Display below Feed on small screens */}
          <div className="block lg:hidden mt-8 mb-8">
            <RightPanel />
          </div>
        </div>

        {/* Right Panel: Display on larger screens */}
        <div className="hidden lg:block mt-8">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App2;


