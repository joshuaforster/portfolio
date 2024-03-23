import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow-lg py-4 bg-white sticky top-0 z-50">
            <div className='mx-auto px-4 md:px-12 lg:px-24 flex flex-row justify-between items-center max-w-screen-2xl m-auto'>
                <Link to='/'>
                    <img src="/joshLogo.png" alt="Josh's Logo" className="h-10"/>
                </Link>
                <nav className="flex space-x-4">
                    <Link to="/" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                        Home
                    </Link>

                    <Link to="/blog" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
}
