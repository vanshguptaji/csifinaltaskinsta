import React, { useState } from 'react';
import './ForgotPass.css';
import { toast } from 'sonner';
import axios from 'axios';

function ForgotPass() {
    const [input, setInput] = useState({
        email: "",
    });
    const [loading, setLoading] = useState(false);

    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value });
    }

    const otpSender = async (e) => {
        e.preventDefault();
        try {
            setLoading(true); // Correctly setting the loading state
            const res = await axios.post('http://hola-project.onrender.com/api/auth/forgot-password/',{email: input.email }, {});

            if (res) {
                toast.success(`Enter the OTP sent to your email.`);
                // navigate(); // Uncomment and configure navigation when needed
            } else {
                toast.error("Email doesn't exist");
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <div className="background-text">hola</div>
            <div className="background-text2">hola</div>

            <div className="form-container">
                <div className="progress-indicator flex-box">
                    <div className="line"></div>
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <h1><span className="highlight">hola</span> mi amigos</h1>
                <form onSubmit={otpSender}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={changeEventHandler} // Fixed the onChange handler
                        placeholder="Enter your Email"
                        required
                    />
                    <button 
                        className="signup-btn" 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? 'Sending OTP...' : 'Send OTP'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPass;
