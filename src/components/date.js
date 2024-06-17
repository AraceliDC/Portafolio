import React from 'react'

const date = () => {
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  return new Date().toLocaleDateString('es-Es', options)
    
  
}

const DateDisplay = () =>{
    const currentDate = date();
    return(
        <h2>{currentDate}</h2>
    )
}

export default DateDisplay