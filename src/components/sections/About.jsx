import { Code2, Sparkles, Sparkle } from 'lucide-react'
import { SiReact, SiJavascript,SiNodedotjs,SiGithub, SiTailwindcss,SiExpress,SiRedux, SiPostgresql,SiMongodb, SiWordpress, SiCanva, SiVite, SiHtml5 } from 'react-icons/si';
import { PERSONAL_INFO} from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {
    //SKILLS
    const skills = [
        {name:'React.js', icon: SiReact, color:'#61dafb'},
        {name:'WordPress', icon: SiWordpress, color:{background:'#000', text:'#fff'}},
        {name:'JavaScript', icon: SiJavascript, color:'#3178c6'},
        {name:'Node.js', icon: SiNodedotjs, color:'#339933'},
        {name:'Express.js', icon: SiExpress, color:'#339933'},
        {name:'Redux', icon: SiRedux, color:'#339933'},
        {name:'Zustand', icon: SiRedux, color:'#339933'},
        {name:'Github', icon: SiGithub, color:'#339933'},
        {name:'Vite', icon: SiVite, color:'#339933'},
        {name:'Html5', icon: SiHtml5, color:'#339933'},
        {name:'Tailwindcss', icon: SiTailwindcss, color:'#06b6d4'},
        {name:'Postgresql', icon: SiPostgresql, color:'#339933'},
        {name:'Mongodb', icon: SiMongodb, color:'#47a248'},
        {name:'Canva', icon: SiCanva, color:'#47a248'},
    ]
  return (
    <section id='about' className='relative py-10 bg-black overflow-hidden'>
        <RadialGradientBackground variant='about'/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
                {/* Left column content */}
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <FadeIn delay={60}>
                            <div className="inline-flex items-center gap-2 px-5 py-1 border border-green-400 rounded-full w-fit">
                                <Code2 className='w-5 h-5 text-green-400'/>
                                <span className='text-sm text-green-400 font-bold'>
                                     Software Developer

                                </span>
                                <Sparkles className='w-5 h-5 text-green-400 fill-green-400'/>
                            </div>
                        </FadeIn>
                        <FadeIn delay={100}>
                            <h2 className='text-xl lg:text-2xl font-normal leading-tight tracking-tight text-white'>
                                Crafting digital experience that matters
                            </h2>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <div className="flex flex-col gap-3 leading-relaxed">
                                {PERSONAL_INFO.bio}
                                <p className='py-2 text-base leading-relaxed'>
                                    I’m confident in frontend and backend development, API integration, WordPress customization, and delivering projects on time. I would welcome the opportunity to contribute my skills to your team.
                                </p>
                                
                            </div>

                        </FadeIn>
                    </div>
                    <FadeIn delay={300}>
                        {/* <div className="grid grid-cols-4 gap-1.5">
                            {ABOUT_STATS.map((stat, index)=>(
                                <div className="relative" key={index}>
                                    <div className="absolute -left-3 rounded-full top-0 w-1 h-full bg-gradient-to-b from-green-400 via-emerald-400 to-green-400"></div>
                                    <div className="text-1xl font-normal mb-2 font-mono">
                                        {stat.value}
                                    </div>
                                    <p className='text-sm text-white leading-snug'>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div> */}
                    </FadeIn>
                   {/*  <FadeIn delay={400}>
                        <button onClick={()=>window.open(PERSONAL_INFO.resume, '_blank') }
                            className='inline-flex gap-1 px-2 transition-all duration-300 w-fit items-center bg-white hover:bg-gray-300 text-black rounded-lg py-1.5 tracking-tight'>
                                <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300'/>
                                Download Resume

                        </button>

                    </FadeIn> */}
                </div>
                {/* Right Column info grid */}
                <FadeIn delay={200}>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-black via-black  to-black/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"/> 
                            <div className="relative bg-black/10 border border-gray-950 rounded-2xl px-2  hover:border-green-600 transition-all duration-300">
                                <div className="flex items-start gap-2 ">
                                    <div className="p-1 bg-green-700 rounded-2xl">
                                        <Code2 className='w-5 h-5 '/>
                                    </div>
                                    <div className="flex-1 ">
                                        <h3 className='text-lg font-semibold text-white mb-2 '> Expertise</h3>
                                        <p className='text-sm font-bold text-white leading-relaxed'>Specialised in building scalable frontend & backend with modern technologies and best practices</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/20 to-black/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 "/>
                            <div className="relative border border-white rounded-2xl p-2 hover:border-green-400 transition-all duration-300 h-full">
                                <div className="bg-green-700 w-fit p-1 rounded-2xl mb-2 ">
                                    <Sparkle className='w-5 h-5 text-white'/>
                                </div>
                                <h3 className='text-base font-semibold mb-1'>Clean Code</h3>
                                <p className='leading-relaxed'> Writing maintainable, well-documented code that is scalable</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/20 to-black/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 "></div>
                            <div className="relative border border-white rounded-2xl p-2 hover:border-green-400 transition-all duration-300 h-full">
                                <div className="bg-green-700 rounded-2xl p-1 w-fit mb-1">
                                    <Sparkle className='w-5 h-5 text-white'/>
                                </div>
                                <h3 className='text-base font-bold'> Performance</h3>
                                <p className='leading-relaxed'> Optimizing for speed and efficiency in every project.</p>
                            </div>
                        </div>
                        <div className="col-span-2 relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black  to-black/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"/>
                            <div className="relative bg-black/10 border border-gray-950 rounded-2xl px-2  hover:border-green-600 transition-all duration-300">
                                <div className="grid grid-cols-3 gap-2 text-center">
                                    <div >
                                        <div className="font-bold text-xl mb-0.5">    96%</div>
                                        <div className="leading-relaxed text-sm">Work Delivery</div>
                                    </div>
                                    <div >
                                            <div className="font-bold text-xl mb-0.5">24/7</div>
                                            <div className="leading-relaxed text-sm">Support Available</div>
                                        </div>
                                        <div >
                                            <div className="font-bold text-xl mb-0.5">Fast</div>
                                            <div className="leading-relaxed text-sm">Delivery Time</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </FadeIn>
            </div>
            {/* Skills Grid Section */}
            <FadeIn delay={500}>
                <div className="flex flex-col items-center gap-4">
                    <div className="text-center">
                        <h3 className='text-xl lg:text-2xl font-normal leading-tight tracking-tight text-white'> Tech Stack {/* & Expertise */}</h3>
                        <p className='text-xl font-normal text-white mb-2'> Technologies i work with to build amazing websites</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 w-full max-w-4xl">
                       { skills.map((skill, index)=>(
                        <div className="group relative bg-white/5 hover:bg-white/10 border border-white/30 hover:border-green-400 rounded-2xl px-3 py-1 flex  flex-col items-center justify-center gap-0.5 transition-all duration-300 leading-tight hover:scale-110" key={index}>
                            <skill.icon className='text-green-400 text-lg'/>
                            <div className="text-sm text-white font-medium text-center">
                                {skill.name}
                            </div>
                            {/* Hover Glow Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 rounded-2xl via-green-400/50 to-green-400/70 group-hover:from-green-400/25 group-hover:to-green-400/35 transition-all duration-300"></div>
                        </div>
                       ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
  )
}

export default About