import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { setHposts } from "@/redux/postSlice";
// import { refreshToken } from "../redux/authService";

const useGetHomepage = () => {
    const [posts, setPosts] = useState([]);
    const [rightbar, setRightbar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const fetchAllPosts = async () => {
        try {
            let token = localStorage.getItem('accesstoken');
            if (!token) {
                throw new Error("No access token found");
            }

            let res = await axios.get('https://hola-project.onrender.com/api/accounts/homepage/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(res);
            

            if (res.status === 401) {
                token = await refreshToken();
                res = await axios.get('https://hola-project.onrender.com/api/accounts/homepage/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            }
            // console.log(res);
            

            if (res.status === 200) {
                console.log('API Response:', res.data); 
                setPosts(res.data.posts || []); 
                // console.log(res,"================================");
            }
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllPosts();
    }, []);

    const fetchRighbar = async () => {
        try {
            let token = localStorage.getItem('accesstoken');
            if (!token) {
                throw new Error("No access token found");
            }

            let res = await axios.get('https://hola-project.onrender.com/api/accounts/homepage/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.status === 401) {
                token = await refreshToken();
                res = await axios.get('https://hola-project.onrender.com/api/accounts/homepage/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            }

            if (res.status === 200) {
                console.log('API Response at rightbar:', res.data); 
                setRightbar(res.data.right_bar || [])
            }
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRighbar();
        // console.log('Rightbar at fetch:', rightbar);
        
    }, []);

    return { posts, rightbar, loading, error, fetchAllPosts, fetchRighbar };
};

export default useGetHomepage;