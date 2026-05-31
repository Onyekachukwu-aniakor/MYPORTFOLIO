
import {Mail, MapPin} from 'lucide-react'
import { SiGithub} from 'react-icons/si'
import {SlSocialLinkedin} from 'react-icons/sl'
import { RiTwitterXLine, RiDribbbleLine,  RiWhatsappFill } from 'react-icons/ri'
import { PERSONAL_INFO, SOCILA_LINKS, NAV_LINKS } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'

const Footer = () => {

  const socialIcons ={
          github : SiGithub,
          linkedin : SlSocialLinkedin,
          twitter : RiTwitterXLine,
          whatsapp : RiWhatsappFill,
          dribbble : RiDribbbleLine
      }
  return (
    <footer  className='relative bg-black overflow-hidden border-t border-white/20'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-black/20 opacity-40 rounded-full blur-3xl " />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-black/20 opacity-40 rounded-full blur-3xl"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-1  ">
          <FadeIn delay={0}>
            <div >
              <h3 className='text-2xl font-bold bg-gradient-to-r from-green-400 via-green-600 to-green-800 bg-clip-text text-transparent hover:opacity-80 transition-opacity  '> {PERSONAL_INFO.name.split(' ')[0]}</h3>
              <p className='text-white/90 leading-relaxed text-lg mb-2'>{PERSONAL_INFO.tagline}</p>
              <div className="space-y-2">
                <a href={`mailto:${PERSONAL_INFO.email}`}
                 className=' group flex items-center gap-2 px-2 py-1 bg-white/10 border rounded-2xl leading-relaxed border-white/10'> 
                 <div className="p-2  bg-green-400/30 border border-green-400/25 rounded-2xl ">
                  <Mail className='w-5 h-5 text-green-400'/>
                 </div>
                 <span className='text-white/90 text-lg group-hover:text-white transition-colors'>{PERSONAL_INFO.email}</span>
                </a>
                <div className="group flex items-center gap-2 px-2 py-1 bg-white/10 border rounded-2xl leading-relaxed border-white/10">
                  <div className="p-2  bg-green-400/30 border border-green-400/25 rounded-2xl">
                    <MapPin className='w-5 h-5 text-green-400' />
                  </div>
                  <span className='text-white/90 text-lg group-hover:text-white transition-colors'>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="">
              <h4 className='text-white font-medium mb-2 text-lg'>Quick Links</h4>
              <ul className='space-y-2'>
                {NAV_LINKS.map((link)=>(
                  <li key={link.id}>
                    <button onClick={()=>scrollToSection(link.id)}
                     className='group flex items-center gap-2 text-white/90 hover:text-green-400 transition-all duration-300'>
                      {/* w-2 h-2 USED TO CREATE BUTTONS BESIDE THE UNORDERED LIST */}
                      <div className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-green-400 group-hover:w-2 transition-all duration-300"/>
                      <span className=''>{link.label}</span>
                     </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div >
              <h4 className='text-white font-medium mb-2 text-lg'>Connect With Me</h4>
              <p className='text-white/90 mb-2 leading-relaxed'>Let's connect and create something amazing together</p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(SOCILA_LINKS).map(([platform,url])=>{
                  const Icon =socialIcons[platform];
                  return Icon? (
                    <a key={platform} 
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative bg-white/10 rounded-lg border border-white/20 hover:bg-white/30 hover:border-green-400 hover:scale-110 transition-all duration-300 p-2'
                    aria-label={`Connect on ${platform}`}>
                      <Icon className='h-5 w-5 text-white group-hover:text-green-400 transition-colors duration-300'/>
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-400/10 group-hover:from-green-400/20 group-hover:to-green-400/20 transition-all duration-300 pointer-events-none"/>
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={300}>
          <div className="pt-2 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <p className='text-white/90 text-sm'> @{new Date().getFullYear()}{PERSONAL_INFO.name}. <span className=''>All rights reserved</span></p>
              {/* <p className=''>Built with <Heart className=''/></p> */}
            </div>
          </div>
        </FadeIn>
      </div>


    </footer>
  )
}

export default Footer