import React from "react";

const Home = () => {
  return (
    <>
    <div className="homepage flex bg-[#ff5055]">
      <div className="Left w-[50%] text-white font-semibold text-[60px] m-auto ml-16 p-0 ">
        <h5>We ensure your all Telecommunication need comes to an end.</h5>
        <div className="border-b-[5px] pt-8"></div>
      </div>

      <div className="Right w-[50%] h-full">
        <img src="./img/man.png" alt="home_img" />
      </div>
    </div>

    <div className="about_us ">
     <div className="text-[#ff5055] text-center text-[20px] font-semibold mt-36 w-[50%] m-auto">
     <h5>We are an iso certified company with a proven track record of supplying quality telecommunication since 1999.</h5>
     <div className="border-b-4 pt-12 border-[#ff5055]"></div>
     </div>

     <div className="text-[#303030] text-center text-[36px] font-semibold mt-12  w-[50%] m-auto">
     <h5>This text block gives a brief overview of your company. Share your   philosophy, vision, or mission here.</h5>
     <div className="border-b-4 pt-12 mb-36 border-[#ff5055]"></div>
     </div>
    </div>
    </>
    
  );
};

export default Home;
