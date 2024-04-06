import React from 'react';

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ formData });
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <section id='contact' className="flex justify-center items-center min-h-screen bg-[#F3F3F4] dark:bg-gray-800">
            <div className='w-full max-w-lg px-4 py-8 bg-white dark:bg-gray-900 shadow-2xl rounded-lg sm:px-6 lg:px-8'>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">I am interested in opportunities where I can apply my diverse skills to contribute to meaningful projects. For collaboration or opportunities, please contact me at <a href="mailto:joshuaforster@icloud.com" className="text-customRed-100 hover:text-green-900 dark:hover:text-green-800">joshuaforster@icloud.com</a>.</p>
                </div>
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
                    <label className="w-full font-medium text-gray-900 dark:text-white">Your Name:
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="mt-1 block w-full rounded-lg border-2 border-[#1E1E1E] dark:border-gray-700 shadow-sm focus:border-customRed-100 focus:ring focus:ring-customRed-100 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        />
                    </label>
                    <label className="w-full font-medium text-gray-900 dark:text-white">Your Email:
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="mt-1 block w-full rounded-lg border-2 border-[#1E1E1E] dark:border-gray-700 shadow-sm focus:border-customRed-100 focus:ring focus:ring-customRed-100 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        />
                    </label>
                    <label className="w-full font-medium text-gray-900 dark:text-white">Message:
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-lg border-2 border-[#1E1E1E] dark:border-gray-700 shadow-sm focus:border-customRed-100 focus:ring focus:ring-customRed-100 focus:ring-opacity-50 h-32 dark:bg-gray-700 dark:text-white"
                        ></textarea>
                    </label>
                    <button type="submit" className="mt-4 px-6 py-2 bg-customRed-100 text-white font-medium rounded-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-customRed-100 focus:ring-opacity-50 dark:hover:bg-green-800">Send</button>
                </form>
            </div>
        </section>
    );
}
