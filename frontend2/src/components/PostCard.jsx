import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { Dialog, DialogTrigger, DialogDescription, DialogContent } from './ui/dialog';
import { MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import CommentDialog from './CommentDialog';
import rickandmorty from '../images/rickandmorty.webp'

const PostCard = ({ post }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [postTest,setPostTest] = useState(post);
  

  const BASE_URL = 'https://hola-project.onrender.com';

  const changeEventHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText);
    } else {
      setText("");
    }
  }
  // {post.created_by?.profilePicture ? `${BASE_URL}${post.created_by.profilePicture}` : ''}
  return (
    <div 
    className="max-w-fit h-auto rounded-lg bg-postcardGray shadow-md mb-6 p-4    
        max-w-[600px] 
        2xl:min-w-screen
        lg:max-w-[500px] 
        md:max-w-[400px] 
        sm:max-w-[auto]">
      <div className="flex items-center justify-between">
        <div className="flex items-center mb-4">
          <div className="h-16 w-16 rounded-full bg-[url('images/rickandmorty2.jpg')] bg-cover cursor-pointer"></div>
          <h4 className="ml-3 font-semibold cursor-pointer text-sm sm:text-base">{post.created_by?.username}</h4>
        </div>
        <Dialog className=''>
          <DialogTrigger asChild>
            <MoreHorizontal className='cursor-pointer' />
          </DialogTrigger>
          <DialogContent className="flex flex-col items-center text-sm text-center bg-sidebarGray">
            {/* {
              post?.author?._id !== user?._id && <Button variant='ghost' className="cursor-pointer w-fit text-[#ED4956] font-bold">Unfollow</Button>
            } */}
            <Button variant='ghost' className="cursor-pointer w-fit text-purple-600 font-bold hover:text-black hover:bg-purple-400">Add to favorites</Button>
            <Button variant='ghost' className="cursor-pointer w-fit text-purple-600 font-bold hover:text-black hover:bg-purple-400">follow</Button>
            <Button variant='ghost' className="cursor-pointer w-fit text-red-600 font-bold hover:text-black hover:bg-red-600">Delete</Button>
            <Button variant='ghost' className="cursor-pointer w-fit text-purple-600 font-bold hover:text-black hover:bg-purple-400">Unfollow</Button>
            {/* {
              user && user?._id === post?.author._id && <Button onClick={deletePostHandler} variant='ghost' className="cursor-pointer w-fit">Delete</Button>
            } */}
          </DialogContent>
        </Dialog>
      </div>
      <p className="mb-2">{post.content}</p>
      {post.media && (
                <>
                    {/* {console.log('Image URL:', post.media)} Log the image URL */}
                    <img src={post.media} alt={post.content} className="rounded-md w-full max-h-[700px] object-cover sm:max-h-[250px] md:max-h-[400px] mb-4"/>
                </>
            )}
      <div className="flex items-center gap-4">
        <AiOutlineHeart size={24} className='cursor-pointer' />
        <AiOutlineComment size={24} onClick={() => setOpen(true)} className='cursor-pointer ' />
        <CommentDialog open={open} setOpen={setOpen} />
        {/* <div className='flex items-center justify-between'>
          <input
            type="text"
            placeholder='Add a comment...'
            value={text}
            onChange={changeEventHandler}
            className='outline-none text-sm w-full'
          />
          <span className='text-purple-600 cursor-pointer'>Post</span>
          {
                    text && <span
                    onClick={commentHandler} 
                    className='text-[#3BADF8] cursor-pointer'>Post</span>
                }

        </div> */}
        <FiSend size={24} className='cursor-pointer' />
      </div>
    </div>
  );
};

export default PostCard;