import React from 'react'
import {AiFillCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='w-full bg-slate-700'>
      <h1 className='flex items-center justify-center text-white py-8'><AiFillCopyrightCircle/> <h1> {year }  All Rights Reserved</h1> </h1>

    </div>
  )
}

export default Footer