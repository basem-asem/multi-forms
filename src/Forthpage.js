import React from 'react';
import { Link } from 'react-router-dom';

const Forthpage = ({ selectedPath })  => {
  return (
    <div className="mt-32 md:mt-10 md:mb-10 md:mx-5 lg:mx-20 flex flex-grow justify-center mx-5">
      <div className="min-w-full relative h-full md:bg-none bg-white rounded-md md:p-0 p-5">
        <p className="text-marineBlue font-bold text-2xl">Finishing up</p>
        <p className="text-coolGray mb-5">Double-check everything looks OK before comfirming.</p>
        <div className='p-3 bg-magnolia rounded-md my-5'>
            <div className="flex justify-between my-3 items-center">
                <div>
                {selectedPath ? (
                  <p className='text-marineBlue text-lg font-semibold'>Arcade (Monthly)</p>
                ) : (
                  <p className='text-marineBlue text-lg font-semibold'>Arcade (yearly)</p>
                )}
                <Link to="/second" className='underline text-coolGray'>Change</Link>
                </div>
                {selectedPath ? (
                  <p className="text-lg text-marineBlue font-semibold">$9/mo</p>
                ) : (
                  <p className="text-lg text-marineBlue font-semibold">$90/yr</p>
                )}
            </div>
            <div className="flex justify-between py-3 my-3 border-t-[1px] border-coolGray">
                <div>
                <p className='text-coolGray'>Online service</p>
                </div>
                {selectedPath ? (
                  <p className="text-marineBlue">+$1/mo</p>
                ) : (
                  <p className="text-marineBlue">+$10/yr</p>
                )}
            </div>
            <div className="flex justify-between">
                <div>
                <p className='text-coolGray'>Large storage</p>
                </div>
                {selectedPath ? (
                  <p className="text-marineBlue">+$2/mo</p>
                ) : (
                  <p className="text-marineBlue">+$20/yr</p>
                )}
            </div>
            
        </div>
        <div className="flex justify-between items-center mx-5 mb-20">
        <p className="text-coolGray">Total (per month) </p>
        {selectedPath ? (
            <p className="font-semibold text-lg text-purplishBlue">+$12/mo</p>
          ) : (
            <p className="font-semibold text-lg text-purplishBlue">+$120/yr</p>
          )}
        </div>
        <Link to="/thanks">
          <button
            type="submit"
            className="text-white bg-purplishBlue px-4 p-2 rounded-md w-fit absolute bottom-0 right-0 hover:bg-pastelBlue"
          >
            Comfirm
          </button>
        </Link>
        <Link to="/third">
          <button
            type="submit"
            className="text-coolGray px-4 p-2 rounded-md w-fit absolute bottom-0 left-0 hover:text-marineBlue"
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Forthpage;
