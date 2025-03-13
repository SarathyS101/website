
"use client";
import {useState} from "react";
import {Skeleton} from "@/components/ui/skeleton"
export default function Music() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-8 items-start bg-gradient-to-r from-indigo-100 to-green-100 p-6 rounded-2xl shadow-lg">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 tracking-wide">Top Artists</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-800">
            <li>Drake</li>
            <li>Noah Kahan</li>
            <li>Gracie Abrams</li>
            <li>Dua Lipa</li>
            <li>The Weeknd</li>
            <li>Taylor Swift</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-purple-700 tracking-wide">My Music Taste</h2>
          <p className="text-lg text-gray-700">
            My music taste is all over the place tbh. It really depends on what I'm feeling that day.
          </p>
        </div>
      </div>
      

      {/* Top Songs */}
      <h2 className="text-3xl font-bold mt-10 mb-6 text-center text-indigo-800 tracking-wide">My Top Songs Right Now</h2>
      <div className="grid grid-cols-3 gap-4">
        {["7qLr3HMApUbyDkUvgIvHnB", "4O2rRsoSPb5aN7N3tG6Y3v", "3sK8wGT43QFpWrvNQsrQya", "6Gvin0WjfgyZxtADSU1kmk", "7DNB6Es2bipdtHoJ6uq3nB", "5wbg8kepMFoMzHOEuxiI0q"].map((id) => {
          const [loaded, isLoaded] = useState(false);
          return (
            <div key ={id}> 
            {!loaded&&<Skeleton className="absolute inset-0 w-full h-full rounded-lg"/>}
            <iframe
               className={`w-full h-[400px] rounded-lg shadow-md border border-gray-300`}
              src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              loading="lazy"
              onLoad={()=> isLoaded(true)}
            ></iframe>
      </div>
        )})}
      </div>

      {/* Playlists */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-center text-purple-800 tracking-wide">Some of My Playlists</h2>
      <div className="grid grid-cols-3 gap-4">
        {["2qQHl9xfGDXdORTpSOtW3B", "37i9dQZF1EJJT0kwwDTgT5", "1rQkAZVcVlYlq43j8TAPzo"].map((id) => {
            const[loaded, isLoaded] = useState(false)
          
          
          return (
            <div key ={id}> 
                {!loaded&&<Skeleton className="absolute inset-0 w-full h-full rounded-lg"/>}
                <iframe
                   className={`w-full h-[400px] rounded-lg shadow-md border border-gray-300`}
                  src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator`}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  loading="lazy"
                  onLoad={()=> isLoaded(true)}
                ></iframe>
          </div>
        )})}
      </div>
    </div>
  );
}
