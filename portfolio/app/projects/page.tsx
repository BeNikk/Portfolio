import ProjectSection from "@/components/ProjectComponent";

const Projects = () => {
    return ( 
        <div className="mx-4 px-4 sm:px-8 md:px-20 lg:px-60 flex flex-col justify-center items-start h-full ">
            <div>
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-2xl lg:text-3xl">⚡</h1>
                <h1 className="text-2xl lg:text-3xl text-[#515151] font-bold">What I&apos;ve been working on</h1>
                </div>
                </div>

               <div className="pt-4">
                <ProjectSection/>
                </div> 
                </div>


     );
}
 
export default Projects;