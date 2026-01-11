import { useContext,useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../Context/Context'
import Items from './Items'
const Readmore = () => {
    const {pro_list}=useContext(products)
      const [fproducts,setfproducts]=useState([])
      const [idproduct,setidproduct]=useState([])
    const {category}=useParams()
    const {id}=useParams()
    console.log(id)
    useEffect(()=>{
        if(!pro_list || pro_list.length===0) return
         const filtered_products=pro_list.filter((item)=>{
        return item.category===category
        })
        const product = filtered_products.filter(
            (item) => item._id.toString() === id
        );
        console.log(filtered_products)
        console.log(product)
        setidproduct(product)
        setfproducts(filtered_products)
    },[category,pro_list])
    const product=idproduct[0]
  return (
    <div className='w-full '>
       <div className='w-full  bg-gray-600 h-[100px] gap-2 flex flex-col items-center justify-center'>
            <h1 className='text-3xl'>Product List</h1>
            <div className='flex gap-2'>
                <Link to={'/'} className='text-yellow-500'>Home</Link>
                <p>Product-Details</p>
            </div>
      </div>
      <div className='w-full min-h-[500px] flex justify-center border gap-8 items-center'>
        {idproduct.map((item)=>{
            const imageurl=item.image.replace("http://localhost:4000","https://healthcare-project-backend-t5mf.onrender.com")
            return (
                <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-8 py-2' key={item.id}>
                     <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] md:w-[400px]   border'>
                      <img src={imageurl} alt="" key={item.id} className='w-full h-full'/>
                    </div>
                    <div className='w-[300px] min-h-[300px] lg:w-[500px] lg:h-[400px] md:w-[400px]  border flex flex-col items-center justify-center gap-4'>
                        <h1 className='w-full  text-xl sm:text-2xl md:text-3xl lg:text-3xl text-yellow-400 text-center'>{product.name}</h1>
                          <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl'><span className='text-red-400  text-xl sm:text-2xl md:text-3xl lg:text-4xl'>composition: </span>{product.composition}</p>
                          <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl'>Price:{product.price}</p>
                          <button className='p-3 bg-blue-400 rounded-lg text-white'>Enquiry Now</button>
                          <div className="flex gap-2 items-center">
                            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Share:</h1>
                              <a href="info@roobaswastha.com"><i className='bi bi-linkedin text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-red-400'></i></a>
                              <a href="info@roobaswastha.com"><i className='bi bi-whatsapp text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-red-400'></i></a>
                              <a href="info@roobaswastha.com"><i className='bi bi-instagram text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-red-400'></i></a>
                              <a href="info@roobaswastha.com"><i className='bi bi-facebook text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-red-400'></i></a>
                          </div>
                    </div>
                </div>
            )
        })}  
      </div>
      <div className='w-full p-4 bg-gray-400 flex items-center justify-center'>
            <h1 className='text-4xl text-white'>Realated products</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-3 w-full h-auto py-6 gap-4 place-items-center'>
            {fproducts.filter((item)=>item._id && item._id.toString()!==id)
                .map((item)=>{
                    const imageurl=item.image.replace("http://localhost:4000","https://healthcare-project-backend-t5mf.onrender.com")
                    return (
                        <Items image={imageurl} name={item.name}  id={item._id} category={item.category}  key={item._id} />
                    )
                })
            }
            
      </div>
    </div>
  )
}

export default Readmore
