import React from 'react'
import NameCard from '../../components/NameCard'
import {Link, useNavigate} from "react-router-dom"


const Contact = () => {

  const navigate = useNavigate()
  const handleSubmit=()=>{
    alert('Thank you for your message')
    navigate('/')
    e.preventDefault()
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <NameCard/>
      <div>
        <form className='flex flex-col gap-4 my-5' onSubmit={handleSubmit}>
          <h1 className='text-xl'>Contact Me</h1>
          <label htmlFor="" className='flex flex-col'>Name
          <input type='text' className='border-2 border-black py-1 px-2' placeholder='Enter your Name' required/>
          </label>
          <label htmlFor="" className='flex flex-col'>Email
          <input type='text' className='border-2 border-black py-1 px-2' placeholder='Enter your Email address' required/>
          </label>
          <label htmlFor="" className='flex flex-col'>Message 
          <textarea name="" id="" cols="30" rows="10" className='h-24 border-2 border-black py-1 px-2' placeholder='Leave a comment' required></textarea>
          </label>
         
          <button type='submit' className='bg-blue-500 flex items-center justify-center py-2 hover:bg-blue-700 hover:translate-y-1'>Send   </button>
      
        </form>

      </div>
    </div>
  )
}

export default Contact