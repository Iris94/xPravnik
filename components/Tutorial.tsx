import React from 'react'

const Tutorial = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
    <div className='w-full h-1/5 flex justify-center items-center'>
        <h3 className='text-l md:text-2xl lg:text-4xl xl:text-5xl font-bold'>Uputstvo za korištenje</h3>
    </div>
    <div className='w-full h-4/5 flex flex-col lg:flex-row justify-center items-center'>
        <div className='w-full h-full flex justify-center items-center p-5'>
          <img src='/tutor.png' alt='tutorial' className='object-contain'/>
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          <p className='w-2/3 text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl'>U polju iznad dugmića <span className='font-bold'>unesi zahtjev</span> možete da napišete naredbu za tekst. Na primjer ako vam treba žalba, napišete: <span className='italic'>'Napiši mi žalbu povodom X događaja, jer smatram da se dogodilo to i to'</span>. Nakon što izdate zahtjev, kliknite dugme i u polju pored pojavit će se automatski generisan tekst koji prepravite za sitnice. Nakon što imate osnovni tekst samo trebate popuniti ostale informacije, kliknuti na <span className='font-bold'>unesi informacije</span> i skinuti dokument u PDF formatu</p>
        </div>
    </div>
    </div>
  )
}

export default Tutorial