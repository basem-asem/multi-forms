import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Thirdpage({ selectedPath }) {
  const [selectedOptions, setSelectedOptions] = useState({
    arcade: false,
    vff: false,
    vrv: false,
  });
  const [totalCost, setTotalCost] = useState(0);

  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [value]: checked,
    }));
  };

  const calculateTotalCost = () => {
    let cost = 0;
    if (selectedOptions.arcade) {
      cost += selectedPath ? 1 : 10;
    }
    if (selectedOptions.vff) {
      cost += selectedPath ? 2 : 20;
    }
    if (selectedOptions.vrv) {
      cost += selectedPath ? 2 : 20;
    }
    setTotalCost(cost);
  };

  // Call the calculateTotalCost function whenever selectedOptions or selectedPath changes
  useEffect(() => {
    calculateTotalCost();
  }, [selectedOptions, selectedPath]);

  return (
    <div className="mt-32 md:mt-10 md:mb-10 md:mx-5 lg:mx-20 flex flex-grow justify-center mx-5">
      <div className="min-w-full relative h-full md:bg-none bg-white rounded-md md:p-0 p-5">
        <p className="text-marineBlue font-bold text-2xl">Pick add-ons</p>
        <p className="text-coolGray mb-5">Add-ons help enhance your gaming experience.</p>
        {/* choose plane */}
        <form className='grid grid-rows-3 gap-4'>
            <label className="cursor-pointer">
              <div
                className={`flex items-center border border-lightGray rounded-md p-4 ${
                  selectedOptions.arcade ? 'border-purplishBlue bg-purplishBlue/[.05]' : 'hover:border-marineBlue'
                }`}
              >
                <input
                  type="checkbox"
                  value="arcade"
                  checked={selectedOptions.arcade}
                  onChange={handleOptionChange}
                  className="w-5 h-5"
                />
                <div className="flex flex-1 flex-col ml-5">
                  <p className="text-marineBlue font-semibold">Online service</p>
                  <p className="text-coolGray">Access to multiplayer games</p>
                </div>
                {selectedPath ? (
                  <p className="text-sm text-purplishBlue">+$1/mo</p>
                ) : (
                  <p className="text-sm text-purplishBlue">+$10/yr</p>
                )}
              </div>
            </label>
            <label className="cursor-pointer">
              <div
                className={`flex items-center border border-lightGray rounded-md p-4 ${
                  selectedOptions.vff ? 'border-purplishBlue bg-purplishBlue/[.05]' : 'hover:border-marineBlue'
                }`}
              >
                <input
                  type="checkbox"
                  value="vff"
                  checked={selectedOptions.vff}
                  onChange={handleOptionChange}
                  className="w-5 h-5"
                />
                <div className="flex flex-1 flex-col ml-5">
                  <p className="text-marineBlue font-semibold">Large storage</p>
                  <p className="text-coolGray">Extra 1TB of cloud save</p>
                </div>
                {selectedPath ? (
                  <p className="text-sm text-purplishBlue">+$2/mo</p>
                ) : (
                  <p className="text-sm text-purplishBlue">+$20/yr</p>
                )}
              </div>
            </label>
            <label className="cursor-pointer ">
              <div
                className={`flex items-center border border-lightGray rounded-md p-4  ${
                  selectedOptions.vrv ? 'border-purplishBlue bg-purplishBlue/[.05]' : 'hover:border-marineBlue'
                }`}
              >
                <input
                  type="checkbox"
                  value="vrv"
                  checked={selectedOptions.vrv}
                  onChange={handleOptionChange}
                  className="w-5 h-5"
                />
                <div className="flex flex-1 flex-col ml-5">
                  <p className="text-marineBlue font-semibold">Customizable profile</p>
                  <p className="text-coolGray">Custom theme on your profile</p>
                </div>
                {selectedPath ? (
                  <p className="text-sm text-purplishBlue">+$2/mo</p>
                ) : (
                  <p className="text-sm text-purplishBlue">+$20/yr</p>
                )}
              </div>
            </label>
        </form>
        <div className="m-20"> </div>
        <Link to="/forth">
          <button
            type="submit"
            className="text-white bg-marineBlue px-4 p-2 rounded-md w-fit absolute bottom-0 right-0 hover:bg-purplishBlue"
          >
            Next Step
          </button>
        </Link>
        <Link to="/second">
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

export default Thirdpage;
