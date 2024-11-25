const deletePost = async (id) => {
    const token = localStorage.getItem("accesstoken");
    try {
      const res = await axios.delete(`https://hola-project.onrender.com/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 204) {
        dispatch(setPosts(posts.filter((post) => post.id !== id)));
        toast.success("Post deleted successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete post");
    }
  };
  
  // In JSX
//   <button onClick={() => deletePost(post.id)} className="delete-btn">
//     Delete
//   </button>;
  