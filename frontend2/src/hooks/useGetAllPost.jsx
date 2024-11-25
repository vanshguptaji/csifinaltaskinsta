import { setPosts } from "@/redux/postSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";


const useGetAllPost = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("accesstoken");
    const [input, setInput] =   useState({
        is_public: true,
    })
    useEffect(() => {
        const fetchAllPost = async () => {
            try {
                const res = await axios.post('https://hola-project.onrender.com/api/posts/', input,
                    {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        //  withCredentials: true,
                      },
                      Authorization: `Bearer ${token}`,
                    });
                console.log(res);
                
                if (res.data) {
                    console.log(res);
                    console.log("fetched all posts successfully");
                    
                    dispatch(setPosts(res.data));
                }
            } catch (error) {
                console.log(error.message);
                toast.error("Failed to fetch posts");
            }
        }
        // fetchAllPost();
    }, []);
};
export default useGetAllPost;