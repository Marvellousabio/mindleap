import React,{useState,useEffect} from 'react'
import thumbnail from '../assets/thumbnail.png'
import {IoArrowForwardCircleSharp} from 'react-icons/io5'
import {IoPlay} from 'react-icons/io5';
import {fadeIn} from '../utils/animation'

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying]=useState(false);
  const handleVideoPlay=()=>(
    setIsVideoPlaying(true)
  )
  const handleCloseVideo=()=>
    setIsVideoPlaying(false)
  useEffect(()=>{
    document.body.style.overflow=isVideoPlaying? 'hidden':'auto';
  },[isVideoPlaying])
  const apiUrl = import.meta.env.VITE_VIDEOLINK;
  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20'>
    <motion.div 
    variants={fadeIn('down', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.7}}
    className='container mx-auto '>
    <div className=' md:w-4/5 py-12 px-4 mx-auto flex flex-col md:flex-row items-center gap-8'>
      {/*Left*/}
      <div className='md:w-1/2 w-full mb-8 md:mb-0'>
      {
        !isVideoPlaying ?(
          <div className='relative'>
            <img src={thumbnail} alt='thumbnail' className='w-full md:h-[446px] h-auto rounded-lg object-cover'/>

          <button onClick={handleVideoPlay}
           className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#06a055] p-3 rounded-full shadow-lg cursor-pointer'><IoPlay className='size-12 text-white'/></button>
          </div>
        ):(null)
      }
      </div>
      {/*Right*/}
      
        <div className='md:w-1/2 w-full'>
                <h1 className='text-4xl capitalize font-secondary md:4 md:w-3/5 leading-snug '> Individual Consult and Therapy</h1>
                <p className='text-lg mb-12 md:pr-8'>We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we are kinder to ourselves. Let us walk you through the basics in our new mindful guide on how to meditate</p>
                <button className='bg-[#06a055] text-white py-3.5 px-8 font-medium rounded-md hover:bg-[#06a055]/90'>
                  <a href='#contact' className='flex gap-1 items-center'>
                    <span>Get Started</span>
                    <IoArrowForwardCircleSharp />
                    
        
                  </a>
                </button>
                </div>
      </div>
    </motion.div>
    {
      isVideoPlaying &&(
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative w-[90%] max-w-[560px] h-full flex items-center justify-center'>
          
          <iframe 
          width="560"
           height="315"
           src={apiUrl} 
           title="YouTube video player"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen
          className='rounded-lg'
             />
          
          <button onClick={handleCloseVideo} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
            x
          </button>
        </div>
        </div>
      )
    }
    </div>
    
  )
}

export default About