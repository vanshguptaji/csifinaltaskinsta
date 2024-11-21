import { setPosts } from "@/redux/postSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetAllPost = () => {
    const dispatch = useDispatch();
    const access = localStorage.getItem("access");
    useEffect(() => {
        const fetchAllPost = async () => {
            try {
                const res = await axios.post('https://hola-project.onrender.com/api/posts/',{
                        Authorization: `Bearer ${access}`,
                });
                if (res.data) {
                    console.log(res.data);
                    dispatch(setPosts(res.data.posts));
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchAllPost();
    }, []);
};
export default useGetAllPost;