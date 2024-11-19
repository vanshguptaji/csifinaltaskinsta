import React from 'react';
import PostCard from './Postcard';

const Feed = () => {
  const posts = [
    {
      image: 'https://images.pexels.com/photos/122383/pexels-photo-122383.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image
      author: 'Alanna Myassa',
      caption: 'The Earth has music for those who listen 🌼',
    },
    {
      image: 'https://images.pexels.com/photos/122383/pexels-photo-122383.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image
      author: 'Alanna Myassa',
      caption: 'Exploring the beauty of nature 🌌',
    },
  ];

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
