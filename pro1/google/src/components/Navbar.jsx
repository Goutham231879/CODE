import React from "react";
import Search from './Search';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
            <div className="flex justify-between items-center space-x-5 w-screen bg-blue-500">
                <Link to='/'>

                    <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
                        Goggl
                    </p>

                </Link>
            </div>
        </div >
    );
}

export { Navbar as default };