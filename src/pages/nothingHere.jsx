import React from 'react';
import { Link } from 'react-router-dom';

export default function NothingHere() {
    return (
      <div className="flex flex-col h-screen">
        <div className="flex-1 flex justify-center items-center"> {/* Image container */}
          <img src='/teddy.png' className="emoji-404" alt="Floating Teddy" style={{ maxWidth: '30%', maxHeight: '50vh' }} />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center"> {/* Text container */}
          <div className="text-center">
            <span className="text-gray-500 text-6xl block">4  0  4</span>
            <span className="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>
            <div className="mt-6">
              <Link to="." className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go back</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }