import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const products=createContext()
const Context = ({children}) => {
    const [pro_list,setpro_list]=useState([])
    useEffect(()=>{
        const fetchdata=async()=>{
            let responce=await fetch("https://healthcare-project-backend-t5mf.onrender.com/getproducts")
            let data=await responce.json()
            console.log(data)
            setpro_list(data.data)
            showlist(data)
        }
        fetchdata()
    },[])
  return (
    <products.Provider value={{pro_list}}>
       {children}
    </products.Provider>
  )
}

export default Context
