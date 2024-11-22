import React from 'react'
import Header from './Header'
import Sidebar from './LeftSidebar'
import {
    AiOutlineHome,
    AiOutlineBell,
    AiOutlineMessage,
} from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { BsCompass, BsGear } from "react-icons/bs";

function Explore() {
    const images = [
        "https://images.pexels.com/photos/163184/instagram-cell-phone-tablet-device-163184.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/20120412/pexels-photo-20120412/free-photo-of-brahminy-kite-juvenile.png?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6259874/pexels-photo-6259874.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/15525846/pexels-photo-15525846/free-photo-of-smart-phone-with-opened-istangram-lying-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/14274428/pexels-photo-14274428.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/19598345/pexels-photo-19598345/free-photo-of-a-building-with-a-sign-on-it-at-night.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/20556722/pexels-photo-20556722/free-photo-of-a-person-riding-a-bike-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/14099409/pexels-photo-14099409.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/9693361/pexels-photo-9693361.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    const generateRandomStyles = () => {
        const randomSpanc = Math.floor(Math.random() * 4) + 1;
        const randomSpanr = Math.floor(Math.random() * 3) + 1;
        return {
            // gridColumn: `span ${randomSpanc}`,
            gridRow: `span ${randomSpanr}`,
        };
    };
    return (
        <>
            <div className="max-h-lvh bg-sidebarGray mr-10 text-white flex">
                <div className="flex-1">
                    <main className="p-6">
                        <div
                            className="grid grid-cols-3 gap-4"
                            style={{
                                gridAutoRows: "200px", // Base row height
                            }}
                        >
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 rounded-lg overflow-hidden"
                                    style={generateRandomStyles()} // Apply random styles
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Explore