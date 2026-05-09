import React from 'react'
import {skills} from '../../data/skills'
import * as Icons from 'lucide-react';
import FadeIn from '../animations/FadeIn';


const Skills = () => {
    //Categorized Skills

    const skillCategories ={
        'Frontend Development' : [
            skills.find((s)=>s.name ==='WordPress'),
            skills.find((s)=>s.name ==='React.js'),
            skills.find((s)=>s.name ==='JavaScript'),
            skills.find((s)=>s.name ==='TypeScript'),
            skills.find((s)=>s.name ==='Canva'),
            skills.find((s)=>s.name ==='Adobe Creative Suite'),
            skills.find((s)=>s.name ==='Tailwind CSS'),
            skills.find((s)=>s.name ==='Redux'),
            skills.find((s)=>s.name ==='Zustand'),
            skills.find((s)=>s.name ==='HTML5'),
            skills.find((s)=>s.name ==='CSS3')
        ].filter(Boolean),
        'Backend & APIs': [
             skills.find((s)=>s.name ==='Node.js'),
             skills.find((s)=>s.name ==='Express.js'),
             skills.find((s)=>s.name ==='REST APIs'),
             skills.find((s)=>s.name ==='Mongodb'),
             skills.find((s)=>s.name ==='Postgresql')

        ].filter(Boolean),
        'Frameworks & Others ': [
             skills.find((s)=>s.name ==='Git & Version Control'),
             skills.find((s)=>s.name ==='Vite'),
             skills.find((s)=>s.name ==='Boostrap'),
             skills.find((s)=>s.name ==='JQuery'),
             //skills.find((s)=>s.name ==='Adobe Illustrator'),
             //skills.find((s)=>s.name ==='Adobe Photoshop'),
             skills.find((s)=>s.name ==='Responsive Design')
        ].filter(Boolean),
    };

    //Get Proficiency percentage
    const getProficiencyLevel = (level)=>{
        const levels = {
            'Expert': 92,
            'Advanced':75,
            'Intermediate': 60
        };

        return levels[level] || 50;
    };

    //Get level color

    const getLevelColor = (level)=>{
        const colors ={
            'Expert':'text-[8dff69]  bg-[8dff69]/20 border-[8dff69]/30',
            'Advanced' : 'text-cyan-400 bg-cyan-500/20  border-cyan-500/30',
            'Intermediate': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30'
        };
        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }

  return (
    <section id='skills' className='relative py-1 bg-black overflow-hidden '>
        {/* Animation Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl opacity-50"/>
            <div className=" absolute bottom-1/4 right-0 w-96 h-96 bg-green-400/10 blur-3xl opacity-50"/>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 ">
            <FadeIn delay={100}>
                <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-2 py-2 bg-green-400/30 border border-green-400/25 rounded-2xl ">
                        <Icons.Sparkles className='w-5 h-5 text-green-400'/>
                        <span className='leading-relaxed text-green-400'>My Expertise</span>
                    </div>
                    <h2 className='text-xl lg:text-2xl font-normal leading-tight tracking-tight text-white'>
                        Skills & Technologies
                    </h2>
                    <p className='text-lg  max-w-2xl mx-auto'>
                        A comprehensive overview of my technical skills
                    </p>

                </div>
            </FadeIn>

            {/* Skills Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex)=>(
                    <FadeIn delay={categoryIndex * 100} key={category}>
                        <div className="relative bg-white/5 border border-white/10 rounded-2xl px-3 py-2 hover:border-green-400 transition-all duration-300 group">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/25 ">
                                <div className="w-1 h-8 bg-gradient-to-b from-green-400/30 to-green-400/10 rounded-full"></div>
                                <h3 className='text-xl font-medium'>{category}</h3>
                            </div>
                            {/* Skill List */}
                            <div className="space-y-4">
                                {categorySkills.map((skill, skillIndex)=>{
                                    const IconComponent = Icons[skill.icon] || Icons.Code2;
                                    const proficiency = getProficiencyLevel(skill.level);
                                    return (
                                        <div className="space-y-2" key={skill.id}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    {/* <div className="p-2 bg-white/5 rounded-lg">
                                                        <IconComponent className='w-4 h-4 text-green-400'/>
                                                    </div> */}
                                                    <div className="text-sm font-medium text-white">
                                                        <div className="text-sm text-white/50">
                                                            {skill.name}
                                                        </div>
                                                        <div className="text-sm ">
                                                            {skill.experience}
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                                    {skill.level}
                                                </span>
                                            </div>
                                            <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400/5 to-green-400 rounded-full transition-all duration-300 ease-out" style={{width: `${proficiency}%`}}>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                  })}
                            </div>
                            {/* Hover glow effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/5"></div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills