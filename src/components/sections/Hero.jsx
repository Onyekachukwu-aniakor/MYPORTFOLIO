
import {Star, ChevronDown} from 'lucide-react';
import {SiReact, SiNodedotjs, SiTailwindcss,SiMongodb,SiPostgresql, SiWordpress} from 'react-icons/si';
import { PERSONAL_INFO,STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import image from '../../assets/images/myimage.png'

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden  '>
      <RadialGradientBackground variant='hero'/>
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Left Column Content */}
          <div className="text-left">
            <FadeIn  delay={0}>
            <div className="inline-flex items-center gap-3 px-[17px] py-[8px] mb-8 mt-2  bg-gradient-to-r from-green-700 via-emerald-500 to-green-700 border rounded-full border-green-900 ">
              <Star  className='w-5 text-white fill-white h-5'/>
              <span className=' text-sm tracking-tighter md:text-sm text-white'>{PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}</span>
            </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className='text-2.5xl md:text-3xl lg:text-4xl font-normal text-white mb-6 leading-tight'>
                React.js, Node.js & WordPress Developer Portfolio
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className='text-lg text-white max-w-[550px] '>Building modern, scalable web applications with React.js, Node.js, WordPress and cutting-edge technologies. Tranforming ideas into exceptional digital experiences by developing dynamic React frontends, creating RESTful APIs with Node.js & customizing WordPress themes and plugins.</p>

            </FadeIn>
            <FadeIn delay={300}>
              <button onClick={()=> scrollToSection('contact')}
                className='inline-flex gap-0 items-center mb-10 group-only:'>
                  <div className="relative z-10 bg-white text-[#212121] rounded-full px-3 py-1 text-base font-medium border border-white mt-3 leading-tight ">
                    Get In Touch
                  </div>

              </button>

            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-7 max-w-full">
                {STATS.map((stat, index)=>(
                  <div className="text-left border-r border-white pr-8 last:border-r-0"
                  key={index}>
                    <div className="text-2xl font-normal text-emerald-300 mb-2 font-mono">
                      {stat.value}
                    </div>
                    <p className='text-sm text-white leading-snug'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </FadeIn>

          </div>
          {/* Right Column- Developer image */}

          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden ">
                  <div className="absolute inset-[-4px] bg-gradient-to-r from-green-700 via-emerald-400 to-green-700 animate-spin-slow rounded-2xl overflow-hidden "/>
                </div>
                {/* image container green line flows with this css below */}
                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                  
                  <img src={image} alt="developer at work"  className='w-full h-full object-cover sm:w-full sm:h-auto  ' />
                </div>
                {/* Technologies Logos */}
                <div className="absolute bottom-1 z-20 left-1 ">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-5 bg-black backdrop-blur-sm border border-white rounded-full px-6 py-0.5 ">
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiReact className='w-full h-full text-green-400 '/>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiPostgresql className='w-full h-full text-green-400'/>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNodedotjs className='w-full h-full text-green-400'/>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiTailwindcss className='w-full h-full text-green-400'/>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiMongodb className='w-full h-full text-green-400'/>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiWordpress className='w-full h-full text-green-400'/>
                      </div>
                    </div>
                  </FadeIn>

                </div>
              </div>
            </div>
          </FadeIn>


        </div>
      </div>
      {/* Scroll indicator */}
      <button className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'
      onClick={()=>scrollToSection('about')}>
        <ChevronDown className='w-8 h-8 text-green-400'/>

      </button>
      
      </section>
  )
}

export default Hero