import { data } from "./Utils/Data";
import Card from "./components/Card/Card";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import CustomerFeedback from "./components/CustomerFeedback/CustomerFeedback";

export default function Home() {
  return (
    <main className="">
      {/* hero section */}
      <div className="hero-section">{/* <CustomSlider/> */}</div>

      {/* section 2 */}
      <div className="flex w-full">
        <div className="section-2 w-[80%] pt-[60px]">
          <div className="flex w-full h-100 py-[30px] px-[25px]">
            <div className="w-[60%] h-full p-4 ">
              <div className="title text-[#e81c2e] flex items-center">
                <hr className="w-[100px] bg-[#e81c2e] py-[0.8px] mr-3" />
                <p className="tracking-widest text-[#e81c2e] text-sm">
                  MODERN EQUIPMENT
                </p>
              </div>
              <h1 className="font-bold text-[44px] py-4 ">
                Professional washing and cleaning of your car
              </h1>
              <p className="py-3 text-justify">
                Phasellus in arcu dapibus, lobortis est in, suscipit diam.
                Vivamus faucibus faucibus eros et porttitor. Sed est nulla,
                tincidunt ac ex eget, dictum mollis tortor. Vivamus faucibus nec
                ipsum id aliquam lobortis est.
              </p>
              <h3 className="text-[#19191B] font-extrabold text-[24px] py-6">
                Call for book:{" "}
                <span className="text-[#e81c2e]">8796968389</span>
              </h3>
              <button className="p-5 w-40 text-[#FFFFFF] rounded-[15px] bg-[#e81c2e] flex justify-center items-center">
                Read more{" "}
              </button>
            </div>

            <div className="w-[40%] h-full flex justify-center items-center">
              <img
                className="max-w-full h-auto"
                src="https://www.biltema.dk/globalassets/category-list-area/car-care/car-washing/biltvatt-header-image-mobile-375x500.jpg"
                alt="washer"
              />
            </div>
          </div>

          {/* feature */}
          <div className="feature-wrapper flex justify-between flex-wrap px-[25px] py-[100px]">
            {data.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                img={item.image}
                para={item.para}
              />
            ))}
          </div>

          {/* premium washing  */}
          {/* <div className="premium-section">
            <div className="w-[100%] h-[450px] py-[80px] bg-[#19191B] ">
              <div className="premium-head-section flex text-center flex-col bg-transparent">
                <p className="tracking-widest bg-transparent text-[#e81c2e] text-sm">
                  WHAT WE DO
                </p>
                <h4 className="bg-transparent py-4 text-[#FFFFFF] text-[45px] font-bold md:text-[55px]">
                  {" "}
                  Premium Washing Services
                </h4>
                <p className="bg-transparent text-sm text-[#FFFFFF]">
                  experience top-notch service with our state-of-the-art
                  workshop equipped with the latest technology
                </p>
              </div>
              <div className="premium-body-section bg-[#19191B] flex justify-between flex-wrap px-6 py-6">
                <div className="services bg-transparent m-4">
                  <div className="max-w-xs  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    
                    <div className="relative">
                      <img
                        src="https://www.biltema.dk/globalassets/category-list-area/car-care/car-washing/biltvatt-header-image-mobile-375x500.jpg"
                        alt="Card"
                        className="w-full h-auto"
                      />

                      <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 flex justify-center items-center opacity-0 hover:opacity-100 bg-transparent">
                        <div className=" text-justify px-2 bg-transparent">
                          <h3 className="text-xl text-white font-bold mb-2 bg-transparent">
                            Service includes
                          </h3>
                          <ul className="bg-transparent">
                            <li className="bg-transparent text-white">
                              -Set-up appointment and our fully
                              equipped service van comes to your door step
                            </li>
                            <li className="bg-transparent text-white">
                              -Oil change, Spot
                              checking of vehicles, Cleaning we do on spot
                            </li>
                            <li className="bg-transparent text-white">-Help you service your car hassle free</li>
                          
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h2 className="text-xl text-[#e81c2e] font-bold mb-2">
                        Complete Car Servicing At Your Doorstep
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="services bg-transparent m-4">
                  <div className="max-w-xs  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                      <img
                        src="https://www.biltema.dk/globalassets/category-list-area/car-care/car-washing/biltvatt-header-image-mobile-375x500.jpg"
                        alt="Card"
                        className="w-full h-auto"
                      />

                      <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 flex justify-center items-center opacity-0 hover:opacity-100 bg-transparent">
                        <div className=" text-justify px-2 bg-transparent">
                          <h3 className="text-xl text-white font-bold mb-2 bg-transparent">
                            Service includes
                          </h3>
                          <ul className="bg-transparent">
                            <li className="bg-transparent text-white">
                              -Set-up appointment and our fully
                              equipped service van comes to your door step
                            </li>
                            <li className="bg-transparent text-white">
                              -Oil change, Spot
                              checking of vehicles, Cleaning we do on spot
                            </li>
                            <li className="bg-transparent text-white">-Help you service your car hassle free</li>
                          
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h2 className="text-xl text-[#e81c2e] font-bold mb-2">
                        Complete Car Servicing At Your Doorstep
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="services bg-transparent m-4">
                  <div className="max-w-xs  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                      <img
                        src="https://www.biltema.dk/globalassets/category-list-area/car-care/car-washing/biltvatt-header-image-mobile-375x500.jpg"
                        alt="Card"
                        className="w-full h-auto"
                      />

                      <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 flex justify-center items-center opacity-0 hover:opacity-100 bg-transparent">
                        <div className=" text-justify px-2 bg-transparent">
                          <h3 className="text-xl text-white font-bold mb-2 bg-transparent">
                            Service includes
                          </h3>
                          <ul className="bg-transparent">
                            <li className="bg-transparent text-white">
                              -Set-up appointment and our fully
                              equipped service van comes to your door step
                            </li>
                            <li className="bg-transparent text-white">
                              -Oil change, Spot
                              checking of vehicles, Cleaning we do on spot
                            </li>
                            <li className="bg-transparent text-white">-Help you service your car hassle free</li>
                          
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h2 className="text-xl text-[#e81c2e] font-bold mb-2">
                        Complete Car Servicing At Your Doorstep
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="services bg-transparent m-4">
                  <div className="max-w-xs  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                      <img
                        src="https://www.biltema.dk/globalassets/category-list-area/car-care/car-washing/biltvatt-header-image-mobile-375x500.jpg"
                        alt="Card"
                        className="w-full h-auto"
                      />

                      <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 flex justify-center items-center opacity-0 hover:opacity-100 bg-transparent">
                        <div className=" text-justify px-2 bg-transparent">
                          <h3 className="text-xl text-white font-bold mb-2 bg-transparent">
                            Service includes
                          </h3>
                          <ul className="bg-transparent">
                            <li className="bg-transparent text-white">
                              -Set-up appointment and our fully
                              equipped service van comes to your door step
                            </li>
                            <li className="bg-transparent text-white">
                              -Oil change, Spot
                              checking of vehicles, Cleaning we do on spot
                            </li>
                            <li className="bg-transparent text-white">-Help you service your car hassle free</li>
                          
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h2 className="text-xl text-[#e81c2e] font-bold mb-2">
                        Complete Car Servicing At Your Doorstep
                      </h2>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div> */}

          {/* Served all brand */}
          <div className="w-full px-[25px] ">
          <div className="heading-title flex py-2">
              <div className="red-box p-2 bg-black w-5"></div>
              <h5 className="text-[#e81c2e] font-bold text-3xl pl-2 ">
                Brands we Served
              </h5>
            </div>
          <div className=" flex justify-start w-full h-[550px] py-2">

            <img
              className="w-full h-full object-contain"
              src="https://images.ctfassets.net/2sam6k0rncvg/NqdULBunZY6hmupJnpRJC/d5692087382b9d2baecdc6f16626ce12/top-car-brands-in-india.png?fm=webp&w=3840&q=75"
            />
          </div>
          </div>

          {/* why choose iwash */}
          <div className="w-full px-[25px] py-[100px] ">
            <div className="heading-title flex py-2">
              <div className="red-box p-2 bg-black w-5"></div>
              <h5 className="text-[#e81c2e] font-bold text-3xl pl-2">
                Why Choose Iwash
              </h5>
            </div>
            <div className="p-2">
              <h6 className="text-[#e81c2e] p-3 font-bold text-2xl">
                Car services offered
              </h6>
              <p className="text-xl">
                Iwash offer a wide variety of best car services like Periodic
                Services, Denting & Painting, Batteries Replacement, Car Spa &
                Cleaning, AC Service & Repair, Tyre Replacement & Wheelcare, Car
                Detailing, Custom Services, Windshields & Glass Replacement,
                Lights & Fitments, Car & Bike Accessories and much more.
              </p>
            </div>
            <div className="p-2">
              <h6 className="text-[#e81c2e] p-3 font-bold text-2xl">
                Why Choose IWash for your Car Servicing?
              </h6>
              <ul className="list-disc text-xl px-3">
                <li className="py-1">Servicing every vehicle brand out there</li>
                <li className="py-1">
                  Servicing every vehicle brand out there and We have got you
                  covered! Gativan services 40+ Car brands and 20+ bike brands.
                </li>
                <li className="py-1">Schedule free pick-up and drop</li>
                <li className="py-1">Quick Service uing modern equipment </li>
                <li className="py-1">100% Genuine Spare parts </li>
                <li className="py-1">100% Genuine Spare parts </li>
              </ul>
            </div>
          </div>

          {/* customer feedback */}
          <CustomerFeedback />

          {/* footer */}
          <Footer />
        </div>

        <div className="w-[20%] relative">
          <Form />
        </div>
      </div>
    </main>
  );
}
