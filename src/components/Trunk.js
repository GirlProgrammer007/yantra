import React from 'react'
import { GiChest } from "react-icons/gi"

function Trunk() {
    return (
        <div className='flex flex-col'>
            <div className="w-full h-[120px] mt-[70px] pt-[30px] fixed bg-[#EFE8DF] flex">
                <h1 className='text-[50px] font-bold underline text-center ml-[370px]'>THE GRAND TRUNK</h1>
                <input type="text" placeholder='What are you looking for?' className='w-[250px] h-[40px]  pl-[10px] bg-[#EFE8DF] text-black border-2 border-black ml-[120px] ' />
                <GiChest className="text-[35px] mt-[-10px] ml-[10px] hover:text-[30px]" />
            </div>

        </div>
    )
}

export default Trunk