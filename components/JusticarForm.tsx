'use client'

import React, {useState} from 'react'
import { Chat } from '.';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const JusticarForm = ({ onFormSubmit } : any) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [currentDate, setCurrentDate] = useState<Date | null>(new Date());
  const [location, setLocation] = useState('');
  const [reason, setReason] = useState('');
  const [mainText, setMainText] = useState('');
  const [signature, setSignature] = useState('');

  const handlePromptChange = (promptText: any) => {
    setMainText(promptText);
  };

  const handleClearPromptText = () => {
    setMainText("");
  };

  const handleSubmit = () => {
    onFormSubmit({
      name,
      address,
      city,
      phone,
      currentDate,
      location,
      reason,
      mainText,
      signature
    });
  };
  return (
    <div className='w-full lg:h-4/5 h-fit flex flex-col gap-0 justify-center items-center bg-nav_law rounded-md'>

      <div className='w-full h-fit flex gap-1 lg:gap-1 p-1 lg:p-1 flex-col lg:flex-row justify-evenly items-center'>
          <textarea 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder='Ime i prezime'
          className='text-center p-1 w-full' />
          <textarea 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          placeholder='Adresa'
          className='text-center p-1 w-full' />
          <textarea 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder='Grad'
          className='text-center p-1 w-full' />
          <textarea 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          placeholder='Telefon'
          className='text-center p-1 w-full' />
         <DatePicker
          selected={currentDate}
          onChange={(date: Date | null) => setCurrentDate(date)}
          dateFormat='yyyy-MM-dd' // Specify your desired date format
          placeholderText='Datum'
          className='w-fit lg:h-14 h-10 text-center p-1'
          />
      </div>

      <div className='lg:w-1/2 w-full p-1 h-fit flex justify-center items-center'>
        <textarea 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder='Adresa na koju se dostavlja'
        className='w-full h-fit text-center p-1' />
      </div>

      <div className='lg:w-1/2 w-full p-1 h-fit flex justify-center items-center'>
        <textarea 
        value={reason} 
        onChange={(e) => setReason(e.target.value)} 
        placeholder='Predmet pisanja dokumenta' 
        className='w-full h-fit text-center p-1' />
      </div>

      <div className='w-full p-1 h-1/3 flex justify-center items-center gap-8 lg:gap-1 lg:flex-row flex-col'>
        <Chat onChangePromptText={handlePromptChange} onClearPromptText={handleClearPromptText} />
        <textarea
        value={mainText}
        onChange={(e) => setMainText(e.target.value)}
        placeholder='Ovdje će te dobit ispis'
        className='w-full lg:h-full mobileText overflow-scroll text-center p-1' />
      </div>

      <div className='w-full lg:w-1/3 p-1'>
        <textarea 
        value={signature} 
        onChange={(e) => setSignature(e.target.value)} 
        placeholder='Potpis'
        className='w-full h-fit text-center p-1' />
      </div>

      <div className='lg:w-1/4 w-1/2 h-fit flex justify-center items-center'>
      <button 
      onClick={handleSubmit} 
      className='w-full h-full text-white bg-orange_law font-bold rounded-md mb-2' >Unesi Informacije</button>
      </div>
    </div>
  )
}

export default JusticarForm

