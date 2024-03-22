import React from 'react';

export default function Hero() {
    return (
        <section className="relative bg-[#F3F3F4] bg-no-repeat bg-cover bg-center w-full min-h-[500px] md:h-[700px]" style={{ backgroundImage: "url('/Mask group.png')" }}>
            {/* Optional overlay to darken the image background for text readability */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
            
            {/* Central white content box, optimized for responsiveness */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-10 rounded-lg shadow-2xl max-w-2xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl text-gray-800 font-semibold mb-3">JOSHUA FORSTER</h1>
                <h2 className="text-xl md:text-2xl text-customRed-100 font-medium mb-2">FRONTEND DEVELOPER</h2>
                <div className="border-t-2 border-green-500 w-24 mx-auto my-3"></div>
                <p className="text-md md:text-lg text-gray-600 mb-5">Crafting Responsive and Engaging Websites with a Blend of Modern Design and Cutting-Edge Frontend Technologies</p>
                <div className="flex justify-center items-center gap-4 mb-5">
                    <div className="bg-white shadow-lg rounded-full p-3 inline-flex items-center justify-center">
                        Email
                    </div>
                    <div className="bg-white shadow-lg rounded-full p-3 inline-flex items-center justify-center">
                        LinkedIn
                    </div>
                    <div className="bg-white shadow-lg rounded-full p-3 inline-flex items-center justify-center">
                        GitHub
                    </div>
                    <div className="bg-white shadow-lg rounded-full p-3 inline-flex items-center justify-center">
                        CV
                    </div>
                </div>
                <div className="flex justify-center gap-5">
                    <a href='#contact' className="bg-customRed-100 text-white rounded-full px-6 py-2 text-lg font-medium hover:bg-customRed-200 transition-colors duration-200 ease-in-out">
                        Contact
                    </a>
                    <a href='#portfolio' className="bg-green-900 text-white rounded-full px-6 py-2 text-lg font-medium hover:bg-green-800 transition-colors duration-200 ease-in-out">
                        See Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

