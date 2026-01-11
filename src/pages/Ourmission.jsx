import React from 'react'
import mission from '../images/mission-1.png'
import vision from '../images/vision.png'
import quality from '../images/quality.png'
import value from '../images/vision.png'
const Ourmission = () => {
    const ourmission=[
        {image:mission,title:`We are committed to enriching lives by making affordable, 
          high-quality generic medicinesaccessible to everyone.By partnering with others, we ensure that cost is never a barrier to
          healthcare and that our products contribute to the well-being of patients around the world.`,
          head:"Mission"
        },
        {image:vision,title:`Our vision is to lead the future of generic medicines by setting new standards for
        affordability, quality, and accessibility. We envision a world where everyone has access to
        safe and effective medications, empowering healthier communities and a brighter tomorrow.`,
        head:"vision"
      },
        {image:quality,title:`We’re applying passion and commitment to improve health. Our culture is about not only what we do, but how we do it Our values express what we believe in, they represent the best in us, and they guide us in all we do. 
        Our mission and values were uncovered by our people. 
        and they represent those qualities that make us unique.`,
        head:"Quality"
      },
        {image:value,title:`Vridam Healthcare Pvt Ltd Quality Policy is working through a comprehensive Quality Management System. Our performance is monitored and regularly reviewed to ensure our standards of conduct meet our high expectations of quality for our patients, 
        customers, and stakeholders.`,
        head:"value"
      }
      ]
  return (
    <div className='w-full min-h-[600px] bg-ourcolor px-4'>
        <h1 className='text-compname text-4xl text-center p-4'>Our Mission, Vision & Values</h1>
        <p className='text-navcolor text-2xl text-center p-2'>Expanding The PCD Pharma Franchise Business in India</p>
        <div className='grid justify-center lg:grid-cols-4 md:grid-cols-2 w-full gap-4 mb-5'>
            {ourmission.map((item,ind)=>(
                <div className=' max-w-[250px] mb-5' key={ind}>
                    <div className='p-2 text-white text-3xl text-center'>{item.head}</div>
                    <img src={item.image} alt="" className=' w-full object-cover' />
                    <p className='font-bold p-2 bg-yellow-400 h-[300px]'>{item.title}</p>
                </div>
           ))}
        </div>
    </div>
  )
}

export default Ourmission
