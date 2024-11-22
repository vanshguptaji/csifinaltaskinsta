import { setPosts } from "@/redux/postSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetAllPost = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("accesstoken");
    useEffect(() => {
        const fetchAllPost = async () => {
            try {
                const res = await axios.post('https://hola-project.onrender.com/api/posts/',{
                    headers: {
                        Authorization: `Bearer ${token}`,
                         withCredentials: true,
                      },});
                console.log(res);
                
                if (res) {
                    console.log(res);
                    // dispatch(setPosts(res.data.posts));
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchAllPost();
    }, []);
};
export default useGetAllPost;