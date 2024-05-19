/* eslint-disable react/no-unescaped-entities */
import bg from "../assets/images/more/3.png";
import one from "../assets/images/icons/1.png";
import two from "../assets/images/icons/2.png";
import three from "../assets/images/icons/3.png";
import four from "../assets/images/icons/4.png";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" w-[90%] flex flex-col justify-end items-end text-right text-white">
          <div className="w-[50%]">
            <h1 className="mb-5 text-5xl font-bold font-rancho">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 font-raleway">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#E3B577] text-[#331A15] hover:border-4 hover:border-yellow-900">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#ECEAE3] w-full">
        <div className=" grid grid-cols-2 lg:grid-cols-4 p-4">
          <div className="flex flex-col justify-center items-center gap-4 w-auto my-5 ">
            <img src={one} alt="coffee" />
            <h2 className="font-rancho text-[##331A15] text-2xl text-center">
              Awesome Aroma
            </h2>
            <p className="text-base text-[#331A15] font-raleway text-center">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 w-auto my-5">
            <img src={two} alt="coffee" />
            <h2 className="font-rancho text-[##331A15] text-2xl text-center">
              High Quality
            </h2>
            <p className="text-base text-[#331A15] font-raleway text-center">
              We served the coffee to you maintaining the best quality
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 w-auto my-5">
            <img src={three} alt="coffee" />
            <h2 className="font-rancho text-[##331A15] text-2xl text-center">
              Pure Grades
            </h2>
            <p className="text-base text-[#331A15] font-raleway text-center">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 w-auto my-5">
            <img src={four} alt="coffee" />
            <h2 className="font-rancho text-[##331A15] text-2xl text-center">
              Proper Roasting
            </h2>
            <p className="text-base text-[#331A15] font-raleway text-center">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
