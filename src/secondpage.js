import React, { useState } from 'react';
import  advanced  from "./images/icon-advanced.svg";
import arcade from "./images/icon-arcade.svg";
import pro from "./images/icon-pro.svg";
import { Link } from 'react-router-dom';


function Secondpage({ setSelectedPath, selectedPath }) {
    
    const [selectedOption, setSelectedOption] = useState('arcade');    
    
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const changeAproach = () => {
    setSelectedPath(!selectedPath);
  };
    return (
<div className="mt-32 md:mt-10 md:mb-10 md:mx-5 lg:mx-20 flex flex-grow justify-center mx-5">
      <div className="min-w-full relative h-full md:bg-none bg-white rounded-md md:p-0 p-5">
        <p className="text-marineBlue font-bold text-2xl">Select your plan</p>
        <p className="text-coolGray mb-5">You have the option of monthly or yearly billing.</p>
        {/* choose plane */}
        <form>
      <div className="grid grid-cols-3 gap-4">
        <label className="cursor-pointer">
          <input
            type="radio"
            value="arcade"
            checked={selectedOption === 'arcade'}
            onChange={handleOptionChange}
            className="sr-only"
          />
          <div className={`border border-lightGray rounded-md p-4 ${selectedOption === 'arcade' ? 'border-marineBlue' : 'hover:border-marineBlue'}`}>
            <img src={arcade} alt="arcade" />
            <p className="text-marineBlue font-semibold mt-10 pt-10">Arcade</p>
            {selectedPath ? <p className="text-sm text-coolGray">$9/mo</p> : <p className="text-sm text-coolGray">$90/yr
            <span className="text-marineBlue block">2 months free</span></p>
            }
          </div>
        </label>
        
        <label className="cursor-pointer">
          <input
            type="radio"
            value="advanced"
            checked={selectedOption === 'advanced'}
            onChange={handleOptionChange}
            className="sr-only"
          />
          <div className={`border border-lightGray rounded-md p-4 ${selectedOption === 'advanced' ? 'border-marineBlue' : 'hover:border-marineBlue'}`}>
            <img src={advanced} alt="advanced" />
            <p className="text-marineBlue font-semibold mt-10 pt-10">Advanced</p>
            {selectedPath ? <p className="text-sm text-coolGray">$12/mo</p> : <p className="text-sm text-coolGray">$120/yr
            <span className="text-marineBlue block">2 months free</span></p>
            }
          </div>
        </label>
        
        <label className="cursor-pointer">
          <input
            type="radio"
            value="pro"
            checked={selectedOption === 'pro'}
            onChange={handleOptionChange}
            className="sr-only"
          />
          <div className={`border border-lightGray rounded-md p-4 ${selectedOption === 'pro' ? 'border-marineBlue' : 'hover:border-marineBlue'}`}>
            <img src={pro} alt="pro" />
            <p className="text-marineBlue font-semibold mt-10 pt-10">Pro</p>
            {selectedPath ? <p className="text-sm text-coolGray">$15/mo</p> : <p className="text-sm text-coolGray">$150/yr
            <span className="text-marineBlue block">2 months free</span></p>
            }
          </div>
        </label>
      </div>
    </form>
        {/* monthly or yearly */}
        <div className='my-10 flex justify-center bg-magnolia rounded-md p-3 md:mb-0'>
        <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="monthly" onChange={changeAproach} className="sr-only peer "/>
        <p className='text-marineBlue font-semibold peer-checked:text-coolGray '>Monthly</p>
        <div className="relative w-10 h-5 mx-4 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"></div>
        <p className='text-coolGray font-semibold peer-checked:text-marineBlue'>Yearly</p>
        </label>
        </div>
        <Link to="/third">
                <button type="submit" className='text-white bg-marineBlue px-4 p-2 rounded-md w-fit absolute bottom-0 right-0 hover:bg-purplishBlue '>Next Step</button>
                </Link>
                <Link to="/">
                <button type="submit" className='text-coolGray px-4 p-2 rounded-md w-fit absolute bottom-0 left-0 hover:text-marineBlue'>Go Back</button>
                </Link>
        </div>
    </div>
    );
};

export default Secondpage;
