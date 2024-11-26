import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '@/redux/authSlice';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    // const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        try {    //https://socialnetworkingsite.onrender.com
            setLoading(true);
            const res = await axios.post('https://socialnetworkingsite.onrender.com/auth/login', input,{
                withCredentials: true,
            } );
                // , {
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                // withCredentials: true,
            // });
            if (res.data) {
                // const { user, token } = res.data;
                const {access, refresh} = res.data;
                const user = res.config.data;
                localStorage.setItem('accesstoken', res.data.access);
                localStorage.setItem('refreshtoken', res.data.refresh);
                dispatch(setAuthUser(user));
                console.log(res);
                
                navigate("/mainHome");
                toast.success(`Welcome`);
                setInput({
                    email: "",
                    password: ""
                });
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        } finally {
            setLoading(false);
        }
    }

    // useEffect(() => {
    //     if (user) {
    //         navigate("/");
    //     }
    // }, [])
    return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
          <div className="absolute text-[38rem] font-bold tracking-wide transform -translate-x-1/2 left-1/2 top-[-20%] pointer-events-none text-transparent z-0 select-none">
            <span className="stroke-text">hola</span>
          </div>
          <div className="absolute text-[38rem] font-bold tracking-wide transform -translate-x-1/2 left-1/2 top-[-20%] pointer-events-none text-black z-0 select-none">
            <span>hola</span>
          </div>
    
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg w-96 z-10">
            <h1 className="text-xl font-bold mb-4 text-center">
              <span className="text-purple-400">hola</span> mi amigos
            </h1>
            <form onSubmit={loginHandler} className="space-y-4">
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring focus:ring-purple-500"
              />
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={input.password}
                  onChange={changeEventHandler}
                  placeholder="Create password"
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring focus:ring-purple-500"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </button>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 rounded-md font-bold text-black bg-purple-500 hover:bg-purple-600 transition ${
                  loading ? "opacity-70" : ""
                }`}
              >
                {loading ? "Loging in..." : "Log in"}
              </button>
            </form>
    
            <div className="mt-4 text-center text-gray-400">or</div>
            <Link to="/forgotpassword">
            <div className="text-red-600 text-shadow flex justify-end mb-6">Forgot Password</div>
            </Link>
            <div className="flex gap-4">
              <button className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-bold flex items-center justify-center">
                Continue with <FontAwesomeIcon icon={faGoogle} className="ml-2" />
              </button>
              <button className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-bold flex items-center justify-center">
                Continue with <span className="ml-2 text-2xl">&#x2709;</span>
              </button>
            </div>
    
            <div className="mt-4 text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <Link to="/signup" className="text-purple-400 hover:underline">
                sign in
              </Link>
            </div>
          </div>
        </div>
      );
}

export default Login;
