import  { useEffect, useState } from 'react'
import {Code, Menu, X} from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map((link)=> link.id));

  useEffect(()=>{
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY >50)
    };

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) =>{
      scrollToSection(sectionId);
      setIsMenuOpen(false);

    };

  return (
    <nav className={`sticky  top-0 left-0 right-0 z-1000  py-4 w-full transition-all duration-300 ${isScrolled? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'}`} style={{transform: 'translate3d(0,0,0)'}}>
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex item-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Code className='w-6 h-6 text-green-500'/>

            <button onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}
              className='text-2xl font-bold bg-gradient-to-r from-green-400 via-green-600 to-green-800 bg-clip-text text-transparent hover:opacity-80 transition-opacity'
              aria-label='home'>
                {PERSONAL_INFO.name.split(' ')[0]}
            </button>
          </div>
          {/* Destop Navigation */}
          <nav className='hidden md:flex items-center gap-7'>
            {NAV_LINKS.map((link)=>(
              <button key={link.id}
              onClick={()=>handleNavClick(link.id)}
              className={`text-base font-medium transition-all duration-300 ${activeSection === link.id ? 'text-white' : 'text-white/70 hover:text-white'}`}>
                {link.label}

              </button>
            ))}

          </nav>
          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2 ">
            <button onClick={()=>handleNavClick('contact')}
              className='px-7 py-1 bg-white text-[#212121] font-medium text-base rounded-full border border-white hover:bg-white/90 transition-all duration-300 '>
                Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={()=>setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-4 text-white hover:text-white/80 transition-colors '
            aria-label='menu'
            aria-expanded= {isMenuOpen}>
              {isMenuOpen? <X className='w-6 h-6'/> : <Menu  className='w-6 h-6'/>}

          </button>
        </div>
      </div>
      {/* MOBILE Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3">
          {NAV_LINKS.map((link)=>(
            <button key={link.id}
            onClick={()=>handleNavClick(link.id)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection=== link.id? 'text-white bg-white/10' : 'text-white/70 hover:text-white bg-white/20'}`}>
              {link.label}
            </button>
          ))}

          <button className='w-full px-7 py-3 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 mt-2 '
          onClick={()=>handleNavClick('contact')}>
            Hire Me

          </button>

        </div>
      </div>
      
      </nav>
  )
}

export default Navbar