import React from 'react'

const Card = ({ title, img, para }) => {
    return (
      <div className="card mt-4 p-4 w-[45%] md:w-[250px] h-[250px] flex flex-col justify-center items-center border md:justify-center md:items-center md:[100%] sm:flex-col hover:shadow-xl cursor-pointer">
        <div className="card-image flex justify-center items-center">
          <img className="cardImg" src={img} alt="service" />
        </div>
        <h4 className="font-bold text-lg py-2">{title}</h4>
        <p className="text-flex">{para}</p>
      </div>
    );
  };

export default Card