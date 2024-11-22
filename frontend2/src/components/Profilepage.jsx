import React, { useEffect } from "react";
import PostCard from "./PostCard.jsx";
import { FaInstagram, FaFacebook, FaEdit, FaEnvelope } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import Hottopics from "../components/Hottopics.jsx";
import Followings from "../components/Followings.jsx";
import Addfriends from "../components/Addfriends.jsx";
import Favgroups from "../components/Favgroups.jsx";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUserProfile } from "@/redux/profileActions";
import { fetchUserProfile } from "@/hooks/profileActions.js";
import HotTopics from "./Hottopics.jsx";
import Loader from "./Loader.jsx";

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
    const dispatch = useDispatch();
    const { userProfile, loading, error } = useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(fetchUserProfile());
    }, [dispatch]);

    if (loading) {
        return <Loader/>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="h-screen flex flex-col bg-black text-white">
            <div className="flex flex-1">
                <div className="min-h-screen bg-black text-white p-6 flex-1">
                    <div className="max-w-6xl mx-auto flex gap-6">
                        <main className="flex-1 p-9 border-purple-400">
                            <h1 className="text-2xl font-bold"></h1>
                            <p className="text-gray-400"></p>
                            <div className="flex flex-col items-center max-w-[900px] mx-auto bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg">
                                <div className="w-full h-40 bg-cover bg-center">
                                    <img
                                        src={userProfile?.background_photo || "https://via.placeholder.com/900x300"}
                                        alt="Background"
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                <div className="relative -mt-10 w-28 h-24 right-60">
                                    <img
                                        src={userProfile?.profile_photo || "https://via.placeholder.com/150"}
                                        alt="Profile"
                                        className="rounded-full border-4 border-gray-800"
                                    />
                                </div>

                                <div className="p-4">
                                    <div className="flex flex-col md:flex-row md:space-x-8">
                                        <div className="p-4 text-left flex-1">
                                            <div className="flex flex-col">
                                                <h1 className="text-xl font-bold">{userProfile?.username}</h1>
                                                <p className="text-sm text-gray-400 mt-2">
                                                    {userProfile?.bio || "No bio available"}
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

                                        <div className="flex-1 p-4">
                                            <div className="flex justify-end space-x-4 text-xl mb-4">
                                                <FaInstagram className="text-pink-400 hover:text-purple-300 cursor-pointer" />
                                                <FaFacebook className="text-blue-400 hover:text-blue-300 cursor-pointer" />
                                                <FaEnvelope className="text-blue-400 hover:text-gray-300 cursor-pointer" />
                                                <MdEdit className="text-gray-400 hover:text-gray-300 cursor-pointer" />
                                            </div>
                                            <div className="mt-5 grid grid-cols-3 gap-4 border-t border-gray-700">
                                                <div className="text-center">
                                                    <h3 className="font-bold text-lg">{userProfile?.num_posts}</h3>
                                                    <p className="text-gray-500">Posts</p>
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="font-bold text-lg">{userProfile?.num_followers}</h3>
                                                    <p className="text-gray-500">Followers</p>
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="font-bold text-lg">{userProfile?.num_following}</h3>
                                                    <p className="text-gray-500">Following</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-2 p-4">
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

                            <div className="min-h-screen p-6">
                                <div className="max-w-4xl mx-auto space-y-6">
                                    {posts.map((post, index) => (
                                        <PostCard key={index} {...post} />
                                    ))}
                                </div>
                            </div>
                        </main>

                        <aside className="w-72 rounded-lg p-4 flex-shrink-0 space-y-3">
                            <div className="bg-black border-2 border-solid border-[#F8BD00] text-white p-4 rounded-lg shadow-md">
                                <div className="flex items-center mb-3">
                                    <div className="text-yellow-500 text-2xl mr-3">⭐</div>
                                    <p className="text-gray-400">Grow professionally with Premium</p>
                                </div>
                                <p className="text-lg font-semibold text-white">Try 1 month for $0</p>
                            </div>
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
