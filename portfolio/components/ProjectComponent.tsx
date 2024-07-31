import { Projects } from "./constants/projects";
import Image from "next/image";
const ProjectSection = () => {
    return ( 
        <div>
            {Projects.map((project)=>{
                return(
                    
                    <div className="flex flex-row gap-2  items-start py-8" key={project.name}>
                        <div>
                            <Image src={project.imageUrl} alt="Project image" className="bg-[#515151]" height={'200'} width={'200'}/>
                        </div>
                        <div className="flex flex-col gap-2 justify-start px-2 items-start">
                            <h1 className="text-lg font-bold  text-[#515151]">{project.name}</h1>
                            <p className="text-slate-500">{project.description}</p>

                        </div>
                        
                    </div>
                )
            })}
        </div>
     );
}
 
export default ProjectSection;