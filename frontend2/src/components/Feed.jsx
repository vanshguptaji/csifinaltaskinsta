import React, { useEffect } from 'react';
import PostCard from './Postcard';
import { useSelector } from 'react-redux';
import store from '@/redux/store';
// import { fetchAllPosts } from '@/hooks/useGetHomepage';
import useGetAllPost from '@/hooks/useGetAllPost';
import useGetHomepage from '@/hooks/useGetHomepage';
// import rickandmorty from '../../images/rickandmorty.webp'

const Feed = () => {//
  // const posts = [
  //   {
  //     image: 'https://images.pexels.com/photos/28274414/pexels-photo-28274414/free-photo-of-balkon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with actual image
  //     author: 'Alanna Myassa',
  //     content: 'The Earth has music for those who listen 🌼',
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image
  //     author: 'Alanna Myassa',
  //     content: 'Exploring the beauty of nature 🌌',
  //   },
  // ];
  const {posts, fetchAllPosts} = useGetHomepage();
  // useEffect(() => {
  //   fetchAllPosts();
  // },[])
  // const {Hposts} = useSelector(store => store.post);
  // console.log(posts);
  
  // const post = posts.slice (0,10);
  

  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post}
        />
      ))}
    </div>
  );
};

export default Feed;
