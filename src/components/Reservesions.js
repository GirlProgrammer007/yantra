import React from 'react'

function Reservesions() {
    return (
        <div className='w-full h-full bg-[#EFE8DF] flex pt-[100px]'>
            <div className="w-[200px] h-[500px] bordre-2 border-black bg-[#EFE8DF]  ml-[150px] ">
                <h1 className='font-bold text-[#392a11]'>RESERVATIONS</h1>
                <i className='pt-[30px]'>Lunch:</i>
                <p className=' text-[13px]'>12:00pm to 3:00pm</p>
                <p className=' text-[13px]'>(2:30pm last order)</p>
                <i className='pt-[30px] '>Dinner:</i>
                <p className=' text-[13px]'>6:30pm to 11:00pm</p>
                <p className=' text-[13px]'>(9:45pm last order)</p>
                <p className='pt-[20px]'>Open Tuesday to Sunday,</p>
                <p className=' text-[13px]'>Closed on Mondays</p>
            </div>
            <div className="w-[800px] h-[800px]  bg-[#EFE8DF] ml-[140px]">
                <h1 className='text-[17px] text-[#392a11] font-bold'>Please Note:</h1>
                <p className=' text-[13px] pl-[12px]'>Dress code: Smart Casual. No Slippers. Management reserves the right to refuse dining.</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>We only accept guest aged 8 years old and above only.</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>Reservations are held for 15 minutes after the appointed time, after which, Yantra has full discretion to release your</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>reservation. Please contact us if you need to reschedule your booking.</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>Your reservation is only valid for the number of guests you booked for. Please amend your booking if you have</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>additional or lesser guests.</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>Seats are limited to a maximum of 120 minutes. Should you require to stay longer, please let us know in advance.</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>Approval is subject to availability of seats at the time of appointment.</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>We will try our best to accommodate your dietary restrictions but we cannot guarantee that we will meet all</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'> requirements. </p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>Price listed are not inclusive of GST and Service Charge.</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>Reservation is subject to terms and condition of use and privacy policy: terms</p>
                <h1 className='text-[16px] text-[#392a11] font-bold pt-[15px]'>Private Rooms</h1>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>Should you require a private room, please email to tim@yantra.com.sg</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>To check our private rooms, click here</p>
                <h1 className='text-[16px] text-[#392a11] font-bold pt-[15px]' >Corkage Policy</h1>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>Corkage fee of S$80++ applies for each 75cl bottle of wine and S$150++ for each 75cl bottle of spirits.</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>"One-for-One" wine corkage waiver policy: For each bottle of wine purchase from our wine list, one bottle corkage </p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>fee will be waived. Maximum of two bottles per visit.</p>
                <h1 className='text-[16px] text-[#392a11] font-bold pt-[15px]'>Cancellation Policy</h1>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>If you need to cancel your reservation, please do so at least 48 hours before your booking date.</p>
                <p className=' text-[13px] pt-[7px] pl-[12px]'>Cancellation fees per person of $50 may apply if cancellations are made less than 48 hours from the reservation</p>
                <h1 className='text-[16px] text-[#392a11] font-bold pt-[18px]'>By continuing with the reservation, You agree with the above and following terms and conditions:</h1>
                <p className='text-[13px] text-[#392a11]  pt-[15px] pl-[20px] '>Yantra may refuse entry to guest who do not follow the terms and conditons</p>
                <button className="w-[240px] h-[47px] border-2 border-black mt-[30px] hover:bg-[#d8cec2]">
                    <p className=''>I agree,Make a Reservation</p>
                </button>

            </div>

        </div>
    )
}

export default Reservesions