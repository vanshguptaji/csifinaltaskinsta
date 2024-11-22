import React from "react";
// import Post from "../components/Posts.jsx";
import PostCard from "./PostCard.jsx";
import { FaInstagram, FaFacebook, FaEdit, FaEnvelope } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import Hottopics from "../components/Hottopics.jsx";
import Followings from "../components/Followings.jsx";
import Addfriends from "../components/Addfriends.jsx";
import Favgroups from "../components/Favgroups.jsx";
import { useParams } from "react-router-dom";
// import useGetUserProfile from "./hooks/useGetUserProfile.jsx";
import { useSelector } from 'react-redux';
import HotTopics from "./Hottopics.jsx";
import useGetUserProfile from "@/hooks/useGetUserProfile.jsx";
import Header from "./Header.jsx";


const posts = [
    {
        image: "https://via.placeholder.com/600x300",
        time: "30 minutes ago",
        caption: "The Earth has music for those who listen",
        hashtags: "#NatureLovers #Explore #WildlifePhotography #MotherNature #NaturePerfection",
        likes: 1200,
        comments: 173,
        shares: 229,
        views: "1K+",
        isVideo: false,
    },
    {
        image: "https://via.placeholder.com/600x300",
        time: "50 minutes ago",
        caption: "The Earth has music for those who listen",
        hashtags: "#NatureLovers #Explore #WildlifePhotography #MotherNature #NaturePerfection",
        likes: 1200,
        comments: 173,
        shares: 229,
        views: "1K+",
        isVideo: true,
    },
    {
        image: "https://via.placeholder.com/600x300",
        time: "30 minutes ago",
        caption: "The Earth has music for those who listen",
        hashtags: "#NatureLovers #Explore #WildlifePhotography #MotherNature #NaturePerfection",
        likes: 1200,
        comments: 173,
        shares: 229,
        views: "1K+",
        isVideo: false,
    },
    {
        image: "https://via.placeholder.com/600x300",
        time: "50 minutes ago",
        caption: "The Earth has music for those who listen",
        hashtags: "#NatureLovers #Explore #WildlifePhotography #MotherNature #NaturePerfection",
        likes: 1200,
        comments: 173,
        shares: 229,
        views: "1K+",
        isVideo: true,
    },
];
const ProfilePage = () => {
    const params = useParams();
    const userId = params.id;
    useGetUserProfile(userId);
    const { userProfile } = useSelector(store => store.auth);
    console.log(userProfile);
    return (
        <div className="h-screen  flex flex-col bg-black text-white">
            {/* Navbar */}
            <Header/>
            {/* <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-700">
                <div className="text-purple-300 text-5xl font-bold">hola'</div>
                <div className="flex-grow max-w-md mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-gray-900 text-white rounded-full px-4 py-2 focus:outline-none border border-gray-600 focus:border-purple-400"
                        />
                    </div></div>


                <div className="flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.05-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
                            />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 2c4.418 0 8 3.582 8 8 0 5.25-8 12-8 12S4 15.25 4 10c0-4.418 3.582-8 8-8z"
                            />
                        </svg>
                    </button>
                    <div className="flex items-center space-x-2">
                        <img
                            src={userProfile?.profilePicture}
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="text-gray-400">{userProfile?.username}@alice</span>
                    </div>

                </div>
            </header> */}

            {/* Main Content Area */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-1/8 min-w-[200px] bg-black flex flex-col items-center py-2 space-y-2 ">
                    {/* Sidebar Items */}
                    <div className="space-y-6">
                        {/* Home */}
                        <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10l6.293-6.293a1 1 0 011.414 0L21 14m-3.586 1.414L9 3M4 14v7h6m10-4h-3m0 0v4m0-4h4"
                                />
                            </svg>
                            <span>Home</span>
                        </div>

                        {/* Messages */}
                        <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 8h10m0 4H7m0 4h10M5 8h.01M19 8h.01M5 12h.01M19 12h.01M5 16h.01M19 16h.01M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span>Messages</span>
                        </div>

                        {/* Explore */}
                        <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.79 11H15l-3 8L5.21 4h4.79l3 8 4-8h3.79z"
                                />
                            </svg>
                            <span>Explore</span>
                        </div>

                        {/* Notifications */}
                        <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.05-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
                                />
                            </svg>
                            <span>Notifications</span>
                        </div>

                        {/* Settings */}
                        <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.428 15.341a7.488 7.488 0 00.962-1.566m-2.396-8.28a8.007 8.007 0 00-4.962-1.591c-1.736 0-3.293.526-4.617 1.418m-3.472 3.711a7.5 7.5 0 00.59 4.236m5.948 5.196a8.007 8.007 0 005.193-1.498M12 8v4m0 0v4m0-4H8m4 0h4"
                                />
                            </svg>
                            <span>Settings</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="min-h-screen bg-black  text-white p-6 flex-1">
                    <div className="max-w-6xl mx-auto flex gap-6">
                        <main className="flex-1 p-9 border-purple-400 ">
                            <h1 className="text-2xl font-bold"></h1>
                            <p className="text-gray-400"></p>
                            <div className="flex flex-col items-center max-w-[900px] mx-auto bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg">
                                {/* Background Image */}
                                <div className="w-full  h-40 bg-cover bg-center" >
                                    <img
                                        src="https://via.placeholder.com/900x300" //replace
                                        alt="Background"
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                {/* Profile Details */}
                                <div className="relative -mt-10 w-28 h-24 right-60">
                                    <img
                                        src="https://via.placeholder.com/150" //replace
                                        alt="Profile"
                                        className="rounded-full border-4 border-gray-800"
                                    />
                                </div>
                                {/* Userinfo */}
                                <div className="p-4">
                                    <div className="flex flex-col md:flex-row md:space-x-8">
                                        <div className="p-4 text-left flex-1">
                                            <div className="flex flex-col">
                                                <h1 className="text-xl font-bold">Richard Wright</h1>
                                                <p className="text-sm text-gray-400 mt-2">
                                                    I'm delighted to introduce myself as a professional musician
                                                </p>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    📍 Ghaziabad (201206), U.P.
                                                </p>
                                                <div className="mt-5 flex justify-start">
                                                    <button className="px-4 py-2 bg-gray-900 border-b-2 border-purple-400 text-white rounded-full hover:bg-purple-600">
                                                        Profile Settings
                                                    </button>
                                                    <button className="ml-3 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600">
                                                        <FaEdit />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Social Media Icons */}
                                        <div className="flex-1 p-4">
                                            <div className="flex justify-end space-x-4 text-xl mb-4">
                                                <FaInstagram className="text-pink-400 hover:text-purple-300 cursor-pointer" />
                                                <FaFacebook className="text-blue-400 hover:text-blue-300 cursor-pointer" />
                                                <FaEnvelope className="text-blue-400 hover:text-gray-300 cursor-pointer" />
                                                <MdEdit className="text-gray-400 hover:text-gray-300 cursor-pointer" />
                                            </div>
                                            {/* Stats */}
                                            <div className="mt-5 grid grid-cols-3 gap-4  border-t border-gray-700 ">
                                                <div className="text-center">
                                                    <h3 className="font-bold text-lg">{userProfile?.posts.length}11</h3>
                                                    <p className="text-gray-500">Posts</p>
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="font-bold text-lg">{userProfile?.followers.length}13</h3>
                                                    <p className="text-gray-500">Followers</p>
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="font-bold text-lg">{userProfile?.following.length}22</h3>
                                                    <p className="text-gray-500">Following</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*activity*/}
                            <div className="flex-2 p-4  ">
                                <div className="bg-gray-900 max-w-[900px] mx-auto text-white p-9 flex items-center justify-between rounded-md">
                                    <div>
                                        <h1 className="text-lg font-bold">Activity</h1>
                                        <p className="text-sm text-purple-400">2.1M Followers</p>
                                    </div>
                                    <div className="flex space-x-6 text-sm">
                                        <button className="border-b-2 border-purple-500 text-white">Posts</button>
                                        <button className="hover:text-purple-400">Comments</button>
                                        <button className="hover:text-purple-400">Media</button>
                                        <button className="hover:text-purple-400">Likes</button>
                                    </div>
                                    <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
                                        Create a Post
                                    </button>
                                </div>
                            </div>
                            <div className="min-h-screen  p-6">
                                <div className="max-w-4xl mx-auto space-y-6">
                                    {posts.map((post, index) => (
                                        <PostCard key={index} {...post} />
                                    ))}
                                </div>
                            </div>
                        </main>

                        {/* Left Content - Profile Posts */}


                        {/* Right Sidebar */}
                        <aside className="w-72 rounded-lg p-4 flex-shrink-0 space-y-3 ">
                            <div className="bg-black border-2 border-solid border-[#F8BD00] text-white p-4 rounded-lg shadow-md">
                                <div className="flex  items-center mb-3">
                                    {/* Icon */}
                                    <div className="text-yellow-500 text-2xl mr-3">⭐</div>
                                    {/* Title */}
                                    <p className="text-gray-400">Grow professionally with Premium</p>
                                </div>
                                {/* Call to Action */}
                                <p className="text-lg font-semibold text-white">
                                    Try 1 month for $0
                                </p>
                            </div>
                            {/* Hot Topics Component */}
                            <div className="border-2 border-solid border-purple-600 rounded-md">
                                <HotTopics />
                            </div>
                            <div>
                                <Followings />
                            </div>
                            <div>
                                <Addfriends />
                            </div>
                            <div>
                                <Favgroups />
                            </div>

                        </aside>
                    </div>
                </div>



            </div>


        </div>

    );
};

export default ProfilePage;