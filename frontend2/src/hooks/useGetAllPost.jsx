import { setPosts } from "@/redux/postSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


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
                
                if (res) {
                    console.log(res);
                    // dispatch(setPosts(res.data.posts));
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        // fetchAllPost();
    }, []);
};
export default useGetAllPost;