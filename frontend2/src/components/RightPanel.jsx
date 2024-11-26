import React from 'react';

const RightPanel = () => {
    return (
        <div className="w-1/4 min-w-max bg-black h-full p-4 mr-16">
            <button className="bg-goliveGray text-black rounded-lg py-2 px-4 mb-6 w-full font-bold ">
                GO LIVE
            </button>

            <div className="bg-black border-2 border-solid border-[#F8BD00] text-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex  items-center mb-3">
                    {/* Icon */}
                    <div className="text-yellow-500 text-2xl mr-3">⭐</div>
                    {/* Title */}
                    <p className="text-gray-400">Grow professionally with Premium</p>
                </div>
                {/* Call to Action */}
                <p className="text-lg font-semibold text-white">
                    Try 1 month for $0
                </p>
            </div>

            <div className='border-4 border-solid border-purple-600 rounded-md p-4 mb-10'>
                <h3 className="text-xl font-semibold mb-4">Live</h3>
                <div className="flex space-x-3 mb-4">
                    {[...Array(4)].map((_, i) => (
                        <div className='flex flex-col items-center space-y-3'>
                            <div
                                key={i}
                                className="h-14 w-14 rounded-full bg-[url('images/rickandmorty3.jpg')] bg-cover"
                            >
                            </div>
                            <div>@User</div>

                        </div>
                    ))}
                </div>
            </div>

            <div className='border-2 border-solid p-2 rounded-md'>
                <h3 className="text-xl font-semibold mb-4">Add friends</h3>
                <ul className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                        <li
                            key={i}
                            className="flex items-center justify-between bg-sidebarGray p-3 rounded-lg"
                        >
                            <div className='flex items-center gap-4'>
                                <div className="h-16 w-16 rounded-full bg-[url('images/rickandmorty3.jpg')] bg-cover cursor-pointer"></div>
                                <span className="font-semibold">Rick {i + 1}</span>
                            </div>
                            <button className="bg-purple-600 py-1 px-3 rounded-lg text-sm">
                                Add
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RightPanel;
