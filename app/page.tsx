import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="grid grid-cols-2 w-full h-full">
        {/* Left Side - Image */}
        <div className="flex items-center justify-center bg-gray-200">
          <Image 
            src="/imgs/headshot.jpg" 
            alt="Sarathy" 
            width={400}
            height={400}
            className="h-full w-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right Side - About Me */}
        <div className="flex flex-col justify-center h-full w-full px-16 bg-white">
          <h1 className="text-4xl font-bold pt-10">{"Hi, I'm Sarathy!"}</h1>
          <p className="text-gray-700 mt-4 text-lg">
            {"I'm currently a freshman at The University of North Carolina at Chapel Hill! I'm passionate about all things Software Engineering, Machine Learning, and AI."}
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            {"When I'm not coding, I'm probably listening to music, working on cool projects, or exploring new ideas. 🚀"}
          </p>
          <div className="flex items-center w-full my-6">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-gray-700 font-semibold">
             {" Resume"}
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex justify-center items-center h-screen w-full bg-gray-100 p-4">
            <div className="w-full max-w-5xl h-[90vh] bg-white shadow-lg rounded-lg overflow-hidden">
              <iframe
                src="https://selvam-resume.tiiny.site"
                className="w-full h-full"
              />
            </div>
          </div>

          

          <div className="flex items-center w-full my-6">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-gray-700 font-semibold">{"Follow for More About Me"}</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <div className="flex justify-center gap-20 p-2 ">
              <Link href="https://github.com/SarathyS101">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" width="30" />
              </Link>
              <Link href="https://www.linkedin.com/in/sarathyselvam">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn Logo" width="30" />
              </Link>
              <Link href="https://www.instagram.com/sarathys17?igsh=MWxhc2I2bWlleTdqbQ%3D%3D&utm_source=qr">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram Logo" width="30"/>
              </Link>
          </div>
        </div>
      </div>
    </main>
    </>
    
  );
}
