import React, { useEffect, useState } from "react";
import PostCard from "./PostCard.jsx";
import Settings from "./Settings.jsx";
import { FaInstagram, FaFacebook, FaEdit, FaEnvelope } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import Hottopics from "../components/Hottopics.jsx";
import store from '@/redux/store';
import rickandmorty from '../images/rickandmorty.webp'
import Followings from "../components/Followings.jsx";
import Addfriends from "../components/Addfriends.jsx";
import Favgroups from "../components/Favgroups.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUserProfile } from "@/redux/profileActions";
import { fetchUserProfile } from "@/hooks/profileActions.js";
import HotTopics from "./Hottopics.jsx";
import Loader from "./Loader.jsx";
// import rickandmorty from "../images/rickandmorty.webp"

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { userProfile, loading, error } = useSelector((state) => state.profile);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isDialogOpen2, setDialogOpen2] = useState(false);
    // dispatch(fetchUserProfile());
    const [bio, setBio] = useState(userProfile?.bio || "");
    const [username, setUsername] = useState(userProfile?.username || "");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [backgroundPhoto, setBackgroundPhoto] = useState(null); // Will hold the file object now
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [input, setInput] = useState({
        bio: "",
        profile_photo: null,
        backgrund_photo: null
    });
    const [posts, setPosts] = useState([]);
    const BASE_URL = 'https://hola-project.onrender.com';
    const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dy1a8nyco/';
    // const { posts } = useSelector(store => store.post);

    const toggleNotificationModal = () => {
        setDialogOpen((prev) => !prev);
    };
    const toggleNotificationModal2 = () => {
        setDialogOpen2((prev) => !prev);
    };

    useEffect(() => {
        dispatch(fetchUserProfile());
        // console.log(userProfile);

    }, [dispatch]);

    useEffect(() => {
        setProfilePhoto(userProfile.profile_photo);
    }, []);


    useEffect(() => {
        const fetchUserPosts = async () => {
            // setLoading(true);
            const token = localStorage.getItem("accesstoken");
            dispatch(fetchUserProfile());
            // console.log(userProfile);

            try {
                const response = await axios.get(`https://hola-project.onrender.com/api/accounts/profile/${userProfile.id}/posts/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPosts(response.data);
                // setError(null);
            } catch (err) {
                // setError("Failed to fetch posts.");
                console.error(err);
            } finally {
                // setLoading(false);
            }
        };

        fetchUserPosts();
    }, []);


    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleImageChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            if (type === 'profile') {
                setProfilePhoto(file);
            } else if (type === 'background') {
                setBackgroundPhoto(file);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingSubmit(true);

        const formData = new FormData();

        // Append the bio
        formData.append("username", username);
        formData.append("bio", bio);
        // Append profile and background photos if they are selected
        if (profilePhoto) {
            formData.append("profile_photo", profilePhoto);
        }
        if (backgroundPhoto) {
            formData.append("background_photo", backgroundPhoto);
        }
        console.log(formData);

        try {
            const token = localStorage.getItem('accesstoken');
            const response = await axios.put('https://hola-project.onrender.com/api/accounts/profile/edit/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important for file uploads
                    Authorization: `Bearer ${token}`,
                },
            });

            // Re-fetch the updated profile data after successful edit
            dispatch(fetchUserProfile());
            closeDialog2();
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoadingSubmit(false);
        }
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const openDialog2 = () => setDialogOpen2(true);
    const closeDialog2 = () => setDialogOpen2(false);

    return (
        <>
            <div className="min-h-screen bg-black text-white">
                <div className="flex flex-col items-center w-full sm:p-6">
                    <div className="min-h-screen bg-black text-white sm:p-6 flex-1">
                        <div className="sm:max-w-6xl mx-auto flex flex-col sm:flex-row sm:gap-6">
                            <main className="flex-1">
                                <div className="flex flex-col items-center bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg">
                                    <div className="relative w-full h-40 sm:h-48">
                                        <img
                                            // src={backgroundPhoto ? URL.createObjectURL(backgroundPhoto) : "https://via.placeholder.com/900x300"}
                                            // alt="Background"
                                            src={userProfile.background_photo ? `${CLOUDINARY_BASE_URL}${userProfile.background_photo}` : "https://via.placeholder.com/150"}
                                            alt="backpic"
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className="relative -mt-12 w-24 h-24 sm:w-28 sm:h-28 mx-auto">
                                        <img
                                            // src={profilePhoto ? URL.createObjectURL(profilePhoto) : "https://via.placeholder.com/150"}
                                            // alt="Profile"
                                            src={userProfile.profile_photo ? `${CLOUDINARY_BASE_URL}${userProfile.profile_photo}` : "https://via.placeholder.com/150"}
                                            alt="Profile"
                                            className="rounded-full border-4 border-gray-800"
                                        />
                                    </div>

                                    <div className="p-4">
                                        <div className="flex flex-col md:flex-row md:space-x-8">
                                            <div className="p-4 text-left flex-1">
                                                <div className="flex flex-col">
                                                    <h1 className="text-xl sm:text-xl font-bold">{userProfile?.username || "No username available"}</h1>
                                                    <p className="text-sm text-gray-400 mt-2">
                                                        {userProfile?.bio || "No bio available"}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        📍 Ghaziabad (201206), U.P.
                                                    </p>
                                                    <div className="mt-5 flex justify-start">
                                                        <button
                                                            className="px-3 py-2 bg-gray-900 border-b-2 border-purple-400 text-white rounded-full hover:bg-purple-600"
                                                            onClick={toggleNotificationModal}
                                                        >
                                                            Profile Settings
                                                        </button>
                                                        <button className="ml-3 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
                                                            onClick={openDialog2}>
                                                            <FaEdit />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full flex-1 p-4">
                                                <div className="flex justify-end space-x-4 text-xl mb-4">
                                                    <FaInstagram className="text-pink-400 hover:text-purple-300 cursor-pointer" />
                                                    <FaFacebook className="text-blue-400 hover:text-blue-300 cursor-pointer" />
                                                    <FaEnvelope className="text-blue-400 hover:text-gray-300 cursor-pointer" />
                                                    <MdEdit className="text-gray-400 hover:text-gray-300 cursor-pointer" />
                                                </div>
                                                <div className="mt-5 grid grid-cols-1 xl:grid-cols-3 gap-4 border-t border-gray-700">
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
                                        <div className="flex flex-wrap space-x-6 text-sm sm:space-x-0 sm:flex-row sm:gap-4">
                                            <button className="border-b-2 border-purple-500 text-white w-full sm:w-auto mb-2 sm:mb-4">Posts</button>
                                            <button className="hover:text-purple-400 w-full sm:w-auto mb-2 sm:mb-4">Comments</button>
                                            <button className="hover:text-purple-400 w-full sm:w-auto mb-2 sm:mb-4">Media</button>
                                            <button className="hover:text-purple-400 w-full sm:w-auto mb-2 sm:mb-4">Likes</button>
                                        </div>

                                        {/* <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
                                            Create a Post
                                        </button> */}
                                    </div>
                                </div>

                                <div className="min-h-screen p-6">
                                    <div className="max-w-4xl mx-auto space-y-6">
                                        {posts.length > 0 ? (
                                            posts.map((post) => (
                                                <PostCard
                                                    post={post}
                                                />
                                            ))
                                        ) : (
                                            <p className="text-gray-400">No posts available for this user.</p>
                                        )}
                                    </div>
                                </div>
                                {/* <Settings isOpen={isDialogOpen} onClose={closeDialog} /> */}
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
            {/* Notifications Modal */}
            {isDialogOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
                    <div className="relative rounded-lg text-center shadow-lg">
                        <button
                            onClick={toggleNotificationModal}
                            className="absolute top-14 right-8 text-gray-500 hover:text-gray-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <Settings />
                    </div>
                </div>
            )}
            {/* Edit Profile Dialog */}
            {isDialogOpen2 && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
                    <div className="relative w-1/3 h-auto rounded-lg p-6 shadow-lg bg-gray-800 text-white">
                        <button
                            onClick={toggleNotificationModal2}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                        {/* <div>
                            <label className="block text-sm font-semibold">user name</label>
                            <textarea
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
                                rows="1"
                            ></textarea>
                        </div> */}
                        <div>
                            <label className="block text-sm font-semibold">Bio</label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-semibold">Profile Photo</label>
                            <input
                                type="file"
                                onChange={(e) => handleImageChange(e, 'profile')}
                                className="w-full p-2 mt-2 text-white bg-gray-700 rounded-md"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-semibold">Background Photo</label>
                            <input
                                type="file"
                                onChange={(e) => handleImageChange(e, 'background')}
                                className="w-full p-2 mt-2 text-white bg-gray-700 rounded-md"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={handleSubmit}
                                disabled={loadingSubmit}
                                className="px-6 py-2 bg-purple-500 text-white rounded-md disabled:bg-gray-600"
                            >
                                {loadingSubmit ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfilePage;