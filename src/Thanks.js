import React from 'react';
import  thanks  from "./images/icon-thank-you.svg";

const Thanks = () => {
    return (
<div className="my-10 mx-5 lg:mx-20 flex flex-grow">
    <div className="min-w-full relative items-center flex flex-col justify-center">
        <img src={thanks} alt="right" />
        <p className="text-4xl text-marineBlue font-bold my-10 mb-5">Thank you!</p>
        <p className="text-coolGray lg:w-[600px] text-center">Thanks for comfirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
</div>
    );
};

export default Thanks;
