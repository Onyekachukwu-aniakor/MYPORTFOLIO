import  { useRef, useState } from 'react'
import {ChevronLeft, ChevronRight, Quote, Star} from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import FadeIn from '../animations/FadeIn'

const Testimonials = () => {
    const [currentIndex,setCurrentIndex]= useState(0);
    const scrollContainerRef= useRef(null);

    const scrollToIndex =(index)=>{
        setCurrentIndex(index);
        if(scrollContainerRef.current){
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({left:cardWidth * index, behavior:'smooth'});

        }
    };
    const nextTestimonial = ()=>{
        const newIndex = (currentIndex + 1) % testimonials.length;
        scrollToIndex(newIndex)
    };

    const prevTestimonial = ()=>{
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        scrollToIndex(newIndex)
    };
    const testimonialStats = [
        {value: '3x', label: 'Faster Delivery'},
        {value: '90%', label: 'Client Satisfaction'},
        {value: '100%', label: 'On-Time Delivery'},
        {value: '5*', label: 'Average Rating'}
    ];
  return (
    <section id='testimonials' className='relative py-5 bg-black overflow-hidden'>
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96  bg-green-400/10 opacity-50 rounded-full blur-2xl"/>
        </div>
        <div className="relative max-w-7xl z-10 mx-2 px-2 sm:px-3 lg:px-4  ">
            <FadeIn delay={0}>
                <div className="text-center mb-2">
                    <div className="inline-flex items-center gap-2 px-2 py-2 bg-green-400/30 border border-green-400/25 rounded-2xl">
                        <Quote className='w-5 h-5 text-green-400'/>
                        <span className='leading-relaxed text-green-400 tracking-wider'>Testimonials </span>
                        
                    </div>
                    <h2 className='text-xl lg:text-2xl font-medium text-white/80 tracking-tight mb-1'>Trusted by forward thinking teams</h2>
                        <p className='text-lg  max-w-2xl mx-auto'>Empowering clients with design-driven, high-quality solutions built for success</p>

                </div>
            </FadeIn>
            <FadeIn delay={100}>
                <div className="relative">
                    <div className="scroll-smooth overflow-x-hidden" ref={scrollContainerRef}
                    style={{scrollSnapType:'x mandatory'}}>
                        <div className="flex ">
                            {testimonials.map((testimonial, index)=>(
                                <div className="w-full shrink-0 px-2 " key={index.id}
                                style={{scrollSnapAlign:'start'}}>
                                    <div className="max-w-4xl mx-auto">
                                        <div className="flex flex-col md:flex-row gap-2 items-stretch">
                                            {/* Image Section */}
                                            <div className="relative w-full md:w-1/3">
                                                <div className="h-72 relative rounded-2xl overflow-hidden">
                                                    <img src={testimonial.image} alt={testimonial.name} className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500' />
                                                    {/* Stat Badge Overlay */}
                                                    <div className="absolute bottom-2 right-2 left-2">
                                                        <div className="bg-black/60 rounded-xl p-0.5 shadow-lg">
                                                            <div className="">
                                                                <div className="text-xl font-semibold mb-1 text-green-400 ">
                                                                    {testimonialStats[index]?.value}
                                                                </div>
                                                                <div className="text-base font-semibold text-gray-100">
                                                                    {testimonialStats[index]?.label}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between p-1">
                                                {/* Quote */}
                                                <div className="mb-0.5">
                                                    <Quote className='w-7 h-7 text-green-400 '/>
                                                    <p className='text-lg md:text-xl text-white leading-relaxed'> '{testimonial.quote}'</p>
                                                </div>
                                                <div className="flex items-center justify-between ">
                                                    <div >
                                                        <div className="text-white font-medium ">
                                                            {testimonial.name}
                                                        </div>
                                                        <div className="text-white/90 text-sm ">
                                                            {testimonial.role} <span>{testimonial.company}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-1">
                                                        {[...Array(testimonial.rating)].map((_,i)=>(
                                                            <Star key={i} className='w-5 h-5 fill-green-400 text-green-400'/>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))}
                        </div>

                    </div>
                    <div className="flex items-center justify-center gap-2">
                        {testimonials.map((_,index)=>(
                            //this is the button that moves right/left when you navigate right/left
                            <button className={`transition-all duration-300 rounded-full ${index === currentIndex? 'bg-white w-2 h-2' :'bg-white/30 w-2 h-2 hover:bg-white/50' }`} 
                            key={index}
                            onClick={()=>scrollToIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}/>

                        ))}
                    </div>
                    <button className='absolute flex left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-3 items-center justify-center w-9 h-9 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:border-white/20 transition-all duration-300 z-10' 
                    onClick={prevTestimonial}
                    aria-label='Previous testimonial'>
                        <ChevronLeft className='w-5 h-5 text-white'/>
                    </button>
                    <button className='absolute flex right-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-3 items-center justify-center w-9 h-9 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:border-white/20 transition-all duration-300 z-10' 
                    onClick={nextTestimonial}
                    aria-label='Next testimonial'>
                        <ChevronRight className='w-5 h-5 text-white'/>
                    </button>

                </div>
            </FadeIn>
        </div>
        
    </section>
  )
}

export default Testimonials