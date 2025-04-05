import { React, useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { mobileItemVariants, mobileMenuVariants, linkVariants } from '../utils/animation';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  

  // Event handlers
  const handleToggle = () => setIsOpen(prev => !prev);
  const handleCloseMenu = () => setIsOpen(false);

  const handleScroll = () => {
    const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    });
  };

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Added offset for better positioning
        behavior: 'smooth'
      });
      handleCloseMenu();
    }
  };

  // Scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links component
  const NavLinks = ({ mobile = false }) => (
    <ul className={`
      font-medium 
      ${mobile 
        ? 'flex flex-col space-y-4 py-6' 
        : 'flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0'
      }
    `}>
      {['home', 'services', 'about', 'pricing', 'testimonial'].map((section) => (
        <motion.li 
          key={section}
          variants={mobile ? mobileItemVariants : undefined}
        >
          <motion.a
            href={`#${section}`}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo(section);
            }}
            className={`
              text-white 
              transition-colors duration-200
              hover:text-[#06a055]
              ${activeSection === section ? 'text-[#06a055] font-semibold' : ''}
              ${mobile ? 'block py-2' : ''}
            `}
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace('testimonial', 'Testimonials')}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );

  return (
    <header className="bg-[#0e1122] text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src="./Logo.png" 
                alt="Logo" 
                className="h-12 w-auto object-contain" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-grow justify-center items-center">
            <NavLinks />
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-[#06a055] 
                hover:bg-[#06a055]/90 
                text-white 
                px-6 
                py-2.5 
                rounded-lg 
                transition-all 
                duration-200
              "
            >
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06a055]"
              aria-label="Toggle menu"
            >
              <HiOutlineMenuAlt3 className="size-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          className="md:hidden bg-[#0e1122] border-t border-gray-800"
          initial="hidden"
          animate="visible"
          variants={mobileMenuVariants}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <NavLinks mobile />
            <motion.div 
              className="pb-6"
              variants={mobileItemVariants}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('contact');
                }}
                className="
                  block 
                  w-full 
                  text-center 
                  bg-[#06a055] 
                  hover:bg-[#06a055]/90 
                  text-white 
                  px-6 
                  py-3 
                  rounded-lg
                "
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;