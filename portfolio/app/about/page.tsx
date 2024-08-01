"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const AboutPage = () => {
    const images = [
        
        {image:"https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"},

        {image:"https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"},
        {image:"https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
        {image:"https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
      ];
    return ( 
        <div className="sm:px-8 md:px-20 lg:px-20 flex flex-col justify-center items-start h-full mx-4 lg:mx-20">
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-2xl lg:text-3xl">💬</h1>
                <h1 className="text-2xl lg:text-3xl text-[#515151] font-bold">About Me</h1>
            <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image.image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image.image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md  object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}

            </div>

                
            <div>
                <p className="text-slate-500 px-4 text-left leading-relaxed">
                Yo! I&apos;m currently navigating the wild world of full-stack development. When I&apos;m not knee-deep in code or trying to make sense of complex algorithms, I&apos;m all about dreaming up the next big thing and bringing it to life.
                <br />
                <br />

                Open-source? Heck yes! It&apos;s like being part of the ultimate tech squad where we code, collaborate, and occasionally swap memes. Imagine a global party where the dress code is comfy sweatpants and the only agenda is building cool stuff.
                <br />
                <br />

              My passion for tech is kinda like my obsession with The Social Network Movie, always hunting for the next big thing. Whether I&apos;m creating something epic or laughing off a coding fail, I&apos;m here for it. If you&apos;re into tech talk, nerdy humor, or just vibing on the latest digital trends, let&apos;s connect!
              <br />
              <br />
              <br />
            </p>

            </div>
            </div>
              </div>
            </div>

     );
}
 
export default AboutPage;