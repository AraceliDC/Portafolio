'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Clientbutton = ({text}) => {
  const [seen, setSeen] = useState(false)
    const handleClick = ()=>{
       setTimeout(()=>{
        setSeen(!seen)
       }, 150)
    }
  return (
   <div>
     <button className='bg-pink-600 text-black w-44 rounded-lg my-5 py-2 mx-2' onClick={handleClick}>{text}</button>
    {
      seen && (
        <div className='my-5 mx-2.5'>
          <Link href="/catalogo">
            <p className='bg-pink-600 text-black w-44 text-center rounded-md py-2 my-5'>Proyectos</p>
          </Link>
          <Link href="/about">
            <p className='bg-pink-600 text-black w-44 text-center rounded-md py-2 my-5'>Sobre mi</p>
          </Link>
          

        </div>
      )
    }
   </div>
  )
}

export default Clientbutton