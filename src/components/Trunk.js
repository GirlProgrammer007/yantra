import React from 'react'
import { GiChest } from "react-icons/gi"

function Trunk() {
    return (
        <div className='flex flex-col md:flex md:flex-col lg:flex lg:flex-col'>
            <div className="w-full h-[120px] mt-[-1px] pt-[30px] fixed bg-[#EFE8DF] flex   md:w-full md:h-[120px] md:mt-[-1px] md:pt-[30px] md:fixed md:bg-[#EFE8DF] md:flex  lg:w-full lg:h-[120px] lg:mt-[70px] lg:pt-[30px] lg:fixed lg:bg-[#EFE8DF] lg:flex">
                <h1 className='text-[20px] font-bold underline text-center ml-[80px]    md:text-[50px] md:font-bold md:underline md:text-center md:ml-[370px]  lg:text-[50px] lg:font-bold lg:underline lg:text-center lg:ml-[420px]'>THE GRAND TRUNK</h1>
                {/* <input type="text" placeholder='What are you looking for?' className='w-[250px] h-[40px]  pl-[10px] bg-[#EFE8DF] text-black border-2 border-black ml-[120px] ' />
                <GiChest className="text-[35px] mt-[-10px] ml-[10px] hover:text-[30px]" /> */}
            </div>

        </div>
    )
}

export default Trunk