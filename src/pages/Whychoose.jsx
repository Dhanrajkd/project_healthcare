import React from 'react'
import who_icon from '../images/ic_who_white.webp'
import iso_icon from '../images/ic_certified_white.webp'
import package_icon from '../images/ic_packaging_white.webp'
const Whychoose = () => {
  return (
    <div className='w-full min-h-[400px] bg-blue-600 mt-2 px-6'>
      <h1 className='text-4xl p-4 text-yellow-700 text-left'>Why Choose Rooba Swastha Pharmaceutical</h1>
      <p className='text-2xl text-white text-bold text-left p-2'>At Rooba swastha Healthcare Pvt Ltd, we focus on business-to-business trade of pharmaceuticals products. We are committed to achieve long term business relationships based on our high standards of Products, service and competitive terms.</p>
      <div className='grid lg:grid-cols-3 w-full gap-1 place-items-center py-5'>
          <div className="max-w-[300px] min-h-[380px] border p-2">
                <img src={who_icon} alt="" />
                <h1 className='text-3xl text-yellow p-2'>Excellence</h1>
                <p className='text-white text-bold'>
                    Our journey to excellence never ends. Clients can be assured that when they choose Vridam Healthcare, they’re choosing a pharmaceutical company who will work enthusiastic to achieve excellence in quality, safety and efficiency, for the better health 
                    of our clients as well as the entire health care industry
                </p>
            </div>
            <div className="max-w-[300px] min-h-[380px] border p-2">
                <img src={iso_icon} alt="" />
                <h1 className='text-3xl text-yellow p-2'>Quality</h1>
                <p className='text-white text-bold'>
                    We make extra effort in ensuring that our products manufactured as per the WHO-GMP, C-GMP and GLP practices. Vridam Healthcare Pvt Ltd Quality Policy is working through a comprehensive Quality Management System.
                </p>
            </div>
            <div className="max-w-[300px] min-h-[380px] border p-2">
                <img src={package_icon} alt="" />
                <h1 className='text-3xl text-yellow p-2'>Integrity</h1>
                <p className='text-white text-bold'>
                    Vridam Healthcare Pvt Ltd employees make decisions, both big and small, with a focus on what is ethically right. Above all, we are committed to the greater good- for our company, 
                    our clients as well as the health care indust.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Whychoose
