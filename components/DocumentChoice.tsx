'use client'

import React, { useState, ChangeEvent } from 'react';
import { Sudski } from '.'; 

const lawJudge = ['Izjava', 'Tužba', 'Odgovor na tužbu', 'Žalba', 'Podnesak', 'Prigovor', 'Zahtjev za razvod braka', 'Zahtjev za alimentaciju', 'Zahtjev za naknadu štete'];

const DocumentChoice = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const renderSelectedOptionContent = (selectedOption : string) => {
    if (lawJudge.includes(selectedOption)) {
      return <Sudski selectedOption={selectedOption} />
    } else {
      return null;
    }
  };

  return (
    <section className='w-screen h-screen flex justify-center items-center p-5 flex-col md:overflow-hidden'>
      <div className={`w-full h-1/5 flex justify-center items-center flex-col ${selectedOption === '' ? 'centerHeader' : 'animaHeader'}`}>
        <div className='w-full h-1/2 flex items-center justify-center'>
            <h2 className='text-l md:text-2xl lg:text-4xl xl:text-5xl font-bold'>Izaberite Dokument</h2> 
        </div>
        <div className='w-1/3 h-1/2 flex justify-center items-center gap-4'>
            <select value={selectedOption} onChange={handleSelectChange} className='text-l md:text-xl'>
            <option value="" disabled className='text-center'>
            Sudski
            </option>
            {lawJudge.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
            ))}
            </select>
            <hr className='bg-orange_law w-1 h-10' />
        </div>
      </div>

      <div className={`w-full h-screen flex flex-col md:flex-row gap-1 justify-center items-center p-5 ${selectedOption === '' ? '' : 'animaMain'}`}>
          {renderSelectedOptionContent(selectedOption)}
      </div>
    </section>
  );
};

export default DocumentChoice;




