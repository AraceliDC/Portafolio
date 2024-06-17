import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='bg-red-50 text-black p-4 text-center fixed bottom-0 w-full'>
        <div className='container mx-auto flex justify-between'>
          <div className='w-1/2 text-center'>
            <p>2024 Todos los derechos reservados </p>
          </div>
          <div className='w-1/2 text-center'>
            <p>Información de contacto: agdeijc@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer