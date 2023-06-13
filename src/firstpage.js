import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from './UserContext';


const Firstpage = () => {
    const { storeUserData } = useContext(UserContext);

    const handleSubmit = (event) => {
      event.preventDefault();
      // Gather form data
      const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
      };
      // Save the form data to the user context
      console.log(formData);
      storeUserData(formData);
    };
    return (
<div className="mt-32 md:mt-10 md:mb-10 md:mx-5 lg:mx-20 flex flex-grow justify-center mx-5">
      <div className="min-w-full relative h-full md:bg-none bg-white rounded-md md:p-0 p-5">
            <p className="text-marineBlue font-bold text-2xl">Personal info</p>
            <p className="text-coolGray mb-5">Please provide your name, email address and phone number.</p>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor="name" className='text-marineBlue my-1'>Name</label>
                <input name='name' type="text" placeholder='e.g.Stephen King' className='w-full border-lightGray border-[1px] rounded-md p-2 mb-3 text-marineBlue placeholder:font-normal font-semibold focus:border-marineBlue
                hover:border-marineBlue focus:invalid:border-pink-500 focus:outline-none'/>
                <label htmlFor="email" className='text-marineBlue my-1'>Email Address</label>
                <input type="email" name='email' placeholder='e.g.stephenking@lorem.com' className='w-full border-lightGray border-[1px] rounded-md p-2 mb-3 text-marineBlue hover:border-marineBlue placeholder:font-normal font-semibold focus:border-marineBlue focus:invalid:border-pink-500 focus:outline-none'/>
                <label htmlFor="phone" className='text-marineBlue my-1'>Phone Number</label>
                <input type="tel" name='phone' placeholder='e.g.+1234567890' className='w-full border-lightGray border-[1px] rounded-md hover:border-marineBlue p-2 text-marineBlue placeholder:font-normal font-semibold focus:border-marineBlue focus:invalid:border-pink-500 focus:outline-none md:mb-0 mb-10' required/>
                <Link to="/second">
                <button type="submit" className='text-white bg-marineBlue px-4 p-2 rounded-md w-fit absolute bottom-0 right-0 hover:bg-purplishBlue '>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
    );
};

export default Firstpage;
