import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

export default function BlogDetail() {
    const [post, setPost] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const params = useParams();

    useEffect(() => {
        const spaceId = 'w9xo39obj3rg';
        const environmentId = 'master';
        const accessToken = 'aufNUZnRvfQJE6MPybHWO52BrtvsxhJJcjypyFO7WkA';
        const entryId = params.id; // Get the entry ID from the URL parameters
        const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries/${entryId}?access_token=${accessToken}&include=1`;
            
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPost(data);

            // Check if 'includes' and 'includes.Asset' exist before attempting to access them
            if (data.includes && data.includes.Asset) {
                const mainImageId = data.fields.featuredImage.sys.id;
                const mainImageAsset = data.includes.Asset.find(asset => asset.sys.id === mainImageId);
                if (mainImageAsset) {
                    const imageUrl = `https:${mainImageAsset.fields.file.url}`;
                    setMainImage(imageUrl);
                }
            } else {
                // Handle the case where 'includes' or 'includes.Asset' does not exist
                console.error('No included assets found in the response.');
            }
        })
        .catch(console.error);
}, [params.id]);

    const Bold = ({ children }) => <span className="font-bold">{children}</span>;
    const Text = ({ children }) => <p className="mb-4">{children}</p>;
    const ListItem = ({ children }) => <li className="list-disc ml-4">{children}</li>;

    // This Image component is used for images inside the rich text content
    const Image = ({ node }) => {
        // Use the image details to build the image URL
        const { title, file } = node.data.target.fields;
        const imageUrl = `https:${file.url}`;
        return <img src={imageUrl} alt={title} className="mx-auto rounded-lg" style={{ maxWidth: '100%' }} />;
    };

    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-4">{children}</ul>,
            [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
            [BLOCKS.EMBEDDED_ASSET]: (node) => <Image node={node} />,
            [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">{children}</a>,
        },
    };

    if (!post) return <div>Loading...</div>; // Handle loading state

    return (
        <div className='flex gap-24 mx-auto px-4 sm:px-12 lg:px-24 max-w-screen-2xl'>
            {/* Main Content */}
            <div className='flex-grow lg:w-3/4'>
                {mainImage && (
                    <img 
                        src={mainImage} 
                        alt={post.fields.title} 
                        className="rounded-lg mb-4 w-full object-cover h-64"
                    />
                )}
                <h1 className="text-4xl font-bold py-4">{post.fields.title}</h1>
                {post.fields.content && documentToReactComponents(post.fields.content, options)}
            </div>

            {/* Adjusted Sidebar with new top spacing to accommodate the sticky nav */}
            <div className='hidden lg:block lg:w-1/4 h-full sticky top-16 p-8 text-center shadow-xl bg-white'>
                {/* Sidebar content */}
                <div className="py-4">
                    <h2 className="text-xl font-semibold mb-4">Navigation</h2>
                    <ul className="space-y-2">
                        <li><Link to="/blog/previous-post" className="text-blue-500 hover:text-blue-700">Previous Post</Link></li>
                        <li><Link to="/blog/next-post" className="text-blue-500 hover:text-blue-700">Next Post</Link></li>
                        {/* Additional sidebar links as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
