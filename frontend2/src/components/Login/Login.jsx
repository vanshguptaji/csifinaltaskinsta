import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '@/redux/authSlice';

function Login() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
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
            const res = await axios.post('https://hola-project.onrender.com/api/auth/login/', input,
            );
                // , {
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                // withCredentials: true
            // });
            if (res.data) {
                // const { user, token } = res.data;
                const {access, refresh} = res.data;
                const user = res.config.data;
                // Store token in localStorage or sessionStorage
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
        <div>
            <div className="background-text">hola</div>
            <div className="background-text2">hola</div>

            <div className="form-container">
                <h1><span className="highlight">Hola</span> mi amigos</h1>
                <form onSubmit={loginHandler}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={changeEventHandler}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={input.password}
                        onChange={changeEventHandler}
                        placeholder="Password"
                        required
                    />
                    <div className="forgottext">
                        <a href="">Forgot Password?</a>
                    </div>

                        <button className="signup-btn" type="submit" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                </form>

                <div className="or-divider">or</div>

                <div className="social-buttons">
                    <button>
                        Continue with <FontAwesomeIcon icon={faGoogle} />
                    </button>
                    <button>
                        Continue with <span className="glogo">&#x2709;</span>
                    </button>
                </div>

                <div className="footer-text">
                    Don't have an account?
                    <Link to="/signup" className="text-purple-400 hover:text-purple-300 underline">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
