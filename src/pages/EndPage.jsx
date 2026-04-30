import { Heart } from 'lucide-react'
import React from 'react'

const EndPage = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h2 className='md:text-4xl text-2xl font-bold text-center'>BENDE SENI SEVIYORUM</h2>
      <span className='text-4xl font-bold my-2'><Heart className='size-20 text-red-500 ' fill='red' /></span>
      <img src="/happykedy.png" alt="" />
    </div>
  )
}

export default EndPage