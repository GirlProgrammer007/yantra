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
    console.log(location)
    return (
        <div className='md:w-full md:h-[70px] md:border-2 md:border-black md:bg-[#EFE8DF]  md:flex  md:text-black-400 lg:w-full lg:h-[70px]  lg:bg-[#EFE8DF] lg:flex lg:fixed lg:z-10 lg:top-0'>
            <GiMoebiusTriangle className='md:ml-[20px] md:mt-[20px] md:text-[20px] lg:m-[30px] lg:mt-[22px]  lg:text-[25px]  lg:text-white' />
            <h1 className='md:ml-[5px] md:mt-[15px] md:text-[20px]  lg:text-[30px] lg:font-bold lg:mt-[10px] lg:ml-[-25px]  lg:text-white'>YANTRA</h1>
            <ul className='md:flex md:ml-[40px] lg:ml-[290px] lg:text-white lg:flex lg:mt-[22px]'>
                {/* <FaBars onClick={toggleModal} className='text-white mr-[50px] mt-[18px] md:hidden lg:hidden ' /> */}
                <li className='lg:pl-[30px] md:ml-[15px] md:mt-[20px]'>
                    <Link to="/">Home</Link>
                    {location === "/" ? <hr className='  lg:border-1 lg:border-white lg:mt-[8px]' /> : ""}
                </li>  <li className='lg:pl-[30px] md:ml-[15px] md:mt-[20px]'>
                    <Link to="/about">About</Link>
                    {location === "/about" ? <hr className=' lg:border-1 lg:border-white lg:mt-[8px]' /> : ""}
                </li>  <li className='lg:pl-[30px] md:ml-[15px] md:mt-[20px]'>
                    <Link to="/menu">Menu</Link>
                    {location === "/menu" ? <hr className=' lg:border-1 lg:border-white lg:mt-[8px]' /> : ""}
                </li>
                <li className='lg:pl-[30px] md:ml-[15px] md:mt-[20px]'>
                    <Link to="/press">Press</Link>
                    {location === "/press" ? <hr className=' lg:border-1 lg:border-white lg:mt-[8px]' /> : ""}
                </li>
                <li className='lg:pl-[30px] md:ml-[15px] md:mt-[20px]'>
                    <Link to="/reservations">Reservations</Link>
                    {location === "/reservations" ? <hr className=' lg:border-1 lg:border-white lg:mt-[8px]' /> : ""}
                </li>
                <li className='lg:pl-[30px] md:ml-[15px] md:mt-[20px]'>
                    <Link to="/trunk">The Grand Trunk</Link>
                    {location === "/trunk" ? <hr className=' lg:border-1 lg:border-white lg:mt-[8px]' /> : ""}
                </li>
                <li className='lg:pl-[30px] md:ml-[15px]  md:mt-[20px]'>
                    <Link to="/vaucher">e-Vauchers</Link>
                    {location === "/vaucher" ? <hr className=' lg:border-1 lg:border-white lg:mt-[8px]' /> : ""}
                </li>
                <li className='lg:pl-[30px]  md:ml-[15px]  md:mt-[20px]'>
                    <Link to="/contact">Contact Us</Link>
                    {location === "/contact" ? <hr className=' lg:border-1 lg:border-white lg:mt-[8px]' /> : ""}
                </li>
            </ul>
        </div>
        //     {
        //     modal && (
        //         <div className='md:hidden lg:hidden w-[399px] h-[260px] bg-[#34AD54]'>
        //             <ul className=' w-full h-[260px] pt-[60px] '>
        //                 <li className=' w-full h-[50px] pl-[10px]  pt-[10px] bg-[#FF9933] text-[white]  '>
        //                     <a href="#">Home</a>
        //                 </li>
        //                 <li className=' pl-[10px]  pt-[10px] text-[white]'>
        //                     <a href="#">About</a>
        //                 </li>
        //                 <li className=' pl-[10px]  pt-[10px] text-[white]'>
        //                     <a href="#">Services</a>
        //                 </li>
        //                 <li className=' pl-[10px]  pt-[10px] text-[white]'>
        //                     <a href="#">Product</a>
        //                 </li>

        //                 <li className=' pl-[10px]  pt-[10px] text-[white]'>
        //                     <a href="#">Contact</a>
        //                 </li>
        //             </ul>

        //         </div>

        //     )
        // }
    )
}
export default Navbar