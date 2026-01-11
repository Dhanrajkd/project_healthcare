import React, { useState } from 'react'
import logo from '../images/Logo.png'
import { NavLink, Link } from 'react-router-dom'

const Navlink = () => {
  const [sidebaropen, setsidebaropen] = useState(false)
  const [showproduct,setshowproduct]=useState(false)
  const tablets = [
    { category: "Anti-Fungal", id: 1 },
    { category: "Anti-Epileptics", id: 2 },
    { category: "Anti-hypertensive", id: 3 },
    { category: "Anti-psycotics", id: 4 },
    { category: "Anti-throdisum", id: 5 },
  ]
  const showproducts=()=>{

  }
  return (
    <nav className="bg-white shadow-md w-full px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center p-4">
          <img src={logo} alt="logo" className="w-24" />
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-yellow-400 font-josefin" : "text-navcolor font-josefin hover:text-blue-500"
            }>Home</NavLink>

            <NavLink to="/aboutus" className={({ isActive }) =>
              isActive ? "text-yellow-400 font-josefin" : "text-navcolor font-josefin hover:text-blue-500"
            }>About</NavLink>
            <div className="relative group">
              <div className="flex gap-2 items-center cursor-pointer">
                    <NavLink to="/products" className="text-navcolor font-josefin hover:text-blue-500">
                    Products
                    </NavLink>
                    <i className="bi bi-chevron-down"></i>
                </div>
              <div className="hidden group-hover:block absolute mt-1 w-[220px] bg-white shadow-md z-50 p-4">
                <ul className="space-y-2">
                  <li className="relative group">
                    <div className="flex justify-between items-center">
                      <span>Tablets</span>
                      <i className="bi bi-chevron-right"></i>
                    </div>
                    <ul className="hidden group-hover:block absolute right-[-150px] top-0 w-[180px] bg-white shadow-md">
                      {tablets.map(item => (
                        <li key={item.id} className="p-2 hover:bg-gray-100">
                          <Link to={`/productdetails/${item.category}`}>
                            {item.category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link to="/allproducts">Products image</Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/career" className="hover:text-blue-500">
                      Career
            </Link>
             <Link to="/contactus" className="hover:text-blue-500">
                      Contact Us
            </Link>
          </div>
          <button onClick={() => setsidebaropen(true)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {sidebaropen && (
        <>
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 p-4">
            <div className="flex justify-between items-center mb-4">
              <img src={logo} alt="logo" className="w-24" />
              <button onClick={() => setsidebaropen(false)}>✕</button>
            </div>
            <div className="flex flex-col space-y-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/aboutus">About</NavLink>
              <div className='w-full'>
                  <div className='w-full'>
                      <div className='flex gap-2'>
                        <NavLink to="/products" onClick={() => setshowproduct((prev)=>!prev)}>Tablets</NavLink>
                        <i className='bi bi-chevron-right'></i>
                      </div>
                     <ul className={`w-full ${showproduct ? "block" :"hidden"} mt-2`}>
                        {tablets.map((item)=>(
                          <li key={item.id} className='mt-2'><NavLink to={`/productdetails/${item.category}`}>{item.category}</NavLink></li>
                        ))}
                     </ul>
                  </div>
              </div>
              <NavLink to="/career" >Career</NavLink>
              <NavLink to="/contactus" >Contact</NavLink>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-black opacity-30 z-40"
          />
        </>
      )}
    </nav>
  )
}

export default Navlink
