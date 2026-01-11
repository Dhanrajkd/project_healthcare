import React from 'react'
import about from '../images/about.png'
import Ourmission from './Ourmission'
import Whychoose from './Whychoose'
import Movinganime from './Movinganime'
import Ourproducts from './Ourproducts'
import Feedback from './Feedback'
const Home = () => {
  return (
    <div className='w-full h-auto' >
      <div className='flex flex-col lg:flex-row px-4 w-full py-8 min-h-[450px] border  items-center justify-center gap-8'>
        <div className='max-w-md w-full lg:min-w[500px] lg:min-h-[500px]'>
          <img src={about} alt="" className='w-full lg:min-h-[500px]' />
        </div>
        <div className='lg:max-w-[500px] lg:min-h-[500px] bg-white text-center p-4'>
              <h1 className='text-2xl text-compname'>Welcome To Vridam Healthcare</h1>
            <p className="font-josefin mt-4 text-comppara text-start">
                  Vridam Healthcare Private Limited is a registered Indian pharma company engaged
                  in the manufacture and marketing of pharmaceutical formulations.
              </p>
              <p className="font-josefin mt-4 text-comppara text-start">
                  We have our own manufacturing unit with sections like Tablets, Capsules, Soft
                  Gelatin Capsules, Oral Liquid (Syrup & Suspension), Oral Dry Syrup, Injectables,
                  External Liquids, Ointments, Creams, Betalactum Products, General Products,
                  Nutraceuticals, Soaps, Shampoo, Eye Drops, Oral Sachets & Powders, External
                  Powder & Cosmetics.
              </p>
              <p className="font-josefin mt-4 text-comppara text-start">
              At Vridam Healthcare, we are committed to delivering superior healthcare
              solutions to improve the well-being of individuals worldwide.
              </p>
        </div>
      </div>
      <Ourmission/>
      <Whychoose/>
      <Movinganime/>
      <Ourproducts/>
      <Feedback/>
    </div>
  )
}

export default Home
