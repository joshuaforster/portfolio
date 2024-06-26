import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPage() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const spaceId = 'w9xo39obj3rg';
        const environmentId = 'master';
        const accessToken = 'aufNUZnRvfQJE6MPybHWO52BrtvsxhJJcjypyFO7WkA';
        const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&include=1`;

        async function fetchBlogPage() {
            try {
                const res = await fetch(url);
                const data = await res.json();
                const mappedItems = data.items.map(item => {
                    const featuredImageId = item.fields.featuredImage?.sys.id;
                    const asset = data.includes.Asset.find(asset => asset.sys.id === featuredImageId);
                    const featuredImageUrl = asset ? `https:${asset.fields.file.url}` : null;

                    return {
                        id: item.sys.id,
                        title: item.fields.title,
                        publishedDate: item.fields.publishedDate,
                        featuredImage: featuredImageUrl,
                    };
                });

                setBlogPosts(mappedItems);
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            }
        }

        fetchBlogPage();
    }, []);

    const blogPostElements = blogPosts.map(post => (
        <div key={post.id} className="bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
            <img src={post.featuredImage} alt={post.title} className="mb-3 w-full object-cover h-48" />
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{post.title}</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-300">Published on: {post.publishedDate}</p>
                <Link to={`/blog/${post.id}`} className="text-customRed-100 hover:text-green-900 dark:hover:text-green-800 font-medium">Read More</Link>
            </div>
        </div>
    ));

    return (
        <section className="py-8 bg-[#F3F3F4] dark:bg-gray-900">
            <div className='mx-auto px-4 sm:px-12 lg:px-24 max-w-screen-2xl'>
                <h1 className="text-center text-4xl font-bold mb-8 text-gray-900 dark:text-white">Blog Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPostElements}
                </div>
            </div>
        </section>
    );
}
