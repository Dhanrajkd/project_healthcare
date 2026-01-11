<div className='w-full min-h-[500px] flex justify-center border gap-8 items-center'>
            <div className='w-[400px] h-[400px] border'>
                {idproduct.map((item)=>{
                    const imageurl=item.image.replace("http://localhost:4000","https://healthcare-project-backend-t5mf.onrender.com")
                    return (
                        <img src={imageurl} alt="" key={item.id} className='w-full h-full'/>
                    )
                })}
            </div>
            <div className='w-[400px] h-[400px] border flex flex-col items-center justify-center gap-4'>
                 <h1 className='w-full text-3xl text-yellow-400 text-center'>{product.name}</h1>
                  <p className='font-bold'><span className='text-red-400 text-2xl'>composition: </span>{product.composition}</p>
                  <p className='font-bold'>{product.price}</p>
                  <button className='p-3 bg-blue-400 rounded-lg text-white'>Enquiry Now</button>
                  <div className="flex gap-2 items-center">
                    <h1 className='text-2xl'>Share:</h1>
                      <a href="info@roobaswastha.com"><i className='bi bi-linkedin text-2xl hover:text-red-400'></i></a>
                      <a href="info@roobaswastha.com"><i className='bi bi-whatsapp text-2xl hover:text-red-400'></i></a>
                      <a href="info@roobaswastha.com"><i className='bi bi-instagram text-2xl hover:text-red-400'></i></a>
                      <a href="info@roobaswastha.com"><i className='bi bi-facebook text-2xl hover:text-red-400'></i></a>
                  </div>
            </div>
      </div>