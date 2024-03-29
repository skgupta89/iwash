import React from 'react'


const ServiceCard = () => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Image on the left side */}
          <div className="md:w-1/3">
            <img src="https://via.placeholder.com/150" alt="Service Image" className="object-cover h-full w-full" />
          </div>
          {/* Service details on the right side */}
          <div className="md:w-2/3 p-4">
            {/* Title */}
            <h2 className="text-xl font-bold mb-2">Service Title</h2>
            {/* Service details in bullet points */}
            <ul className="list-disc list-inside">
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
              {/* Add more bullet points as needed */}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;
  