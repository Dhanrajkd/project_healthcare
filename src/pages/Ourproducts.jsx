import React from 'react'
import { products } from '../Context/Context'
import { useContext } from 'react'
import Items from './Items'
const Ourproducts = () => {
    const{pro_list}=useContext(products)
    console.log(pro_list)
  return (
    <div className='w-full px-4 overflow-hidden lg:max-h-[400px] md:flex md:h-[400px]  sm:h-auto relative'>
      <div className='lg:absolute lg:left-0 lg:top-0 lg:h-full lg:max-w-[40%]  bg-white shadow-bd px-4 z-50 '>
            <h1 className='text-2xl mt-2'>---Our products</h1>
            <p className='text-ourpara mt-2'>
                We have a diverse portfolio of medicine consisting of Tablets, Capsules, Metered Dose Inhalers, Liquid, Creams, Soap, powders etc.…
                All our products are manufactured in facilities with accreditation like US FDA, EU GMP, WHO GMP, CGMP, ISO 9000 Maintaining high standards of quality.<br/>
                Our Products are classified into different therapeutic categories like Respiratory Ailments, Anti-Infectives, Anti-Diabetic, CVS, Neuropsychiatric, Orthopedics, Nephrology and so on and has been categorized into prescription medicines.
            </p>
            <button className='mt-2 bg-yellow-600 p-2 font-bold rounded'>view all products</button>
        </div>
        <div className='w-full flex items-center min-h-[400px] overflow-hidden'>
            <div className='flex max-w-[70%] items-center gap-4 h-full animate-moveslides whitespace-nowrap '>
                {pro_list.map((item,ind)=>{
                const imageurl=item.image.replace("http://localhost:4000","https://healthcare-project-backend-t5mf.onrender.com")
                return (
                     <Items image={imageurl} name={item.name} id={item._id} category={item.category} key={ind} />
                )
                })}
                 {pro_list.map((item,ind)=>{
                const imageurl=item.image.replace("http://localhost:4000","https://healthcare-project-backend-t5mf.onrender.com")
                return (
                     <Items image={imageurl} name={item.name}  key={"dup"+ind} />
                )
                })}
            </div>
        </div>
    </div>
  )
}

export default Ourproducts
