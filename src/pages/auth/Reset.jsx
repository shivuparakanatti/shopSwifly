import React, { useState } from 'react'
import resetImg from '../../assets/forgot.png'
import { Link } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import Loder from '../../components/Loder'

const Reset = () => {
    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(false)

    const handleForm=(e)=>{
        e.preventDefault()
        setLoading(true)
        sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("Check your Email for Reset link")
    setLoading(false)
  })
  .catch((error) => {
    const errorMessage = error.message;
    var matches = errorMessage.match(/\((.*?)\)/)
   toast.error(matches[1])
   setLoading(false)
  });

    }
    if (loading) <Loder/>
  return (
    <div className='waving-hand py-20'>
        {
            loading && <Loder/> 
        }
        <div className='grid grid-cols-1 sm:grid-cols-2 '>
            
            <div className='hidden sm:flex'>
                <img src={resetImg} className='h-full'/>
            </div>
            <div className='flex items-center justify-center my-12 sm:my-5'>
                <div className='flex flex-col gap-2 bg-[#F1EDEE] shadow text-black p-10'>
                <h1 className='flex items-center justify-start text-3xl mx-2 my-2 text-orange-600'>Login </h1>
                    <form className='flex flex-col gap-4 w-48 md:w-72 ' onSubmit={handleForm}>

                    <input type='text' placeholder='Email' className='border-2 border-black h-8 w-full md:w-3/4'
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required/>
                    <input type='submit' value={'Reset Password'} className='bg-blue-600 w-full md:w-3/4 py-1 rounded-lg cursor-pointer hover:scale-y-105 '  />
                    </form>
                    <Link to={'/login'}>
                    <h1 className=''>Login</h1>
                    </Link>
  
                </div>
            </div>

        </div>
    </div>
  )
}

export default Reset