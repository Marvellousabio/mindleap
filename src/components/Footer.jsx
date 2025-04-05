import React from 'react'
import footerLogo from '/footerLogo.png'
import { FaEnvelope,  FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animation'

const Footer = () => {
  return (
    <div
                         className =' py-12 bg-gray-100 px-8'>
        <motion.div 
    variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.7}} className='container  ms-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
            <div className='space-y-6 mr-14'>
                <div className='flex items-center space-x-2'>
                    <img src={footerLogo} alt='footer logo' className='w-12 h-auto'/>
                </div>
                <p className='text-[#0e1122]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit enim, necessitatibus officia deserunt temporibus iusto provident perferendis consequatur dolores? Praesentium et explicabo illo! Eius odio officia quibusdam architecto error?
                </p>
                <div className='flex space-x-4'>
                    <a href=''className='bg-gray-200 text-[#06a055] rounded-full size-10 flex items-center justify-center hover:bg-[#06a055] hover:text-white '>
                        <FaFacebookF className='text-xl'/>
                    </a>
                
                    <a href=''className='bg-gray-200 text-[#06a055] rounded-full size-10 flex items-center justify-center hover:bg-[#06a055] hover:text-white '>
                        <FaTwitter className='text-xl'/>
                    </a>
                
                    <a href=''className='bg-gray-200 text-[#06a055] rounded-full size-10 flex items-center justify-center hover:bg-[#06a055] hover:text-white '>
                        <FaInstagram className='text-xl'/>
                    </a>
                
                    <a href=''className='bg-gray-200 text-[#06a055] rounded-full size-10 flex items-center justify-center hover:bg-[#06a055] hover:text-white '>
                        <FaLinkedinIn className='text-xl'/>
                    </a>
                </div>
            </div>
            <div className='space-y-6'>
                <h3 className='text-lx font:semibold mb-4'>Quick Links</h3>
                <ul className='space-y-3'>
                    <li>
                        <a href='#home' className='hover:underline text-gray-700 '>Home</a>
                    </li>
                    <li><a href='#about' className='hover:underline text-gray-700 '>About Us</a>
                        </li>
                        <li><a href='#services' className='hover:underline text-gray-700 '>Sevices</a>
                       </li>
                       <li> <a href='#contact' className='hover:underline text-gray-700 '>Contact Us</a></li>
                </ul>
            </div>
            <div className='space-y-6'>
                <h3 className='text-lx font:semibold mb-4'>Support</h3>
                <ul className='space-y-3'>
                    <li>
                        <a href='#' className='hover:underline text-gray-700 '>FAQs</a>
                    </li>
                    <li><a href='#' className='hover:underline text-gray-700 '>Termes of Services</a>
                        </li>
                        <li><a href='#' className='hover:underline text-gray-700 '>Privacy Policy</a>
                       </li>
                       <li> <a href='#' className='hover:underline text-gray-700 '>Support Center</a></li>
                </ul>
            </div>
            <div className='space-y-6'>
                <h3 className='text-lx font:semibold mb-4'>Contact Info</h3>
                <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                     <FaMapMarkedAlt className='text-[#06a055]' />
                     <p className='text-gray-700'> 123 Street, City, Country</p>
                    </li>
                    <li className='flex items-center gap-2'>
                     <FaPhoneAlt className='text-[#06a055]' />
                     <p className='text-gray-700'> 123 456 7890</p>
                    </li>
                    <li className='flex items-center gap-2'>
                     <FaEnvelope className='text-[#06a055]' />
                     <p className='text-gray-700'> infomindleap@gmail.com</p>
                    </li>
              </ul>
            </div>
        </motion.div>
    </div>
  )
}

export default Footer