import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import desktop from "./images/bg-sidebar-desktop.svg";
import mobile from "./images/bg-sidebar-mobile.svg";
import "./imageDesktop.css";

const ImageDesktop = () => {
  const location = useLocation();
  const [activeStep, setActiveStep] = useState('/');

  useEffect(() => {
    setActiveStep(location.pathname);
  }, [location]);
    return (
        <div className='relative image'>
            <img src={desktop} alt="desktopImage" className='md:block hidden'/>
            <img src={mobile} alt="mobileImage" className='md:hidden w-screen absolute'/>
            <div className="absolute top-0 p-2 m-2 md:mt-5 pt-5 flex md:justify-center md:flex-col md:w-auto w-full justify-around">
                <div className=" flex flex-row mb-2">
                    <div className={`border-[1px] mr-2 text-center flex justify-center items-center font-bold border-lightGray rounded-full  w-10 h-10 text-lightGray ${activeStep === '/' ? 'active' : ''}`}>
                        1
                    </div>
                    <div className="info ml-2">
                        <p className="text-coolGray uppercase">step 1 </p>
                        <p className="font-bold uppercase text-white">your info</p>
                    </div>
                </div>
                <div className=" flex flex-row mb-2">
                <div className={`border-[1px] mr-2 text-center flex justify-center items-center font-bold border-lightGray rounded-full w-10 h-10 text-lightGray ${activeStep === '/second' ? 'active' : ''}`}>                        2
                    </div>
                    <div className="info ml-2">
                        <p className="text-coolGray uppercase">step 2 </p>
                        <p className="font-bold uppercase text-white">select plan</p>
                    </div>
                </div>
                <div className=" flex flex-row mb-2">
                <div className={`border-[1px] mr-2 text-center flex justify-center items-center font-bold border-lightGray rounded-full  w-10 h-10 text-lightGray ${activeStep === '/third' ? 'active' : ''}`}>                        3
                    </div>
                    <div className="info ml-2">
                        <p className="text-coolGray uppercase">step 3 </p>
                        <p className="font-bold uppercase text-white">add-ons</p>
                    </div>
                </div>
                <div className=" flex flex-row mb-2">
                <div className={`border-[1px] mr-2 text-center flex justify-center items-center font-bold border-lightGray rounded-full  w-10 h-10 text-lightGray ${(activeStep === '/forth' || activeStep === '/thanks') ? 'active' : ''}`}>                        4
                    </div>
                    <div className="info ml-2">
                        <p className="text-coolGray uppercase">step 4 </p>
                        <p className="font-bold uppercase text-white">summary</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageDesktop;
