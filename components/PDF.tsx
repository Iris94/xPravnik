import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface FormData {
  name: string;
  address: string;
  city: string;
  phone: string;
  currentDate: string,
  location: string,
  reason: string,
  mainText: string,
  signature: string,
}

interface PDFProps {
  formData: FormData,
  selectedOption: string
}

const PDF: React.FC<PDFProps> = ( {formData, selectedOption} ) => {

    const { name, address, city, phone, currentDate, location, reason, mainText, signature } = formData ;

    const handlePrint = () => {
      const divToPrint = document.getElementById('div-to-print');
  
      if (divToPrint) {
        html2canvas(divToPrint, {
          // Set the desired scale to increase resolution (e.g., 2 for doubling the resolution)
          scale: 2,
        }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
  
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('report.pdf');
        });
      }
    };

    const formattedDate = new Date(currentDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-1'>
    <div id="div-to-print" className='w-full md:w-2/3 text-xs md:text-sm h-screen overflow-scroll p-5 flex flex-col gap-5'>

      <div className='w-full h-fit flex items-center justify-between'>
        <div className='w-1/3 h-full'>
          <p>{name}</p>
          <p>{address}</p>
          <p>{city}</p>
          <p>{phone}</p>
        </div>

        <div className='w-1/3 flex items-center justify-center'>
          <h1>{selectedOption}</h1>
        </div>
    
        <div className='w-1/3 flex justify-end h-full'>
          <p>{formattedDate}</p>
        </div>
      </div>

      <div className='w-1/3 h-fit'>
        <p>{location}</p>
      </div>

      <div className='w-full h-fit'>
        <p><span>Predmet: </span>{reason}</p>
      </div>

      <div className='w-full h-fit flex justify-center items-center flex-wrap'>
        <p>{mainText}</p>
      </div>

      <div className='self-center h-full'>
        <p>{signature}</p>
      </div>
    </div>
    <div className='flex h-1/5 w-full justify-center items-start'>
    <button className='w-1/2 h-1/3 text-white bg-orange_law font-bold rounded-md' onClick={handlePrint}>Skini u PDF-u</button>
    </div>
  </div>
  )
}

export default PDF