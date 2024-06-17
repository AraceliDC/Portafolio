import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
<div>
<h1 className='text-pink-300 font-bold' style={{ fontSize: '20pt',  height:'40px', textAlign: 'center',  marginTop:'20px'}}>CATALOGO DE PROYECTOS</h1>

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '50px' }}>
  


  <div style={{ display: 'flex', margin: '10px' }}>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-pink-300">Meow Café</p>
        <Link href="https://aracelidc.github.io/Proyecto_Landing/">
          <p className=' text-white hover:text-pink-300'>Ver Pagina</p>
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="Screenshot_4.jpg"
          width={455}
        />
      </CardBody>
    </Card>

  </div>
  <div style={{ display: 'flex', margin: '10px' }}>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-pink-300">CRUD</p>
        <Link href="https://aracelidc.github.io/Proyecto-2-CRUD/">
          <p className=' text-white hover:text-pink-300'>Ver Pagina</p>
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="Screenshot_5.jpg"
          width={450}
        />
      </CardBody>
    </Card>

  </div>
  <div style={{ display: 'flex', margin: '10px' }}>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-pink-300">Valorant Dashboard</p>
        <Link href="https://aracelidc.github.io/Proyecto-3-Dashboard">
          <p className=' text-white hover:text-pink-300'>Ver Pagina</p>
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="Screenshot_6.jpg"
          width={450}
        />
      </CardBody>
    </Card>

  </div>
  <div style={{ display: 'flex', margin: '10px' }}>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-pink-300">Happy Ramyon</p>
        <Link href="https://aracelidc.github.io/proyecto-4/">
          <p className=' text-white hover:text-pink-300'>Ver Pagina</p>
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="Screenshot_7.jpg"
          width={450}
        />
      </CardBody>
    </Card>

  </div>
  <div style={{ display: 'flex', margin: '10px' }}>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-pink-300">Polera POP</p>
        <Link href="https://proyecto5-cliente.vercel.app">
          <p className=' text-white hover:text-pink-300'>Ver Pagina</p>
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="Screenshot_8.jpg"
          width={455}
        />
      </CardBody>
    </Card>

  </div>
</div>
</div>
  )
}

export default page