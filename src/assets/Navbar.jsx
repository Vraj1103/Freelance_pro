import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-black text-white h-16 text-[16px] pt-3 '>
      <div className='heading ml-8'>
        <h1 className='mt-1 font-semibold text-[20px]'>S+S Technotrade</h1>        
      </div>
        <div className='buttons mr-8 space-x-4'>
            <button className='btn bg-[#ff5055] w-[70px] h-[35px] rounded-md pb-1'>Home</button>
            <button className='btn bg-[#ff5055] w-[70px] h-[35px] rounded-md pb-1'>About</button>
            <button className='btn bg-[#ff5055] w-[80px] h-[35px] rounded-md pb-1'>Products</button>
            <button className='btn bg-[#ff5055] w-[70px] h-[35px] rounded-md pb-1'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar
