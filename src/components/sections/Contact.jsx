import React, { useState } from 'react'
import {Mail, MapPin,Send,MessageSquare} from 'lucide-react'
import { SiGithub} from 'react-icons/si'
import {SlSocialLinkedin} from 'react-icons/sl'
import { RiTwitterXLine, RiWhatsappFill } from 'react-icons/ri'
import { PERSONAL_INFO, SOCILA_LINKS } from '../../utils/constants'
import FadeIn from '../animations/FadeIn'

const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2281141b-329b-4cd6-af97-83a24006d955");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setStatus({type:'success', message:"Message sent successfully! I will get back to you soon! Thanks"});
        setFormData({name:'', email:'', message:''});
        setTimeout (()=>setStatus({type:'', message:''}), 5000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      
    }
  };




// Webform Ends Here

    const [formData, setFormData]= useState({
        name:'',
        email:'',
        message:''
    });

    const [status, setStatus] = useState({  type:'', message:''});

    const handleChange = (e)=>{
        
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.message){
            setStatus({type:'error', message:'please fill in the required fields'})
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formData.email)){
            setStatus({type:'error', message:'Please enter a valid email'})
            return;
        }
        setStatus({type:'success', message:"Message sent successfully! I will get back to you soon! Thanks"});
        setFormData({name:'', email:'', message:''});
        setTimeout (()=>setStatus({type:'', message:''}), 5000);      
    };
    const socialIcons ={
        github : SiGithub,
        linkedin : SlSocialLinkedin,
        twitter : RiTwitterXLine,
        whatsapp : RiWhatsappFill
    }
  return (
    <section id='contact' className='relative py-5 bg-black overflow-hidden'>
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-black/20 opacity-40 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-black/20 opacity-40 rounded-full blur-3xl"/>
            <div className="absolute w-96 h-96 bg-black/20 opacity-40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
            <FadeIn delay={0}>
                <div className="text-center mb-2">
                    <div className="inline-flex items-center gap-2 px-2 py-2 bg-black/30 border border-green-400/25 rounded-2xl">
                        <MessageSquare className='w-5 h-5 text-green-400'/>
                        <span className='leading-relaxed text-green-400 tracking-wider'>Get In Touch</span>
                    </div>
                    <h2 className='text-xl lg:text-2xl font-normal leading-tight tracking-tight text-white'>Lets Work Together</h2>
                    <p className='text-lg  max-w-2xl mx-auto'>Have a project in mind? Lets discuss how we can bring your ideas to reality</p>
                </div>

            </FadeIn>
            <div className="grid md:grid-cols-2 gap2">
                <FadeIn delay={100}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-2 py-1">
                        <form  onSubmit={onSubmit} className='space-y-2 mr-2'>
                            <div >
                                <label htmlFor="name" className='block text-lg font-medium text-white/90 mb-2 text-center'>Name</label>
                                <input type="text" 
                                id='name'
                                 name='name'
                                 value={formData.name}
                                 className='w-full px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline focus:ring-2 focus:ring-green-400/50 transition-all duration-300'
                                 placeholder='Enter Your Name'
                                 onChange={handleChange}/>
                            </div>
                            <div >
                                <label htmlFor="email" className='block text-lg font-medium text-white/90 mb-2 text-center'>Email</label>
                                <input type="email" 
                                id='email'
                                 name='email'
                                 value={formData.email}
                                 className='w-full px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline focus:ring-2 focus:ring-green-400/50 transition-all duration-300'
                                 placeholder='yourexampleemail@gmail.com'
                                 onChange={handleChange}/>
                            </div>
                            <div >
                                <label htmlFor="message" className='block text-lg font-medium text-white/90 mb-2 text-center'> Message</label>
                                <textarea  rows="5"
                                type="text" 
                                id='message'
                                 name='message'
                                 value={formData.message}
                                 className='w-full px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline focus:ring-2 focus:ring-green-400/50 transition-all duration-300 resize-none'
                                 placeholder='Please tell me about your project'
                                 onChange={handleChange}></textarea>
                            </div>
                            <button className='w-full px-2 py-1 bg-gradient-to-r from-green-400/10 to-green-400 text-white font-medium rounded-lg hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-300 flex items-center justify-center gap-2'
                             type='submit'>
                                <span className=''>Send Message</span>
                                <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'/>
                            </button>
                            {status.message && (
                                <div className={`p-2 rounded-xl ${status.type === 'success'? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}
                                >
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </FadeIn>
                {/* Contact Info */}
                <FadeIn delay={200}>
                    <div className="space-y-2 ml-2">
                        <div className='' >
                            <h3 className='text-lg font-medium mb-2 text-white text-center'>Let's Connect</h3>
                            <p className='text-white/90 leading-relaxed'>I'm open to discuss new projects, creative ideas or opportunities to be part of your vision. Kindly reach out. </p>
                        </div>
                        <div className="space-y-2">
                            <div className="group relative bg-white/5 border border-white/10 rounded-2xl px-2 py-1 hover:border-green-400/50 transition-all duration-300">
                                <div className="flex items-start gap-2">
                                    <div className="p-2  bg-green-400/30 border border-green-400/25 rounded-2xl">
                                        <Mail className='w-5 h-5 text-green-400'/>
                                    </div>
                                    <div className="flex-1 leading-tight ">
                                        <p className='text-sm text-white/60 leading-tight '>Email</p>
                                        <a href={`mailto:${PERSONAL_INFO.email}`} className='text-white transition-colors font-medium '>
                                            {PERSONAL_INFO.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-400/5 transition-all duration-300 rounded-2xl pointer-events-none"/>
                            </div>
                            <div className='group relative bg-white/5 border border-white/10 rounded-2xl px-2 py-1 hover:border-green-400/50 transition-all duration-300'>
                                <div className='flex items-start gap-2'  >
                                    <div  className='p-2  bg-green-400/30 border border-green-400/25 rounded-2xl'>
                                        <MapPin className='w-5 h-5 text-green-400 '/>
                                    </div>
                                    <div className="flex-1 leading-tight">
                                        <p className='text-sm text-white/60 leading-tight'>Location</p>
                                        <p className='text-white transition-colors font-medium'>{PERSONAL_INFO.location}</p>
                                    </div>
                                </div>
                                <div />
                            </div>
                        </div>
                        <div >
                            <p className='text-lg mb-2'>Connect with me</p>
                             <div className="flex gap-4 ">
                                            {Object.entries(SOCILA_LINKS).slice(0,4).map(([platform, url])=>{
                                                const Icon = socialIcons[platform];
                                                return Icon? (
                                                    <a href={url}
                                                    key={platform}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-400 text-xl  transition-all duration-300 group relative p-2'>
                                                         <Icon className='h-5 w-5 text-white group-hover:text-green-400 transition-colors duration-300' />
                                                         <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-400/10 group-hover:from-green-400/20 group-hover:to-green-400/20"/></a>
                                                ) : null
                                            })}
                                        </div>     
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>

    </section>
  )
}

export default Contact