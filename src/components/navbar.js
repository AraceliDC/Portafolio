import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex items-center justify-center bg-red-50 px-4'>
            <Image
                src="/Deijcode.png"
                alt='logo'
                width={100}
                height={100} />
            <div className='flex space-x-4'>
                <Link href="/">
                    <p className='text-black'>Home</p>
                </Link>
                <Link href="/about">
                    <p className='text-black'>Sobre mi</p>
                </Link>
              
                <Link href="/catalogo">
                    <p className='text-black'>Proyectos</p>
                </Link>
                <Link href="/contacto">
                    <p className='text-black'>Contacto</p>
                </Link>
                {/* <Link href="/feedback">
                    <p>Feedback</p>
                </Link> */}
            </div>
        </div>
    )
}

export default Navbar
