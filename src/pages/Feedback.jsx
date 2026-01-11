import React, { useState } from 'react'
import profile from '../images/profile.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
const Feedback = () => {
    const [number,setnumber]=useState(0)
    const feedback=[
        {image:profile,name:"Jaya sharma",title:"happycustomer",
            review:`I have been using Rooba Swastha’s respiratory medicine for the past six months, and the results are excellent. My breathing has improved, and I haven’t faced any side effects.
             Truly high-quality and affordable products!`
        },
        {image:profile,name:"Dr. Meena Subramaniam",title:"happycustomer",
            review:`I regularly prescribe Rooba Swastha medicines to my patients. Their consistency in quality and WHO GMP-certified manufacturing standards 
            make them a reliable brand in my clinic.`
        },
        {image:profile,name:"Karthika S",title:"happycustomer",
            review:`Rooba Swastha’s diabetic care tablets have really helped me maintain stable sugar levels. I appreciate that they’re affordable and available at local 
            pharmacies without compromising on quality.`
        },
        {image:profile,name:"Arun Prakash",title:"happycustomer",
            review:`Their skincare creams and soaps are gentle and effective. My skin feels much better after switching to Rooba Swastha products. 
            I’ve already recommended them to my friends and family`
        }
    ]
  return (
    <div className='w-full flex flex-col gap-4 items-center justify-center px-4 py-4 bg-gray-800 min-h-[300px]'>
        <div className='min-w-[70%] lg:min-h-[250px] bg-white border-2 px-4 py-2 rounded-lg'>
            <div className='flex items-center gap-4'>
                <img src={feedback[number].image} alt="" className='max-w-24 max-h-24' />
                <div className=''>
                    <p className='text-red-400'>{feedback[number].name}</p>
                    <p className='text-blue-400'>{feedback[number].title}</p>
                </div>
            </div>
            <div className=''>
                <p className='font-bold'>{feedback[number].review}</p>
        </div>
        </div>
        <div className='flex gap-4 text-2xl'>
            <i className='bi bi-record-circle' style={{color:number===0?"black":"blue"}}  onClick={()=>setnumber(0)}></i>
            <i className='bi bi-record-circle' style={{color:number===1?"black":"blue"}} onClick={()=>setnumber(1)}></i>
            <i className='bi bi-record-circle' style={{color:number===2?"black":"blue"}} onClick={()=>setnumber(2)}></i>
            <i className='bi bi-record-circle'  style={{color:number===3?"black":"blue"}} onClick={()=>setnumber(3)}></i>
        </div>
    </div>
  )
}

export default Feedback
