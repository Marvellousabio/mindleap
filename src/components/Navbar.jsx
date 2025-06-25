import {React,useEffect,useState} from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {  motion } from "motion/react"

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);
    const [activeSection,setActiveSection]= useState('home');
    const handleToggle=()  =>{
        setIsOpen(!isOpen)
    }
    const handleCloseMenu=()=>{
        setIsOpen(false)
    }

    const handleScroll=()=>{
        const sections=['home','services','about','pricing','testimonial'];
        const scrollPosition =window.scrollY+100;
        sections.forEach(section=>{const element=document.getElementById(section);
            if(element){
                const offsetTop=element.offsetTop;
                const height=element.offsetHeight;
                if(scrollPosition >= offsetTop && scrollPosition < offsetTop +height){
                    setActiveSection(section)
                }
            }
        })
    }
    useEffect(()=> {
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleScrollTo =(targetId) =>{
        const targetElement =document.getElementById(targetId)
        if (targetElement){
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior:'smooth'
            })
        }
    }
    const navLinks=(
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0 '>
            <li>
                <motion.a 
                href='#home'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}  
                onClick={(e) =>{
                    e.preventDefault();
                    handleScrollTo('home');
                    handleCloseMenu();
                }} 
                className={`text-white ${activeSection ==='home' ? 'setActiveSection' : ''}`}>Home</motion.a>
            </li>
            
            <li>
                <motion.a
                href='#services' 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}  
                onClick={(e) =>{
                    e.preventDefault();
                    handleScrollTo('services');
                    handleCloseMenu();
                }}
                
                className={`text-white ${activeSection ==='services' ? 'setActiveSection' : ''}`}>Services</motion.a>
            </li>
            <li>
                <motion.a href='#about' 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}  
                onClick={(e) =>{
                    e.preventDefault();
                    handleScrollTo('about');
                    handleCloseMenu();
                }}
                className={`text-white ${activeSection ==='about' ? 'setActiveSection' : ''}`}>About Us</motion.a>
            </li>
            <li>
                <motion.a href='#pricing'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}  
                onClick={(e) =>{
                    e.preventDefault();
                    handleScrollTo('pricing');
                    handleCloseMenu();
                }}
                 className={`text-white ${activeSection ==='pricing' ? 'setActiveSection' : ''}`}>Pricing</motion.a>
            </li>
            <li>
                <motion.a
                 href='#testimonial'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}  
                onClick={(e) =>{
                    e.preventDefault();
                    handleScrollTo('testimonial');
                    handleCloseMenu();
                }}
                 className={`text-white  ${activeSection ==='testimonial' ? 'setActiveSection' : ''}`}>Testimonial</motion.a>
            </li>
        </ul>
    )
  return (
    <header className='bg-[#0e1122] text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
    <div className='container mx-auto flex justify-between items-center h-full'>
        {/* logo*/}
        <div className=' px-8 '>
            <a href='/' className='py-2'>
                <img src='./Logo.png' alt='logo'/>
            </a>
        </div>
        <div className='hidden md:flex flex-grow justify-center'>
            <nav>
                {navLinks}
            </nav>
        </div>
        {/*button */}
        <div className='hidden md:block'>
            <a href='#contact' className='text-white bg-[#06a055] hover:bg-[#06a055]/90 px-4 py-2 rounded'>contact us</a>
        </div>
        <div className='block md:hidden'>
            <button
            onClick={handleToggle}
             className={`text-white focus:outline-none  ${isOpen ? 'border border-white':''}`}>
                <HiOutlineMenuAlt3 className='size-6'/>
            </button>
        </div>
    </div>

    {/* mobile nav items*/}
    {isOpen && (
        <nav className='absolute top-full left-0 w-full bg-[#0e1122] z-20 md:hidden'>
            <ul className='flex flex-col text-center p-4 space-y-3'>
                {navLinks.props.children }
                <li className='py-2'>
                <a href='#contact'
                className='text-white bg-[#06a055] hover:bg-[#06a055]/90 px-4 py-2 rounded'
                onClick={(e)=>{ e.preventDefault();
                    handleCloseMenu();
                }}>
                    Contact Us
                </a>
            </li>
            </ul>
            
        </nav>
    )}

    </header>
  )
}

export default Navbar