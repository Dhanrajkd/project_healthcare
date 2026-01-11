import React from 'react'

const Contactus = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center lg:flex-row lg:items-center sm:flex-col sm:items-center gap-8 py-4'>
      <div className='flex w-[350px] flex-col gap-2 lg:w-[400px]'>
            <div className='flex w-full h-[150px] items-center pl-[50px] gap-5 shadow'>
                <div className=''><i className='bi bi-telephone-fill text-[50px] lg:text-[80px] text-orange-400 gap-2'></i></div>
                    <div className='address-bar flex flex-col gap-2'>
                        <h1 className='font-josefin font-bold'>Contact Us:</h1>
                        <p className='font-josefin font-bold'>+91 755 932 6348</p>
                        <p className='font-josefin font-bold'>+91 755 932 7448</p>
                        <p className='font-josefin font-bold'>+91 755 932 5748</p>
                    </div>
            </div>
            <div className='flex w-full h-[150px] items-center pl-[50px] gap-5 shadow'>
                <div className=''><i className='bi bi-envelope-fill text-[80px] text-orange-400 gap-2'></i></div>
                    <div className='address-bar flex flex-col gap-2'>
                        <h1 className='font-josefin font-bold'>Email:</h1>
                        <p className='font-josefin font-bold'>info@Roobaswastha.com</p>
                    </div>
            </div>
            <div className='flex w-full h-[200px] lg:h-[180px] items-center pl-[50px] gap-5 shadow'>
                <div className=''><i className='bi bi-geo-alt-fill text-[80px] text-orange-400 gap-2'></i></div>
                    <div className='address-bar flex flex-col gap-2'>
                        <h1 className='font-josefin font-bold'>Address:</h1>
                        <p className='font-josefin font-bold'>Rooba swastha pharmaceutical Private limited D.90. 9-415/G,yerraballi,
                            rajampet,Annamayya Dt Andrapradesh-516 115.Contact:90003 31339
                        </p>
                    </div>
            </div>
      </div>
      <div className='flex flex-col gap-5 w-[350px] lg:w-[500px] '>
            <h1 className='font-josefin text-3xl  text-orange-400'>Any question</h1>
                <div className='flex gap-2 '>
                    <input type="text" placeholder='Name' className='w-1/2 p-4 bg-gray-400 outline-none placeholder-white' />
                    <input type="text" placeholder='Phone Number' className='w-1/2 p-4 bg-gray-400 outline-none placeholder-white'/>
                </div>
                <div className='w-full'>
                    <select name="" id="" placeholder="Select state" className='w-full p-3 outline'>
                        <option value="">Select State</option>
                    </select>
                </div>
                <div className='w-full'>
                    <input type="text"  placeholder='Email' className='w-full p-3 outline' />
                </div>
                <textarea name="" id="" placeholder='Write message' className='w-full h-[50px] outline'>

                </textarea>
                <button className='w-full bg-yellow-400 rounded-[30px] lg:rounded-[30px] lg:p-4 text-white text-2xl'>Sent Message</button>
      </div>
    </div>
  )
}
export default Contactus
