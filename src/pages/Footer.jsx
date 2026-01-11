import React from 'react'
import logo from '../images/Logo.png'
import map from '../images/map.jpg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 w-full min-h-[500px] px-4 place-items-center bg-footer_colour'>
       <div className='w-[300px] h-[400px]'>
        <img src={logo} alt="" className='w-full h-[200px]' />
        <p className='p-2 font-bold'>
            Rooba Swastha Private Limited a Registered Indian Pharma Company 
            engaged in the manufacture and marketing of pharmaceutical formulations.
        </p>
        <div className='flex gap-4 p-2'>
              <i className='bi bi-whatsapp hover:text-yellow-500'></i>
              <i className='bi bi-instagram hover:text-yellow-500'></i>
              <i className='bi bi-linkedin hover:text-yellow-500'></i>
              <i className='bi bi-twitter hover:text-yellow-500'></i>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-[300px] h-[400px]'>
            <h1 className='text-compname text-4xl'>Quick links</h1>
            <ul className='gap-4'>
                <li className='font-bold mt-2 hover:text-yellow-500'><Link to="">About Us</Link></li>
                <li className='font-bold mt-2 hover:text-yellow-500' ><Link to="">Products</Link></li>
                <li className='font-bold mt-2 hover:text-yellow-500'><Link to="">Blogs</Link></li>
                <li className='font-bold mt-2 hover:text-yellow-500'><Link to="">Career</Link></li>
                <li className='font-bold mt-2 hover:text-yellow-500'><Link to="">Contact Us</Link></li>
            </ul>
      </div>
      <div className='w-[250px] h-[250px] border'>
          <a href="window.open('https://www.google.com/maps?q=Coimbatore+India', '_blank')"><img src={map} alt="" className='w-full h-full' /></a>
      </div>
      <div className='flex flex-col justify-center items-center px-2 w-[300px] gap-4 h-[400px]'>
          <h1 className='text-compname text-4xl w-full text-start'>Contact info</h1>
          <div className='flex gap-2 justify-start w-full'>
              <i className='bi bi-telephone font-bold'></i>
              <p className='font-bold'>+91 7559325548</p>
          </div>
           <div className='flex justify-start w-full gap-2'>
              <i className="bi bi-envelope-fill font-bold"></i>
              <p className='font-bold'>info@Roobaswastha.com</p>
          </div>
           <div className='flex gap-2'>
            <i class="bi bi-geo-alt-fill font-bold"></i>
            <p className='font-bold'>Rooba swastha pharmaceutical
              Private limited D.90. 9-415/G,yerraballi,
              rajampet,Annamayya Dt
              Andrapradesh-516 115.Contact:90003 31339
            </p>
          </div>
      </div>
    </div>
  )
}

export default Footer
