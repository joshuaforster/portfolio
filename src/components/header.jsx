import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { useTheme } from "./themecontext"
import DarkButton from "./darkButton";

export default function Header() {

    const { darkMode } = useTheme()


    const [clicked, isClicked] = React.useState(false);

    function toggle() {
        isClicked(prev => !prev);
    }

    function closeMenu() {
        isClicked(false); 
    }
    // SVG paths for hamburger and X icons
    const iconStyles = `h-6 w-6 ${clicked ? 'transform rotate-180' : ''} text-gray-900 dark:text-white`; // Add text color change for dark mode

    const HamburgerIcon = (
        <svg className={iconStyles} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    );

    const CloseIcon = (
        <svg className={iconStyles} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    );
    
    return (
        <section className=" shadow-lg  bg-white dark:bg-gray-800 sticky top-0 z-50">
            <header className='mx-auto px-4 md:px-12 lg:px-24 flex justify-between items-center max-w-screen-2xl py-4'>
                <Link to='/'>
                    {/* Keep the original condition and image paths as you provided */}
                    {darkMode ? <img src="/logoLight.png" alt="Josh's Logo" className="h-10"/> : <img src="/joshLogo.png" alt="Josh's Logo" className="h-10"/>}
                </Link>
                <div className="flex">
                    <DesktopNav />
                    <DarkButton />
                    <div onClick={toggle} className='lg:hidden'>
                    {clicked ? CloseIcon : HamburgerIcon}
                    </div>
                </div>
            </header>
            {clicked ? <MobileNav onClose={closeMenu} /> : ''}
        </section>
    );
}
