import React from 'react'
import about from '../images/about.png'
const Aboutus = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center lg:flex-row md:flex-col  gap-6  py-4 h-auto'>
            <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]'>
                <img src={about} alt="" className='w-full h-full' />
            </div>
            <div className='w-[300px] lg:w-[500px] lg:h-[400px] px-3 rounded-[15px] shadow'>
                <h1 className='text-xl lg:text-2xl text-compname'>Welcome to Rooba Swastha Pharmaceuticals</h1>
                <p className='text-josefin mt-3'>
                  Rooba Swastha Pharmaceuticals is a growing company dedicated to providing affordable, 
                  high-quality generic medicines. We partner with reliable, WHO-GMP & ISO-certified 
                  manufacturers to ensure every product meets global quality and safety standards. This strong 
                  commitment allows us to deliver medicines that are not only effective but also trusted by 
                  healthcare professionals and patients. Our motto, "Affordable Healthcare for All," drives 
                  us to bridge the gap between quality and accessibility, making us a dependable partner in 
                  healthcare.
                </p>
            </div>
    </div>
  )
}

export default Aboutus
