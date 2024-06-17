'use client'
import Clientbutton from '@/components/button'
import DateDisplay from '@/components/date'
import React, { useState } from 'react'

const page = () => {
 
  return (
    <div className=' flex-col mt-60 text-left mx-20 m-6'>

      <div>
        <h1 className='text-pink-300 text-7xl'>BIENVENIDOS</h1>
        <h1 className='text-pink-300 text-7xl'>SOY ARACELI DEIJ CABEZAS</h1>
        <h1 className='text-pink-300 text-7xl'>DESARROLLADORA WEB FULL STACK</h1>
        <Clientbutton text="Pulsa aquí" />
        <DateDisplay />
      </div>
    </div>

  )
}
export default page