import React, { useEffect } from 'react';
import PostCard from './Postcard';
import { useSelector } from 'react-redux';
import store from '@/redux/store';
import useGetAllPost from '@/hooks/useGetAllPost';
import useGetHomepage from '@/hooks/useGetHomepage';

const Feed = () => {

  const { posts, fetchAllPosts } = useGetHomepage();

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available to show. Follow a user to see their posts.</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </div>
  );
};

export default Feed;
