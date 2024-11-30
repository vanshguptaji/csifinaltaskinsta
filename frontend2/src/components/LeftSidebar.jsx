import React, { useRef, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineMessage,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { BsCompass } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import lineiconsPhoto from "../images/lineicons_photos.png";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { Toast } from "react-toastify/dist/components";
import { toast } from 'sonner';
import { readFileAsDataURL } from "@/lib/utils";
import { setPosts } from '@/redux/postSlice';
import Notifications from "./Notification";


const Sidebar = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useSelector(store => store.auth);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const imageRef = useRef();
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const { posts } = useSelector(store => store.post);
  const [input, setInput] = useState({
    "content": "",
    "media": "",
    "tags": ""
  });

  const toggleCreateModal = () => {
    setIsCreateOpen((prev) => !prev);
    setSelectedFile(null);
  };

  const toggleNotificationModal = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        toast.error("Error loading image. Please try again.");
      };
      reader.readAsDataURL(file); // Convert file to Base64 data URL
    }
  };


  const logoutHandler = async () => {
    try {
      const res = await axios.get(' //https://socialnetworkingsite.onrender.com/auth/logout', { withCredentials: true });
      if (res.data.success) {
        dispatch(setAuthUser(null));
        dispatch(setSelectedPost(null));
        dispatch(setPosts([]));
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const createPostHandler = async (e) => {

    const token = localStorage.getItem('accesstoken');
    const formData = new FormData();
    formData.append("content", input.content);
    formData.append("media", selectedFile);
    formData.append("tags", input.tags)
    console.log(formData);
    // setInput.media(file);
    console.log(input);


    try {
      setLoading(true);
      const res = await axios.post('https://hola-project.onrender.com/api/posts/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        // withCredentials: true,
      });
      console.log(res);

      if (res) {
        dispatch(setPosts([res.data, ...posts]));// [1] -> [1,2] -> total element = 2
        toast.success("post created");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      // console.log(error.response.data.message);

    } finally {
      setLoading(false);
    }
  }

  // const sidebarHandler = (textType) => {
  //   if (textType === 'Logout') {
  //     logoutHandler();
  //   } else if (textType === "Create") {
  //     createPostHandler();
  //     setOpen(true);
  //   } else if (textType === "Profile") {
  //     // navigate(/profile/${user?._id});
  //   } else if (textType === "Home") {
  //     navigate("/mainHome");
  //   } else if (textType === 'Messages') {
  //     navigate("/chat");
  //   }
  // }

  return (
    <>
      <div className="hidden lg:flex w-1/5 min-w-max bg-black h-full flex flex-col items-center py-6">
        <nav className="space-y-6">
          <Link to="/mainHome" className="flex items-center gap-3 text-lg">
            <AiOutlineHome size={24} />
            Home
          </Link>
          <Link to="/chatbox" className="flex items-center gap-3 text-lg">
            <AiOutlineMessage size={24} />
            Messages
          </Link>
          <Link to="/explore" className="flex items-center gap-3 text-lg">
            <a href="/explore" className="flex items-center gap-3 text-lg">
              <BsCompass size={24} />
              Explore
            </a>
          </Link>
          <button
            onClick={() => {
              toggleCreateModal();
              // createPostHandler();
            }}
            className="flex items-center gap-3 text-lg"
          >
            <FiPlusSquare size={24} />
            Create
          </button>
          <button
            onClick={toggleNotificationModal}
            className="flex items-center gap-3 text-lg"
          >
            <AiOutlineBell size={24} />
            Notifications
          </button>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black py-2">
        <div className="flex justify-around text-white">
          <Link to="/mainHome" className="flex flex-col items-center">
            <AiOutlineHome size={24} />
            {/* <span className="text-sm">Home</span> */}
          </Link>
          <Link to="/chatbox" className="flex flex-col items-center">
            <AiOutlineMessage size={24} />
            {/* <span className="text-sm">Messages</span> */}
          </Link>
          <button
            onClick={toggleCreateModal}
            className="flex flex-col items-center"
          >
            <FiPlusSquare size={24} />
            {/* <span className="text-sm">Create</span> */}
          </button>
          <Link to="/explore" className="flex flex-col items-center">
            <BsCompass size={24} />
            {/* <span className="text-sm">Explore</span> */}
          </Link>
          <button
            onClick={toggleNotificationModal}
            className="flex flex-col items-center"
          >
            <AiOutlineBell size={24} />
            {/* <span className="text-sm">Alerts</span> */}
          </button>
          <Link to="/profile" className="h-8 w-8 rounded-full bg-[url('images/rickandmorty3.jpg')] bg-cover cursor-pointer">
          </Link>
        </div>
      </div>

      {/* Create Section */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-3/4 bg-gray-800 rounded-lg p-6 text-center shadow-lg">
            <button
              onClick={toggleCreateModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
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

            {selectedFile ? (
              <>
                <h2 className="text-lg font-medium text-gray-300 mb-4">
                  Create post
                </h2>
                <div className="border-2 border-dashed rounded-md p-4">
                  <div className="flex gap-6">
                    <div className="w-1/2">
                      <img
                        src={imagePreview}
                        alt="Selected file preview"
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>

                    <div className="w-1/2 space-y-4">
                      <textarea
                        placeholder="Add caption......"
                        value={input.content}
                        name="content"
                        onChange={changeEventHandler}
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md outline-none resize-none"
                        rows="3"
                      ></textarea>
                      <textarea
                        placeholder="Add your hashtags #......"
                        value={input.tags}
                        name="tags"
                        onChange={changeEventHandler}
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md outline-none resize-none"
                        rows="2"
                      ></textarea>
                      <input
                        type="text"
                        placeholder="Add location"
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md outline-none"
                      />
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Hide view counts</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-purple-500 transition-colors"></div>
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Hide like counts</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-purple-500 transition-colors"></div>
                          </label>
                        </div>
                      </div>

                      <button
                        onClick={createPostHandler}
                        className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md">
                        {loading ? 'shareing...' : 'share'}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // File selection UI
              <>
                <h2 className="text-lg font-medium text-gray-300 mb-8">
                  Create post
                </h2>
                <div className="flex flex-col items-center justify-center h-2/3 border-2 border-dashed border-gray-500 rounded-lg p-6">
                  <div className="w-full h-48 flex justify-center items-center border-dashed border-2 border-gray-500 rounded-lg overflow-hidden">
                    <img
                      src={lineiconsPhoto}
                      alt="Default"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-400 mb-4 mt-4">
                    Drag and drop your photos here
                  </p>
                  <label className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 cursor-pointer">
                    Select from device
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {/* Notifications Modal */}
      {isNotificationOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <div className="relative rounded-lg text-center shadow-lg">
            <button
              onClick={toggleNotificationModal}
              className="absolute top-10 right-9 text-gray-500 hover:text-gray-300"
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
            <Notifications />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;





// import React, { useState } from "react";
// import {
//   AiOutlineHome,
//   AiOutlineBell,
//   AiOutlineMessage,
// } from "react-icons/ai";
// import { BsCompass } from "react-icons/bs";
// import { FiPlusSquare } from "react-icons/fi";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { toast } from "sonner";
// import lineiconsPhoto from "../images/lineicons_photos.png";
// import Notifications from "./Notification";
// import { setPosts } from "@/redux/postSlice";

// const Sidebar = () => {
//   const [isCreateOpen, setIsCreateOpen] = useState(false);
//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [input, setInput] = useState({ content: "", media: "", tags: "" });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((store) => store.auth);
//   const { posts } = useSelector((store) => store.post);

//   // Toggles for modals
//   const toggleCreateModal = () => setIsCreateOpen((prev) => !prev);
//   const toggleNotificationModal = () => setIsNotificationOpen((prev) => !prev);

//   // File change handler
//   const handleFileChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedFile(file);
//       const reader = new FileReader();
//       reader.onload = () => setImagePreview(reader.result);
//       reader.onerror = () => toast.error("Error loading image. Please try again.");
//       reader.readAsDataURL(file);
//     }
//   };

//   // Input change handler
//   const handleInputChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   // Post creation handler
//   const createPostHandler = async () => {
//     if (!input.content || !selectedFile) {
//       return toast.error("Content and media are required.");
//     }

//     const formData = new FormData();
//     formData.append("content", input.content);
//     formData.append("media", selectedFile);
//     formData.append("tags", input.tags);

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("accesstoken");
//       const res = await axios.post(
//         "https://hola-project.onrender.com/api/posts/create/",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       dispatch(setPosts([res.data, ...posts]));
//       toast.success("Post created successfully!");
//       setIsCreateOpen(false);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Error creating post.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Sidebar or Bottom Bar */}
//       <div className="hidden lg:flex w-1/5 min-w-max bg-black h-full flex-col items-center py-6">
//         <nav className="space-y-6">
//           <Link to="/mainHome" className="flex items-center gap-3 text-lg">
//             <AiOutlineHome size={24} />
//             Home
//           </Link>
//           <Link to="/chatbox" className="flex items-center gap-3 text-lg">
//             <AiOutlineMessage size={24} />
//             Messages
//           </Link>
//           <Link to="/explore" className="flex items-center gap-3 text-lg">
//             <BsCompass size={24} />
//             Explore
//           </Link>
//           <button
//             onClick={toggleCreateModal}
//             className="flex items-center gap-3 text-lg"
//           >
//             <FiPlusSquare size={24} />
//             Create
//           </button>
//           <button
//             onClick={toggleNotificationModal}
//             className="flex items-center gap-3 text-lg"
//           >
//             <AiOutlineBell size={24} />
//             Notifications
//           </button>
//         </nav>
//       </div>

//       {/* Bottom Bar */}
//       <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black py-2">
//         <div className="flex justify-around text-white">
//           <Link to="/mainHome" className="flex flex-col items-center">
//             <AiOutlineHome size={24} />
//             <span className="text-sm">Home</span>
//           </Link>
//           <Link to="/chatbox" className="flex flex-col items-center">
//             <AiOutlineMessage size={24} />
//             <span className="text-sm">Messages</span>
//           </Link>
//           <button
//             onClick={toggleCreateModal}
//             className="flex flex-col items-center"
//           >
//             <FiPlusSquare size={24} />
//             <span className="text-sm">Create</span>
//           </button>
//           <Link to="/explore" className="flex flex-col items-center">
//             <BsCompass size={24} />
//             <span className="text-sm">Explore</span>
//           </Link>
//           <button
//             onClick={toggleNotificationModal}
//             className="flex flex-col items-center"
//           >
//             <AiOutlineBell size={24} />
//             <span className="text-sm">Alerts</span>
//           </button>
//         </div>
//       </div>

//       {/* Create Post Modal */}
//       {isCreateOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-gray-800 p-6 rounded-lg w-3/4 max-w-2xl shadow-lg relative">
//             <button
//               onClick={toggleCreateModal}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
//             >
//               ✕
//             </button>
//             <h2 className="text-lg font-medium text-gray-300 mb-4">
//               Create Post
//             </h2>

//             {selectedFile ? (
//               <div className="flex gap-6">
//                 {/* Image Preview */}
//                 <img
//                   src={imagePreview}
//                   alt="Selected"
//                   className="w-1/2 rounded-md object-cover"
//                 />
//                 {/* Post Inputs */}
//                 <div className="w-1/2 space-y-4">
//                   <textarea
//                     name="content"
//                     value={input.content}
//                     onChange={handleInputChange}
//                     placeholder="Add caption..."
//                     className="w-full p-2 bg-gray-700 rounded-md text-gray-200"
//                   />
//                   <textarea
//                     name="tags"
//                     value={input.tags}
//                     onChange={handleInputChange}
//                     placeholder="Add hashtags #..."
//                     className="w-full p-2 bg-gray-700 rounded-md text-gray-200"
//                   />
//                   <button
//                     onClick={createPostHandler}
//                     className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md"
//                   >
//                     {loading ? "Sharing..." : "Share"}
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-center">
//                 <img
//                   src={lineiconsPhoto}
//                   alt="Default"
//                   className="w-full h-48 object-contain mb-4"
//                 />
//                 <label className="px-4 py-2 bg-purple-600 text-white rounded-md cursor-pointer">
//                   Select from device
//                   <input
//                     type="file"
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                 </label>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Notifications Modal */}
//       {isNotificationOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-gray-800 p-6 rounded-lg w-2/4 max-w-xl shadow-lg relative">
//             <button
//               onClick={toggleNotificationModal}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
//             >
//               ✕
//             </button>
//             <Notifications />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;
