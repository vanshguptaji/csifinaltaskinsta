import React from 'react';
import PostCard from './Postcard';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

const Feed = () => {
  const posts = [
    {
      image: 'https://images.pexels.com/photos/28274414/pexels-photo-28274414/free-photo-of-balkon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with actual image
      author: 'Alanna Myassa',
      caption: 'The Earth has music for those who listen 🌼',
    },
    {
      image: 'https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image
      author: 'Alanna Myassa',
      caption: 'Exploring the beauty of nature 🌌',
    },
  ];
  const {postss} = useSelector(store => store.post);

  return (
    <div>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          image={post.image}
          author={post.author}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Feed;
