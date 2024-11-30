import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [input, setInput] = useState({
    full_name: "",
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "https://hola-project.onrender.com/api/auth/register/",
        input
      );
      if (res) {
        navigate("/login");
        toast.success(res.data.message);
        setInput({
          full_name: "",
          email: "",
          password: "",
        });
      } else {
        toast.error(error.message);
      }  
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
  <div className="absolute text-[10rem] sm:text-[20rem] md:text-[30rem] lg:text-[38rem] font-bold tracking-wide transform -translate-x-1/2 left-1/2 top-[-6%] lg:top-[-20%] pointer-events-none text-transparent z-0 select-none">
    <span className="stroke-text">hola</span>
  </div>
  <div className="absolute text-[10rem] sm:text-[20rem] md:text-[30rem] lg:text-[38rem] font-bold tracking-wide transform -translate-x-1/2 left-1/2 top-[-6%] lg:top-[-20%] pointer-events-none text-black z-0 select-none">
    <span>hola</span>
  </div>

  <div className="bg-gray-800 bg-opacity-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-96 z-10">
    <h1 className="text-lg sm:text-xl font-bold mb-4 text-center">
      <span className="text-purple-400">hola</span> mi amigos
    </h1>
    <form onSubmit={signupHandler} className="space-y-4">
      <input
        type="text"
        name="full_name"
        value={input.full_name}
        onChange={changeEventHandler}
        placeholder="Create username"
        required
        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring focus:ring-purple-500"
      />
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
      <div className="relative">
        <input
          type={confirmPasswordVisible ? "text" : "password"}
          placeholder="Confirm password"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring focus:ring-purple-500"
        />
        <button
          type="button"
          onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon
            icon={confirmPasswordVisible ? faEyeSlash : faEye}
          />
        </button>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-md font-bold text-black bg-purple-500 hover:bg-purple-600 transition ${
          loading ? "opacity-70" : ""
        }`}
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>

    <div className="my-4 text-center text-gray-400">or</div>

    <div className="flex flex-col sm:flex-row gap-4">
      <button className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-bold flex items-center justify-center">
        Continue with <FontAwesomeIcon icon={faGoogle} className="ml-2" />
      </button>
      <button className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-bold flex items-center justify-center">
        Continue with <span className="ml-2 text-2xl">&#x2709;</span>
      </button>
    </div>

    <div className="mt-4 text-center text-gray-400 text-sm">
      Already have an account?{" "}
      <Link to="/login" className="text-purple-400 hover:underline">
        Log in
      </Link>
    </div>
  </div>
</div>

  );
}

export default Signup;
