'use client'

import {useState, useEffect} from 'react';
import { GoLaw } from 'react-icons/go';
import Image from 'next/image';

const Hero = () => {

  const [isOriginal, setIsOriginal] = useState(true);

  useEffect(() => {
    const toggleContent = () => {
      setIsOriginal((prevState) => !prevState);
    };

    const interval = setInterval(toggleContent, 10000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={`w-screen h-screen overflow-hidden flex flex-col`}>
    <div className='w-full h-1/2 heroRotation p-10 flex justify-center items-center'>
      {isOriginal ? 
          <GoLaw style={{ fontSize: '35vmin' }} className={`${isOriginal ? 'slideFirst' : ''}`} /> 
              : 
                  <div className={`${isOriginal ? '' : 'slideSecond'} md:w-1/3 md:h-1/3 w-full h-full relative bg-nav_law`}><Image src="/gif2.gif" fill alt='gif' className='p-1' /></div>  }
    </div>

      <div className='w-full h-full p-10 flex md:flex-row md:items-end md:justify-end sm:items-center sm:justify-center flex-wrap'>
        <div className='w-full h-2/3 p-5 flex justify-center'>
          <div className='bg-transparent md:w-1/3 w-0'></div>
          <div
            className={`flex flex-col md:flex-row-reverse sm:flex-col justify-center items-center w-full h-full md:w-1/2 sm:w-full relative`}>

            <div className='flex justify-center items-center w-full h-full md:w-full sm:w-full order-2 md:order-2'>
              <p className='text-3xl md:text-4xl xl:text-5xl font-bold'>
                Jednostavno i brzo izradite sudski dokument...
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
