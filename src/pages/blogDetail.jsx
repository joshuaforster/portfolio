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
        const entryId = params.id;
        const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries/${entryId}?access_token=${accessToken}&include=1`;

        async function fetchBlogPosts() {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setPost(data);

                if (data.includes && data.includes.Asset) {
                    const mainImageId = data.fields.featuredImage.sys.id;
                    const mainImageAsset = data.includes.Asset.find(asset => asset.sys.id === mainImageId);
                    if (mainImageAsset) {
                        const imageUrl = `https:${mainImageAsset.fields.file.url}`;
                        setMainImage(imageUrl);
                    }
                } else {
                    console.error('No included assets found in the response.');
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        }

        fetchBlogPosts();
    }, [params.id]);

    const Bold = ({ children }) => <span className="font-bold">{children}</span>;
    const Text = ({ children }) => <p className="mb-4 text-gray-900 dark:text-gray-200">{children}</p>;
    const ListItem = ({ children }) => <li className="list-disc ml-4">{children}</li>;

    const Image = ({ node }) => {
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
            [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-4 text-gray-900 dark:text-gray-200">{children}</ul>,
            [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
            [BLOCKS.EMBEDDED_ASSET]: (node) => <Image node={node} />,
            [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">{children}</a>,
        },
    };

    if (!post) return <div>Loading...</div>;

    return (
        <section  className="py-8 bg-[#F3F3F4] dark:bg-gray-900">
             <div className='flex gap-24 mx-auto px-4 sm:px-12 lg:px-24 max-w-screen-2xl'>
            <div className='flex-grow lg:w-3/4'>
                {mainImage && (
                    <img 
                        src={mainImage} 
                        alt={post.fields.title} 
                        className="rounded-lg mb-4 w-full object-cover h-64"
                    />
                )}
                <h1 className="text-4xl font-bold py-4 text-gray-900 dark:text-white">{post.fields.title}</h1>
                {post.fields.content && documentToReactComponents(post.fields.content, options)}
            </div>

            <div className='hidden lg:block lg:w-1/4 h-full sticky top-16 p-8 text-center shadow-xl bg-white dark:bg-gray-800'>
                <div className="py-4">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Navigation</h2>
                    <ul className="space-y-2">
                        <li><Link to={`/blog/${(post.id)-1}`} className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Previous Post</Link></li>
                        <li><Link to={`/blog/${(post.id)+1}`} className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Next Post</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
       
    );
}
