import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { Dialog, DialogTrigger, DialogContent } from './ui/dialog';
import { MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import CommentDialog from './CommentDialog';
import { toast } from 'sonner';
import { fetchUserProfile } from "@/hooks/profileActions.js";
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import axios from 'axios';

const PostCard = ({ post, fetchAllPosts }) => {

  const { userProfile, loading, error } = useSelector((state) => state.profile);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [postLike, setPostLike] = useState(post.likes_count || 0);
  const [comment, setComment] = useState(post.comments_count || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [bookmarked, setBookmarked] = useState(false);

  const BASE_URL = 'https://hola-project.onrender.com';
  const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dy1a8nyco/';

  // useEffect(() => {
  //   const userId = userProfile.id;
  //   // console.log(post.likes);
  //   if (userId && post.likes?.includes(userId)) {
  //     setLiked(true);
  //   }
  // }, [post.likes]);

  const likeOrDislikeHandler = async () => {
    const token = localStorage.getItem('accesstoken');
    if (!token) {
      toast.error("User is not authenticated.");
      return;
    }

    try {
      const action = liked ? 'unlike' : 'like';
      const method = liked ? 'delete' : 'post';
      const url = liked
        ? `${BASE_URL}/api/posts/${post.id}/unlike/`
        : `${BASE_URL}/api/posts/${post.id}/like/`;

      const res = await axios({
        method: method,
        url: url,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Like/Unlike API Response:', res.data); 

      if (res.status === 201 || res.status === 204) {
        setLiked(!liked);
        setPostLike(liked ? postLike - 1 : postLike + 1);
        toast.success(res.data.message || (liked ? "Post unliked successfully!" : "Post liked successfully!"));
      } else {
        toast.error(res.data.message || "An error occurred while liking/disliking the post.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while liking/disliking the post.");
    }
  };

  // const addCommentHandler = async () => {
  //   if (!text.trim()) {
  //     toast.error("Comment cannot be empty.");
  //     return;
  //   }

  //   const token = localStorage.getItem('accesstoken');
  //   try {
  //     const res = await axios.post(`${BASE_URL}/api/posts/${post.id}/comments/`, {
  //       content: text
  //     }, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     console.log('Add Comment API Response:', res.data); // Log the response from the API
  //     setComments([...comments, res.data]);
  //     setComment(comment + 1);
  //     setText("");
  //     toast.success("Comment added successfully!");
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("An error occurred while adding the comment.");
  //   }
  // };

  const savePostHandler = () => {
    setBookmarked(!bookmarked);
    toast.success(bookmarked ? "Post unsaved!" : "Post saved!");
  };

  const deletePostHandler = async () => {
    const token = localStorage.getItem('accesstoken');
    if (!token) {
      toast.error("User is not authenticated.");
      return;
    }

    try {
      const res = await axios.delete(`${BASE_URL}/api/posts/${post.id}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Delete Post API Response:', res.data); 
      if (res.data.message === "Post deleted successfully") {
        toast.success("Post deleted successfully!");
        fetchAllPosts(); 
      } else {
        toast.error("An error occurred while deleting the post.");
      }
    } catch (error) {
      console.error('Delete Post Error:', error);
      if (error.response && error.response.status === 403) {
        toast.error("You do not have permission to delete this post.");
      } else {
        toast.error("An error occurred while deleting the post.");
      }
    }
  };
  

  return (
    <div className="max-w-fit h-auto rounded-lg bg-postcardGray shadow-md mb-6 p-4 
    max-w-[600px] 
    2xl:min-w-screen 
    lg:max-w-[500px] 
    md:max-w-[400px] 
    sm:max-w-[auto]">
      <div className="flex items-center justify-between">
        <div className="flex items-center mb-4">
          <div 
          className="h-16 w-16 rounded-full cursor-pointer"
          style={{ backgroundImage: `url(${post.profile_photo || 'https://images.pexels.com/photos/8358795/pexels-photo-8358795.jpeg?auto=compress&cs=tinysrgb&w=600'})`, backgroundSize: 'cover' }}
          ></div>
          <h4 className="ml-3 font-semibold cursor-pointer text-sm sm:text-base">{post.created_by}</h4>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <MoreHorizontal className="cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="flex flex-col items-center text-sm text-center bg-sidebarGray">
            <Button variant="ghost" className="cursor-pointer w-fit text-purple-600 font-bold hover:text-black hover:bg-purple-400">Add to favorites</Button>
            <Button variant="ghost" className="cursor-pointer w-fit text-purple-600 font-bold hover:text-black hover:bg-purple-400">Follow</Button>
            <Button variant="ghost" className="cursor-pointer w-fit text-red-600 font-bold hover:text-black hover:bg-red-600" onClick={deletePostHandler}>Delete</Button>
            <Button variant="ghost" className="cursor-pointer w-fit text-purple-600 font-bold hover:text-black hover:bg-purple-400">Unfollow</Button>
          </DialogContent>
        </Dialog>
      </div>
      <p className="mb-2">{post.content}</p>
      {post.media && (
        <img 
        src={`${CLOUDINARY_BASE_URL}${post.media || 'https://images.pexels.com/photos/19598345/pexels-photo-19598345/free-photo-of-a-building-with-a-sign-on-it-at-night.jpeg?auto=compress&cs=tinysrgb&w=600'}`}
         alt={post.content} 
         className="rounded-md w-full max-h-[700px] object-cover sm:max-h-[250px] md:max-h-[400px] mb-4" />
      )}
      <p>{post.tags}</p>
      <div className="flex items-center gap-4">
        <div>
          {liked ? (
            <AiFillHeart size={24} className="cursor-pointer text-red-500" onClick={likeOrDislikeHandler} />
          ) : (
            <AiOutlineHeart size={24} className="cursor-pointer" onClick={likeOrDislikeHandler} />
          )}
          <p className="text-center">{postLike}</p>
        </div>
        <div>
          <AiOutlineComment size={24} onClick={() => setOpen(true)} className="cursor-pointer" />
          <p className="text-center">{comment}</p>
        </div>
        <div>
          <FiSend size={24} className="cursor-pointer" onClick={savePostHandler} />
          <p className="text-center">{post.shares || 0}</p>
        </div>
      </div>
      {open && <CommentDialog open={open} setOpen={setOpen} postId={post.id}/>}
      {/* <div className="flex items-center justify-between mt-4">
        <input
          type="text"
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="outline-none text-sm w-full"
        />
        <span className="text-purple-600 cursor-pointer" onClick={addCommentHandler}>Post</span>
      </div> */}
    </div>
  );
};

export default PostCard;