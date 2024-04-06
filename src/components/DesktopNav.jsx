import React from "react";
import { Link } from "react-router-dom";



export default function DesktopNav() {
    

    return (
                <div className='hidden lg:flex flex-row items-center'>
                    <nav className="flex gap-x-4 mr-10">
                        <Link to="/" className="text-lg font-medium text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 transition duration-150 ease-in-out">
                            Home
                        </Link>
                        <Link to="/blog" className="text-lg font-medium text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 transition duration-150 ease-in-out">
                            Blog
                        </Link>
                    </nav>
                </div>
           
    );
}
