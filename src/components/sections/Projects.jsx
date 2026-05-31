import React, { useRef, useState } from 'react'
import { projects, categories } from '../../data/projects'
import {Briefcase, Target,Code2,  ChevronLeft, ChevronRight} from 'lucide-react';
import { SiWordpress } from 'react-icons/si';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';

const Projects = () => {
  const [activeCategory, setActiveCategory]=useState('All');
  const [currentIndex, setCurrentIndex]= useState(0);
  const scrollContainerRef= useRef(null);


  const filteredProjects= activeCategory === 'All'? projects : projects.filter((project)=>project.category === activeCategory);

  //Reset Carousel when category changes

  const handleCategoryChange = (category)=>{
    setActiveCategory(category);
    setCurrentIndex(0);
    if(scrollContainerRef.current){
      scrollContainerRef.current.scrollTo({left:'0', behavior:'smooth'})
    }
  };

  const scrollToIndex =(index)=>{
    setCurrentIndex(index);
    if(scrollContainerRef.current){
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth/3;
      container.scrollTo({left : cardWidth * index, behavior: 'smooth'});
    }

  };

  const nextSlide =()=>{
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = ()=>{
    const newIndex = Math.max(currentIndex-1,0);
    scrollToIndex(newIndex);
  };

  //Category icon mapping

  const categoryIcons = {
    'All' : Target,
    'WordPress': SiWordpress,
    'Full Stack MERN' : Code2,
    'Full Stack PERN': Code2,
    'Frontend': Code2
  }
  return (
    <section id='projects' className='relative py-6 bg-black overflow-hidden '>
      <div className="absolute inset-0 overflow-hidden ">
      {/* Green circles in the background in below css with opacity-50 <div/> */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-black/20 opacity-40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-black/10 opacity-40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-black/10 opacity-40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10max-w-7xl mx-auto px-2 py-1 sm:px-4 lg:px-5">
        <FadeIn delay={0}>
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/25 rounded-2xl mb-2 px-3 py-2">
              <Briefcase className='w-5 h-5 text-green-400'/>
              <span className=' text-green-400 leading-relaxed'>
                My Work
              </span>
            </div>
            {/* <h2 className='text-xl lg:text-2xl font-normal leading-tight tracking-tight text-white'>Featured Projects</h2> */}
            <p className='text-lg  max-w-2xl mx-auto'> Showcasing my best works</p>
          </div>

        </FadeIn>
        {/* Category Filter */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {categories.map((category)=>(
              <button key={category} className={`group relative px-3 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category ? 'text-white' : 'text-white/50 hover:text-white'}`}
              onClick={()=>handleCategoryChange(category)}>
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === category ? 'bg-black/10 opacity-100' : 'bg-white/5 border border-white/10 group-hover:border-white/10'}`}/>
                <div className="relative flex items-center gap-2">
                  {React.createElement(categoryIcons[category], {className: 'w-4 h-5'})}
                  <span className='text-sm'>{category}</span>
                </div>
                {activeCategory === category && (
                  <div className="absolute inset-0 rounded-full bg-green-400/30" />
                )}  
              </button>
            ))}
          </div>

        </FadeIn>
        {/* Projects Carousel */}
        <FadeIn delay={200}>
          <div className="relative">
            <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory" ref={scrollContainerRef} >
              <div className="flex gap-2 pb-7">
                {filteredProjects.map(( project, index)=>(
                  <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start" key={index.id}>
                    <ProjectCard  project={project}/>

                  </div>
                ))}
              </div>

            </div>
            {/* Navigation Arrows */}
            {filteredProjects.length > 3 && (
              <>
              <button className='absolute flex left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-8 h-8 lg:w-9 lg:h-9 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10' 
              onClick={prevSlide}
               disabled={currentIndex === 0}
                aria-label='Previous Projects'
               >
                <ChevronLeft className='w-6 h-6 text-white'/>

              </button>

              <button className='absolute flex right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center  w-8 h-8 lg:w-9 lg:h-9 bg-white/10 backdrop-blur-sm border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10'
               onClick={nextSlide} 
               disabled={currentIndex >= filteredProjects.length-3}
                aria-label='Next Projects'>
                  <ChevronRight className='w-6 h-6 text-white'/>

              </button>
              </> 
            )}
            {/* Navigation Dots */}
            {filteredProjects.length > 3 && (
              <div className="flex items-center justify-center gap-2 mt-3">
                {Array.from({length : Math.max(0, filteredProjects.length-2)}).map((_,index)=>(
                  <button className={`transition-all duration-300 rounded-full ${index === currentIndex? 'bg-green-400 w-6 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/20'}`} 
                  key={index} 
                  onClick={()=>scrollToIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}>

                  </button>
                ))}
              </div>
            )}
          </div>

        </FadeIn>

      </div>


    </section>
  )
}

export default Projects