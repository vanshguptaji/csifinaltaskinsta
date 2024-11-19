import React from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

const PostCard = ({ image, author, caption }) => {
  return (
    <div className="rounded-lg bg-postcardGray shadow-md mb-6 p-4">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-gray-600"></div>
        <h4 className="ml-3 font-semibold">{author}</h4>
      </div>
      <p className="mb-2">{caption}</p>
      <img src={image} alt="Post" className="rounded-md mb-4" />
      <div className="flex items-center gap-4">
        <AiOutlineHeart size={24} />
        <AiOutlineComment size={24} />
        <FiSend size={24} />
      </div>
    </div>
  );
};

export default PostCard;
