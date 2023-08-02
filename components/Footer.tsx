import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <nav className='w-screen h-4 flex justify-center items-center bg-lime_law fixed bottom-0'>
    <div className='w-screen h-4 flex justify-center items-center bg-main_law fixed bottom-0 footerArrow'>
        <div className='w-2/5 h-full flex justify-evenly items-center'>
          <div className='flex justify-center items-center text-lime_law font-bold'><p>Kontakt</p></div>
          <div className='w-2/3 h-full flex justify-center gap-10 items-center'>
            <a href='https://www.facebook.com/mirza.iris/' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-lime_law w-fit h-full cursor-pointer' />
            </a>
            <a href='https://github.com/Iris94' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='text-lime_law w-fit h-full cursor-pointer' />
            </a>
            <a href='www.linkedin.com/in/iris94' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-lime_law w-fit h-full cursor-pointer' />
            </a>
            <p className='w-full h-full text-lime_law font-sm flex justify-center items-center'>mirza.iris@outlook.com</p>
          </div>
        </div>
        <div className='w-1/5 h-full'></div>
        <div className='w-2/5 h-full flex justify-center items-center text-lime_law font-bold text-sm'>Prototip Web Aplikacije za izradu sudskih dokumenata</div>
    </div>
    </nav>
  )
}

export default Footer