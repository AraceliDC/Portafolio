import Image from 'next/image'
import React from 'react'
import DownloadButton from '@/components/downloadButton'

const page = () => {
  return (
    <div className='text-pink-300'>
      <div className='flex-col justify-between' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <div className='m-20' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%'}}>
          <Image
            src="/Meowcafe_2.png"
            alt='logo'
            width={200}
            height={200}
          />
          <Image
            src="/logo.png"
            alt='logo'
            width={200}
            height={200}
          />
        </div>
        <div style={{width: '100%'}}>
         <div style={{width:'80%'}}>
         <h1 style={{fontSize: '4em'}}>SOBRE MI</h1><br />
          <p className='mr-10' style={{fontSize:'14pt'}}>Soy una profesional de la arquitectura que a lo largo de los años he demostrado una fascinación por el campo de la informatica explorando diferentes conceptos de esta, desde modificaciones en la BIOS de antiguos computadores hasta embarcarme en un Bootcamp recientemente.<br/><br/> A lo largo de la experiencia en el mundo de la informatica he comprendido la programación desde sus fundamentos, donde usando PSeint llegué a crear un juego, modesto pero entretenido.<br/> <br/>Al final cursando este Bootcamp descubrí lo que realmente me apasiona y puedo combinar mi conocimiento arquitectonico con la informática, pero esto solo significa el comienzo de una nueva etapa.</p><br />
          <p style={{display: 'flex', justifyContent: 'flex-end', fontSize: '16pt'}}>Araceli Deij Cabezas</p>
          <DownloadButton />
        </div> 
        </div>
      </div>
    </div>
  )
}

export default page