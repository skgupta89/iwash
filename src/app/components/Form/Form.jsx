import React from "react";

const Form = () => {
  return (
    <div className="max-w-md mx-auto px-2 text-center fixed py-6">
      <img
        src="https://media.istockphoto.com/id/149333196/vector/car-mechanic.jpg?s=612x612&w=0&k=20&c=p8MycJhqhnWOFEn32VnbAnAkQTFsOPvOs6e7cq3aEHM="
        alt="Car Mechanic"
        className="mx-auto mb-4"
        style={{ height: "200px", width: "auto" }}
      />

      <h2 className="text-black text-2xl font-bold mb-4">Connect with Us</h2>

      <form>
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />

        <input
          type="text"
          placeholder="Vehicle Model"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />

        <button className="w-full bg-red-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition duration-300">
          Get Quote
        </button>
      </form>
    </div>
  );
};

export default Form;
