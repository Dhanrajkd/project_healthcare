import React, { useContext, useState } from 'react'
import {products} from '../Context/Context'
import Items from './Items'

const Allproducts = () => {

    const {pro_list}=useContext(products)
  return (
    <div className='grid grid-cols-3 w-full h-aut px-6 py-6 gap-4'>
      {pro_list.map((item)=>{
        const imageurl=item.image.replace("http://localhost:4000","https://healthcare-project-backend-t5mf.onrender.com")
        return (
             <Items image={imageurl} name={item.name} id={item._id} category={item.category} key={item.id}/>
        )
      })}
    </div>
  )
}

export default Allproducts
