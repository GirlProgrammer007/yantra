import React, { useState } from 'react'
import { GiMoebiusTriangle } from "react-icons/gi"
import { Link, useLocation, } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
function Navbar() {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    const location = useLocation().pathname
    console.log(modal)
    return (
        <div className='w-full h-[70px] bg-[#EFE8DF] justify-between  items-center md:w-full md:h-[70px]  flex lg:w-full lg:h-[70px] md:bg-[#EFE8DF]  lg:bg-[#EFE8DF]  lg:fixed lg:z-10 lg:top-0 px-6' >
            <div className="flex">
                <GiMoebiusTriangle className=' text-[25px]   lg:text-black' />
                <h1 className='  lg:text-black'>YANTRA</h1>
            </div>

            <ul className=' hidden md:flex lg:ml-[290px] md:ml-[130px]  lg:flex  lg:text-black'>
                <li className='md:mt-[20px] md:ml-[15px] lg:pl-[15px]'>
                    <Link to="/">Home</Link>
                    {location === "/" ? <hr className=' md:mt-[8px]  lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                </li>
                <li className=' md:mt-[20px] md:ml-[15px] lg:pl-[15px] '>
                    <Link to="/about">About</Link>
                    {location === "/about" ? <hr className=' md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                </li>
                <li className=' md:mt-[20px] md:ml-[15px] lg:pl-[15px]'>
                    <Link to="/menu">Menu</Link>
                    {location === "/menu" ? <hr className=' md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                </li>
                <li className='md:mt-[20px] md:ml-[15px]lg:pl-[15px]'>
                    <Link to="/press">Press</Link>
                    {location === "/press" ? <hr className=' md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                </li>
                <li className=' md:mt-[20px] md:ml-[15px] lg:pl-[15px]'>
                    <Link to="/reservations">Reservations</Link>
                    {location === "/reservations" ? <hr className=' md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                </li>
                <li className=' md:mt-[20px] md:ml-[15px] lg:pl-[15px]'>
                    <Link to="/trunk">The Grand Trunk</Link>
                    {location === "/trunk" ? <hr className=' md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                </li>
                <li className=' md:mt-[20px] md:ml-[15px] lg:pl-[15px]'>
                    <Link to="/vaucher">e-Vauchers</Link>
                    {location === "/vaucher" ? <hr className=' md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                </li>
                <li className=' md:mt-[20px] md:ml-[15px] lg:pl-[15px]'>
                    <Link to="/contact">Contact Us</Link>
                    {location === "/contact" ? <hr className=' md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                </li>
            </ul>



            <div className={`${modal ? "block" : "hidden"} absolute z-10 top-[70px] right-[0px]  md:hidden lg:hidden w-full h-[300px] bg-[#EFE8DF]`}>


                <ul className='bg-[#EFE8DF] text-right pr-[20px] '>
                    <li className='pt-[10px]'>
                        <Link to="/">Home</Link>
                        {location === "/" ? <hr className='md:border-1 md:border-black md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                    </li>
                    <li className='pt-[10px]'>
                        <Link to="/about">About</Link>
                        {location === "/about" ? <hr className='md:border-1 md:border-black md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                    </li>
                    <li className='pt-[10px]'>
                        <Link to="/menu">Menu</Link>
                        {location === "/menu" ? <hr className='md:border-1 md:border-black md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                    </li>
                    <li className='pt-[10px]'>
                        <Link to="/press">Press</Link>
                        {location === "/press" ? <hr className='md:border-1 md:border-black md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                    </li>
                    <li className='pt-[10px] '>
                        <Link to="/reservations">Reservations</Link>
                        {location === "/reservations" ? <hr className='md:border-1 md:border-black md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                    </li>
                    <li className='pt-[10px] '>
                        <Link to="/trunk">The Grand Trunk</Link>
                        {location === "/trunk" ? <hr className='md:border-1 md:border-black md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                    </li>
                    <li className='pt-[10px] '>
                        <Link to="/vaucher">e-Vauchers</Link>
                        {location === "/vaucher" ? <hr className='md:border-1 md:border-black md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                    </li>
                    <li className='pt-[10px] '>
                        <Link to="/contact">Contact Us</Link>
                        {location === "/contact" ? <hr className='md:border-1 md:border-black md:mt-[8px] lg:border-1 lg:border-black lg:mt-[8px]' /> : ""}
                    </li>
                </ul>
            </div>
            <FaBars onClick={toggleModal} className=' text-[20px] text-black md:hidden lg:hidden  ' />
        </div>

    )
}
export default Navbar