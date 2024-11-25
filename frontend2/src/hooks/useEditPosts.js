const editPost = async (id) => {
    const token = localStorage.getItem("accesstoken");
    try {
      const res = await axios.put(`https://hola-project.onrender.com/api/posts/${id}`, input, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data) {
        dispatch(setPosts(posts.map((post) => (post.id === id ? res.data : post))));
        toast.success("Post updated successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update post");
    }
  };
  
  // In JSX (similar to create post modal)
//   <button onClick={() => editPost(post.id)} className="edit-btn">
//     Edit
//   </button>;
  