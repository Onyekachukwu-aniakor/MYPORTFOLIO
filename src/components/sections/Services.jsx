
import {services} from '../../data/services'
import * as Icons from 'lucide-react';
import { Wrench } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
const Services = () => {
  return (
    <section id='services' className='relative py-2 bg-black overflow-hidden'>
        <RadialGradientBackground variant='services'/>
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-black/20 opacity-40 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-black/20 opacity-40 rounded-full blur-3xl"/>
            <div className="absolute w-96 h-96 bg-black/20 opacity-40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:`
            linear-gradient(to right, white 1px, transparent 1px)
            linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
            }}/>
            <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
                <FadeIn delay={0}>
                    <div className="text-center mb-2">
                        <div className="inline-flex items-center gap-2 px-2 py-2 bg-green-400/30 border border-green-400/25 rounded-2xl">
                            <Wrench className='w-5 h-5 text-green-400'/>
                            <span className='leading-relaxed text-green-400 tracking-wider'>What I Offer</span>
                        </div>
                        <h2 className='text-xl lg:text-2xl font-normal leading-tight tracking-tight text-white'>Built for innovation. Designed for results</h2>
                        <p className='text-lg  max-w-2xl mx-auto'> Comprehensive solutions to tranform your ideas into exceptional digital experience</p>
                    </div>
                </FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-2 tracking-tighter leading-tight">
                    {services.slice(0,2).map((service, index)=>{
                        const IconComponent = Icons [service.icon]|| Icons.Code2;
                        return(
                            <FadeIn delay={100 + index * 100} key={service.id}>
                                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-2 hover:border-green-400 transition-all duration-300 h-full flex flex-col ">
                                    <div className="mb-2">
                                        <div className="w-10 h-10 bg-green-400/30 border border-green-400/25  leading-tight rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className='w-6 h-8 text-green-400'/>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className='text-lg leading-relaxed font-medium group-hover:text-green-400 transition-colors duration-300 '> {service.title}</h3>
                                        <p className='text-white/90 leading-relaxed gap-1'>{service.description}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-400/5 rounded-2xl transition-all duration-300 pointer-events-none  "/>

                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 tracking-tighter leading-tight">
                    {services.slice(2).map((service,index)=>{
                         const IconComponent = Icons [service.icon]|| Icons.Code2;
                         return(
                            <FadeIn key={service.id} delay={300 + index * 100} >
                                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-2 hover:border-green-400 transition-all duration-300 h-full flex flex-col">
                                    <div className="mb-2">
                                        <div className="w-10 h-10 bg-green-400/30 border border-green-400/25  leading-tight rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className='w-6 h-8 text-green-400'/>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className='text-lg leading-relaxed font-medium group-hover:text-green-400 transition-colors duration-300'> {service.title}</h3>
                                        <p className='text-white/90 leading-relaxed'>{service.description}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-400/5 rounded-2xl transition-all duration-300 pointer-events-none"/>

                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>

            

    </section>
  )
}

export default Services