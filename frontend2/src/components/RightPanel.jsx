import React from 'react';

const RightPanel = () => {
    return (
        <div className="w-1/4 min-w-max bg-sidebarGray h-full p-4">
            <button className="bg-goliveGray text-white rounded-lg py-2 px-4 mb-6 w-full">
                GO LIVE
            </button>

            <div>
                <h3 className="text-xl font-semibold mb-4">Live</h3>
                <div className="flex space-x-3 mb-6">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center"
                        >
                            <span>@User</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4">Add friends</h3>
                <ul className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                        <li
                            key={i}
                            className="flex items-center justify-between bg-sidebarGray p-3 rounded-lg"
                        >
                            <div className='flex items-center gap-4'>
                            <div className="h-10 w-10 rounded-full bg-gray-600 cursor-pointer"></div>
                            <span className="font-semibold">Friend {i + 1}</span>
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
