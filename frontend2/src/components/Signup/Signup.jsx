import React, { useState, useEffect } from 'react'
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import axiosInstance from '../../axiosInstance';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Signup() {
    const [input, setInput] = useState({
        full_name: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    // const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post('https://hola-project.onrender.com/api/auth/register/',input);
                // {
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     credentials: true,
                // }
            // );
            console.log(res);
            console.log("befrorecondition response");
            
            
            if (res) {
                navigate("/login");
                console.log(res.data.message);
                console.log("succes true");
                
                toast.success(res.data.message);
                setInput({
                    full_name: "",
                    email: "",
                    password: ""
                });
            }else {
                console.log(res.error.message);
                console.log("success false");
                
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
            console.log("no response");
            
        } finally {
            setLoading(false);
            console.log("finallly");
            
        }
    }

    // useEffect(() => {
    //     if (user) {
    //         navigate("/");
    //     }
    // }, [])

    return (
        <>
            <div className='overflow-y-hidden'>
                <div class="background-text">hola</div>
                <div class="background-text2">hola</div>

                <div class="form-container">
                    <h1><span class="highlight">hola’</span> mi amigos</h1>


                    <form onSubmit={signupHandler}>
                        <input
                            type="text"
                            name="full_name"
                            value={input.full_name}
                            onChange={changeEventHandler}
                            placeholder="Create username"
                            required />

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder='enter your email'
                            required
                        />

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            placeholder='create password'
                            required
                        />

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            placeholder='confirm password'
                            required
                        />
                        <button class="signup-btn"
                            type="submit"
                            disabled={loading}>
                            {loading ? 'Signing up...' : 'signup'}
                        </button>

                    </form>

                    <div class="or-divider">or</div>

                    <div class="social-buttons">
                        <button>Continue with <FontAwesomeIcon icon={faGoogle} /></button>
                        <button>Continue with <span class="glogo">&#x2709;</span></button>
                    </div>

                    <div class="footer-text">
                        Already have an account?
                        <Link to="/login" className="text-purple-400 hover:text-purple-300 underline">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup