'use client'

import React, { useState } from 'react';
import { PDF, JusticarForm } from '.';

interface FormData {
  name: string;
  address: string;
  city: string;
  phone: string;
  currentDate: string,
  location: string,
  reason: string,
  mainText: string,
  signature: string
}

interface SudskiProps {
  selectedOption: string
}

const Sudski: React.FC<SudskiProps> = ( {selectedOption} ) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    city: '',
    phone: '',
    currentDate: '',
    location: '',
    reason: '',
    mainText: '',
    signature: ''
  });

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
  };

  return (
    <>
      <div className='w-full h-full border-1 flex justify-center items-center'>
        <JusticarForm onFormSubmit={handleFormSubmit} />
      </div>
      <div className='w-full h-full border-1 flex justify-center items-center'>
        <PDF formData={formData} selectedOption={selectedOption} />
      </div>
    </>
  );
};

export default Sudski;
