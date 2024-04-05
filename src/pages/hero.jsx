import React from 'react';

const contactOptions = [
    { name: 'Email', link: 'mailto:joshuaforster@icloud.com' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/joshua-forster-26804421a/' },
    { name: 'GitHub', link: 'https://github.com/joshuaforster' },
    { name: 'CV', link: '/curriculumVitae.pdf' }
];

export default function Hero() {
    return (
        <section className="relative bg-[#F3F3F4] dark:bg-gray-900 bg-no-repeat bg-cover bg-center w-full min-h-[500px] md:h-[700px]" style={{ backgroundImage: "url('/Mask group.png')" }}>
            <div className="absolute inset-0 bg-black opacity-20 dark:opacity-40"></div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-2xl max-w-2xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl text-gray-800 dark:text-white font-semibold mb-3">JOSHUA FORSTER</h1>
                <h2 className="text-xl md:text-2xl text-customRed-100 font-medium mb-2">FRONTEND DEVELOPER</h2>
                <div className="border-t-2 border-green-500 w-24 mx-auto my-3"></div>
                <p className="text-md md:text-lg text-gray-600 dark:text-gray-200 mb-5">Crafting Responsive and Engaging Websites with a Blend of Modern Design and Cutting-Edge Frontend Technologies</p>
                
                <div className="flex justify-center items-center gap-4 mb-5">
                    {contactOptions.map((option) => (
                        <a key={option.name} href={option.link} className="bg-white dark:bg-gray-700 shadow-lg rounded-full p-3 inline-flex items-center justify-center dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 ease-in-out">
                            {option.name}
                        </a>
                    ))}
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

