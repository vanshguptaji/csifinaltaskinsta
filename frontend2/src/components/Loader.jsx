import React from "react";

const Loader = () => {
    return (
        <div className="h-screen bg-black flex items-center justify-center">
            <h1 className="relative text-white font-bold text-[50px] text-center">
                hola
                <span className="absolute top-0 left-0 w-full text-purple-600 border-r-2 border-purple-600 overflow-hidden animate-text">
                    hola
                </span>
            </h1>
        </div>
    );
};

export default Loader;
