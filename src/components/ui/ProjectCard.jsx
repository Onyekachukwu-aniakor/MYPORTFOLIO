import React from 'react'
import {ExternalLink, TrendingUp, GitBranch} from 'lucide-react'




const ProjectCard = ({project}) => {
  const {title, description,image, technologies, metrics,githubUrl,  demoUrl} = project;
  return (
    <div className=' group relative border bg-white/5 border-white/10 rounded-2xl overflow-hidden hover:border-green/30 transition-all duration-300'>
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className='w-full h-full   object-cover transition-transform duration-700 group-hover:scale-110 ' />
        <div className="absolute inset bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300" />
        <div className="absolute bottom-8 right-0 flex items-center gap-2">
          {demoUrl && (
            <a href={demoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-green-400/50 hover:bg-green-400/30 transition-all duration-300 hover:scale-110'
            title='View Demo'>
              <ExternalLink className='w-6 h-6 text-white '/>

            </a>
          )}

          {githubUrl && (
            <a href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-110 w-10 h-auto'
            title='View Code'>
              <GitBranch className='w-10 h-auto text-white '/> </a>
          )}
        </div>
        <div className="absolute top-2 left-2">
          <span className='px-2 py-0.5 text-lg font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl '>
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5 space-y-2">
        <div className="">
          <h3 className='text-xl font-semibold mb-2 text-white group-hover:text-green-400 transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-white/90 text-medium leading-relaxed line-clamp-2'>
            {description}
          </p>
        </div>
        <div className=" flex flex-wrap gap-2">
          {technologies.map((tech, index)=>(
            <span className='px-2 py-0.5 text-base font-medium bg-green-400/30 border border-green-400/25  leading-tight rounded-2xl tracking-tighter  hover:bg-green-400/20 transition-colors duration-300 hover:scale-110' key={index}> {tech}</span>
          ))}
          
        </div>
        {metrics && (
          <div className="flex items-center gap-2 pt-2 border-t border-white/20">
            <TrendingUp className='w-5 h-5 text-green-400'/>
            <p className='text-base font-medium text-green-400'>{metrics}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard