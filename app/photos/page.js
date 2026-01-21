import Link from "next/link";
import React from "react";


export default async function PexelsPhotos() {

  let photos = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photos`);
  photos = await photos.json();
    

  return (
    <div className="min-h-screen bg-gray-800 py-10">
      <div className="max-w-6xl mx-auto text-gray-200">
        <h2 className="text-center text-3xl font-semibold">My Captures</h2>
        <p className="text-center mt-2 text-gray-400">
          A collection of my favorite photographs taken over the years.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Example Photo Cards */}
          {photos.media && photos.media.map((photo) => (<div key={photo.id} className="bg-gray-700 rounded-lg overflow-hidden relative">
            <Link href={`/photos/${photo.id}`}>
                <img
              src={photo.src.medium}
              alt={photo.alt}
              className="w-full h-72 object-cover hover:scale-110 transition-all duration-300"
            />
            </Link>
          </div>))}
        </div>
      </div>
    </div>
  );
}
