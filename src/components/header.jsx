import React from "react";
import { Link } from "react-router-dom";
import DarkButton from "./darkButton";
import { useTheme } from "./themecontext"; // Make sure this path is correct

export default function Header() {
    const { darkMode } = useTheme(); // Accessing darkMode using the useTheme hook

    return (
        <header className="shadow-lg py-4 bg-white dark:bg-gray-800 sticky top-0 z-50">
            <div className='mx-auto px-4 md:px-12 lg:px-24 flex flex-row justify-between items-center max-w-screen-2xl m-auto'>
                <Link to='/'>
                    {/* Keep the original condition and image paths as you provided */}
                    {darkMode ? <img src="/logoLight.png" alt="Josh's Logo" className="h-10"/> : <img src="/joshLogo.png" alt="Josh's Logo" className="h-10"/>}
                </Link>
                <nav className="flex space-x-4">
                    <Link to="/" className="text-lg font-medium text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 transition duration-150 ease-in-out">
                        Home
                    </Link>
                    <Link to="/blog" className="text-lg font-medium text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 transition duration-150 ease-in-out">
                        Blog
                    </Link>
                </nav>
                <DarkButton></DarkButton>
            </div>
        </header>
    );
}
