import React from 'react'
import { useNavigate } from 'react-router-dom'

const Items = ({image,name,id,category}) => {
  const navigate=useNavigate()
  const handlepage=(id,category)=>{
    console.log(category)
    navigate(`/readmore/${category}/${id}`)
  }
  return (
    <div className='relative w-[300px] lg:w-[350px] shadow-lg group'>
        <img src={image} alt="" className='w-full h-[250px]' />
        <p className='text-2xl text-yellow-600 text-center'>{name}</p>
        <div className='hidden absolute top-0 left-0 w-full h-full bg-black/60 group-hover:flex  items-center justify-center z-50'l>
            <button onClick={(e)=>handlepage(id,category)} className='px-4 py-2 bg-yellow-500 text-black font-semibold rounded'>Readmore</button>
        </div>
    </div>
  )
}

export default Items
