'use client'
import React from 'react'

const DownloadButton = () => {
    const handleDownload= () =>{

    }
  return (
    <div>
        <button className='bg-pink-600 text-black w-44 rounded-lg my-5 py-2 mx-2' onClick={handleDownload}>
            Descargar CV
        </button>
    </div>
  )
}

export default DownloadButton