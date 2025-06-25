import React,{useState} from 'react'
import {FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt} from 'react-icons/fa';
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animation'

const Contact = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[country,setCountry]=useState("");
  const[message,setMessage]=useState("");
  const[showModel,setShowModel]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data=[
      name,
      email,
      phone,
      country,
      message 
    ]
    if(!data){
      alert('Please fill all fields')
      return;
    }
    setShowModel(true)
  }
  const closeModel =()=>{
    setShowModel(false)
    setName('')
    setEmail('')
    setCountry('')
    setMessage('')
    setPhone('')
  }
  return (
    <div className=' bg-[#0e1122] flex items-center justify-center py-28 px-8' id='contact'>
    <div className='container mx-auto '>
      <div className='md:4/5 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 items-center md:gap-12'>
      {/*left side*/}
      <motion.div 
              variants={fadeIn('right', 0.2)}
                                  initial='hidden'
                                  whileInView={'show'}
                                  viewport={{once:false, amount:0.7}}
      className='space-y-8'>
        <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an Appointment </h2>
        
       <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
       <div className=' flex items-start gap-4'>
          <div className='flex items-center justify-center rounded-full bg-[#ffffff] p-3'>
            <FaUserAlt className='text-[#06a055]' />
          </div>
          <div className='space-y-1'>
            <h3 className='text-lg font-medium'> 24 Hours Services</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis!</p>
          </div>
        </div>
        <div className=' flex items-start gap-4'>
          <div className='flex items-center justify-center rounded-full bg-[#ffffff] p-3'>
            <FaEnvelope className='text-[#06a055]' />
          </div>
          <div className='space-y-1'>
            <h3 className='text-lg font-medium'>Expert Therapy</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis!</p>
          </div>
        </div>
        <div className=' flex items-start gap-4'>
          <div className='flex items-center justify-center rounded-full bg-[#ffffff] p-3'>
            <FaPhoneAlt className='text-[#06a055]' />
          </div>
          <div className='space-y-1'>
            <h3 className='text-lg font-medium'>High Quality Care</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis!</p>
          </div>
        </div>
        <div className=' flex items-start gap-4'>
          <div className='flex items-center justify-center rounded-full bg-[#ffffff] p-3'>
            <FaGlobe className='text-[#06a055]' />
          </div>
          <div className='space-y-1'>
            <h3 className='text-lg font-medium'> Trusted Clinic</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis!</p>
          </div>
        </div>
       </div>
      </motion.div>
      {/* right side*/}
      <motion.div 
              variants={fadeIn('left', 0.2)}
                                  initial='hidden'
                                  whileInView={'show'}
                                  viewport={{once:false, amount:0.7}}
                                   className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
        <h3 className='text-2xl font-bold mb-4 '>Book Appointment</h3>
        <form onSubmit={handleSubmit} className='space-y-8'>
          <div className='flex sm:flex-row flex-col gap-4'>
            <input
            onChange={e =>setName(e.target.value)}
            type='text' placeholder='Name' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06a055] shadow' />
            <input 
            onChange={e=> setEmail(e.target.value)}
            type='email' placeholder='Email Address' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06a055] shadow' />
            
          </div>
          <div className='flex sm:flex-row flex-col gap-4'>
            <input 
            onChange={e=> setPhone(e.target.value)}
            type='tel' placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06a055] shadow' />
            <input
            onChange={e=> setCountry(e.target.value)}
            type='text' placeholder='Country' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06a055] shadow' />
          </div>
          <textarea 
          onChange={e=> setMessage(e.target.value)}
          value={message}
          rows='5' placeholder='Write your Message...' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06a055] shadow '>
          </textarea>
          <button type='submit' className='w-full p-3 bg-[#06a055] text-white rounded-md hover:bg-[#06a055]/90' >Send Message</button>
        </form>
      </motion.div>
      </div>
    </div>
    {
      showModel && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
          <div className='bg-white p-8 rounded-md shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Thank you</h2>
            <p>Thank you,{name}, for submitting your Query.</p>
            <button
            onClick={closeModel} 
            className='mt-4 px-4 py-2 bg-[#06a055]  text-white rounded-md'>Close</button>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default Contact