import React, { useState } from 'react';
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
            setLoading(true);
            console.log(input);
            
            const res = await axios.post('http://hola-project.onrender.com/api/auth/forgot-password/', input,
                 {});

            if (res) {
                toast.success(`Enter the OTP sent to your email.`);
            } else {
                toast.error("Email doesn't exist");
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative h-screen bg-black flex items-center justify-center">
            {/* Background Texts */}
            <div className="absolute text-[38rem] font-bold tracking-wide transform -translate-x-1/2 left-1/2 top-[-20%] pointer-events-none text-transparent z-0 select-none">
            <span className="stroke-text">hola</span>
          </div>
          <div className="absolute text-[38rem] font-bold tracking-wide transform -translate-x-1/2 left-1/2 top-[-20%] pointer-events-none text-black z-0 select-none">
            <span>hola</span>
          </div>

            {/* Form Container */}
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg w-96 z-10">
                {/* Progress Indicator */}
                <div className="flex justify-between items-center mb-6 relative">
                    <div className="relative w-full h-1 bg-white">
                        <div className="absolute left-[6%] right-[4%] h-[3px] bg-white"></div>
                    </div>
                    <span className="dot w-3.5 h-3.5 bg-purple-600 rounded-full absolute left-0 translate-x-0"></span>
                    <span className="dot w-3.5 h-3.5 bg-white rounded-full absolute left-20 translate-x-16"></span>
                    <span className="dot w-3.5 h-3.5 bg-white rounded-full"></span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl text-white font-bold mb-4">
                    <span className="text-[#a78bfa]">hola</span> mi amigos
                </h1>

                {/* Form */}
                <form onSubmit={otpSender}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={changeEventHandler}
                        placeholder="Enter your Email"
                        required
                        className="w-full px-4 py-2 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring focus:ring-purple-500"
                    />
                    <button 
                        className={`w-full py-3 rounded-md bg-purple-500 text-black font-bold hover:bg-purple-600 transition ${loading ? 'opacity-70' : ''}`} 
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
