import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./themecontext"; // Ensure this path is correct

export default function MobileNav() {
    const { darkMode } = useTheme(); // Accessing darkMode using the useTheme hook

    return (
        <div className={`mx-auto px-4 md:px-12 lg:px-24 flex justify-center items-center max-w-screen-2xl lg:hidden ${darkMode ? 'dark' : ''}`}>
            <nav className="flex flex-col items-center gap-y-4">
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
