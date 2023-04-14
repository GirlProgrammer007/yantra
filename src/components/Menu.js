import React from 'react'

function Menu() {
    return (
        <div className='w-full h-full bg-[#EFE8DF]'>
            <h1 className=' text-[#554E4E] pl-[200px] pt-[150px] font-bold text-[30px]'>Menu</h1>
            <p className='text-[#554E4E] pl-[220px] pr-[180px] text-[14px] pt-[20px]'>Blending a culinary philosophy that pays tribute to India’s rich legacy, culinary historian Pritha Sen and Executive Chef Pinaki Ray serve up a menu featuring niche ingredients sourced across South East Asia. A poetic and irreverent experience awaits...</p>
            <div className="flex text-[12px]">
                <div className="bg-[#C1AB95] w-[150px] h-[50px] text-center mt-[15px] ml-[280px]">
                    <p className='text-[#555565] pt-[14px]'>Executive Lunch Set</p>
                </div>
                <div className=" w-[150px] h-[50px] text-center mt-[15px] hover:bg-[#e9d2ba]">
                    <p className='text-[#555565] pt-[14px]'>Small Plates</p>
                </div>
                <div className=" w-[150px] h-[50px] text-center mt-[15px] hover:bg-[#e9d2ba]">
                    <p className='text-[#555565] pt-[14px]'>Slides/Rice</p>
                </div>
                <div className=" w-[150px] h-[50px] text-center mt-[15px] hover:bg-[#e9d2ba]">
                    <p className='text-[#555565] pt-[14px]'>Desserts</p>
                </div>
                <div className=" w-[150px] h-[50px] text-center mt-[15px] hover:bg-[#e9d2ba]">
                    <p className='text-[#555565] pt-[14px]'>Learge Plates</p>
                </div>
            </div>
            <div className="ml-[60px] mt-[30px]  text-center">
                <p>Executive Lunch Set</p>
                <p className='pt-[10px]'>(Non-Vegetarian)</p>
                <p className='pt-[10px]'>Chaat Banarasi</p>
                <p className='pt-[20px]'>Nizam's Kathi Kebab</p>
                <p className='pt-[10px]'>Taka Luchi Aloo Dum</p>
                <p className='pt-[10px]'>Royalla Vepudu</p>
                <p className='pt-[20px]'>Ema Datshi</p>
                <p className='pt-[10px]'>Sutta Gosht</p>
                <p className=''>or</p>
                <p className=''>Maithali Maach</p>
                <p className=''>or</p>
                <p className=''>Chelo Kebab</p>
                <p className='pt-[10px]'>Bread and Accompaniments</p>
                <p className='pt-[15px]'>Masala Tea</p>
            </div>
            <hr className='border-2 border-black mr-[520px] ml-[580px] mt-[20px]' />
            <div className="text-center ml-[45px] pt-[20px]">
                <p className='ml-[10px]'>(Vegetarian)</p>
                <p className='mt-[10px] ml-[10px]'>Chaat Banarasi</p>
                <p className='mt-[10px] ml-[10px]'>Paneer Tikka</p>
                <p className='mt-[10px] ml-[10px]'>Taka Luchi Aloo Dum</p>
                <p className='mt-[10px] ml-[10px]'>Shammi Kebab</p>
                <p className='mt-[10px] ml-[10px]'>Shammi Kebab</p>
                <p className='mt-[10px] ml-[10px]'>Nimona</p>
                <p className='mt-[10px] ml-[10px]'>or</p>
                <p className='mt-[10px] ml-[10px]'>Haleem Reshmi</p>
                <p className='mt-[10px] ml-[10px]'>or</p>
                <p className='mt-[10px] ml-[10px]'>Nawabi Tarkari Biryani </p>
                <p className='mt-[10px] ml-[10px]'>Bread and Accompaniments</p>
                <p className='mt-[10px] ml-[10px]'>Masala Tea</p>
                <p className='mt-[50px] ml-[10px] font-bold'>$75++ per pax</p>
            </div>
            <h5 className='text-[#554E4E] ml-[390px] mt-[50px] font-bold'>All prices are subject service charge and prevailing Goods and Services Tax.</h5>
            <p className='text-[#554E4E] ml-[350px] text-center mr-[250px] text-[12px]'>Menu and price is subject to change without prior notice. Menu may change based on seasonality and availability of ingredients. If you have a food allergy, please notify your server.</p>

        </div >
    )
}

export default Menu