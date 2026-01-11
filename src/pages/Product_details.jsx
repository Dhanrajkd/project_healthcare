import React from 'react'
import { href, Link, useNavigate, useParams } from 'react-router-dom'
import { products } from '../Context/Context'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Product_details = () => {
    const {pro_list} =useContext(products)
    const [fproducts,setfproducts]=useState([])
    const {category}=useParams()
    const navigate=useNavigate()
   console.log(category)
   useEffect(()=>{
        if(!pro_list && pro_list.length===0)return 

        const filtered_products=pro_list.filter((item)=>{
        return item.category===category
        })
        console.log(filtered_products)
        setfproducts(filtered_products)

   },[category,pro_list])
   const sendcategory=(category,id)=>{
        navigate(`/readmore/${category}/${id}`)
   }
  return (
    <div className='w-full min-h-[200px]'>
      <div className='w-full bg-gray-600 h-[100px] gap-2 flex flex-col items-center justify-center'>
            <h1 className='text-3xl'>Product List</h1>
            <div className='flex gap-2'>
                <Link to={'/'} className='text-yellow-500'>Home</Link>
                <p>Product list</p>
            </div>
      </div>
      <div className='w-full flex justify-center items-center h-[500px] py-4'>
        <table className="w-[800px] border border-gray-300">
            <thead>
                <tr className="border-b bg-gray-100">
                    <th className="text-gray-600 text-2xl p-4 text-center">Product</th>
                    <th className="text-gray-600 text-2xl p-4 text-center">Composition</th>
                    <th className="text-gray-600 text-2xl p-4 text-center">Details</th>
                </tr>
            </thead>
            <tbody>
                {fproducts.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="text-center font-bold p-4">{item.name}</td>
                    <td className="text-center font-bold p-4">{item.composition}</td>
                    <td className="text-center font-bold p-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-black"onClick={(e)=>sendcategory(item.category,item._id)}>
                        Read more
                        </button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Product_details
