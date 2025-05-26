"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.from("#services", {
      scale: 1.5,
      scrollTrigger: {
        trigger: "#services",
        scrub: true,
      },
    });
  },{})
  return (
    <section className="bg-[#101010] w-[100%] min-h-screen py-[200px] max-lg:py-[70px] max-md:py-[60px] max-sm:py-[80px] relative top-0 left-0 z-[1] flex justify-center items-center flex-col bg-center bg-cover overflow-hidden">
      <div className="max-w-[100%] h-[100%] w-[90%] max-sm:w-[95%] relative top-0 left-0 flex flex-col gap-[64px] max-sm:gap-[32px] justify-center items-center z-[1]">
        <h1
          id="services"
          className="text-white font-montserrat text-[10vw] max-lg:text-[12vw] max-md:text-[12vw] max-sm:text-[12vw] font-black leading-[100%] tracking-normal"
        >
          What we do
        </h1>
        <div className="grid grid-cols-3 max-lg:grid-cols-1  gap-6 w-[90%] max-sm:w-[95%]">
          <div className="col-span-1 row-span-4 max-md:row-span-1 bg-[#fbf950] rounded-[48px] max-md:p-6 p-10 flex flex-col gap-6 h-fit">
            <h1 className="text-[56px] max-lg:text-[48px] max-sm:text-[32px] font-bold font-montserrat leading-none">
              Design & Branding
            </h1>
            <p className="text-black font-montserrat font-normal text-[20px] max-sm:text-[16px]">
              From logo creation to full-scale branding strategies, we design
              visuals that captivate and make your brand impossible to ignore!
            </p>
            <div className="w-full my-24 max-md:my-4">
              <DotLottieReact
                src="https://lottie.host/f1899756-1dc6-496f-a81c-a0104d02d048/UgBJ4PguFT.lottie"
                loop
                autoplay
              />
            </div>
            <h2 className="font-bold text-[28px] max-sm:text-[24px] leading-none font-montserrat">
              Ready to see the impact of great design?
            </h2>
            <button className="w-full flex justify-center rounded-[48px] bg-black px-[24px] py-[14px] text-[#fbf950] font-bold text-[24px] max-sm:text-[18px] font-montserrat cursor-pointer">
              Explore our Designs
            </button>
          </div>

          <div className="col-span-2 row-span-3 max-lg:col-span-1 max-md:row-span-1 bg-[#fbf950] rounded-[48px] max-md:p-6 p-10 flex gap-6 max-md:flex-col-reverse ">
            <div className="flex flex-col justify-between w-3/4 max-md:w-full">
              <div>
                <h1 className="text-[56px] max-lg:text-[48px]  max-sm:text-[32px] font-bold font-montserrat leading-none">
                  Web Development
                </h1>
                <p className="text-black font-montserrat font-normal text-[20px] max-sm:text-[16px] mt-[16px]">
                  From logo creation to full-scale branding strategies, we
                  design visuals that captivate and make your brand impossible
                  to ignore!
                </p>
              </div>

              <button className="w-fit max-sm:w-full flex justify-center rounded-[48px] bg-black px-[32px] py-[14px] text-[#fbf950] font-bold text-[24px] max-sm:text-[18px] font-montserrat cursor-pointer max-md:mt-4">
                Explore web services
              </button>
            </div>
            <div className="w-full h-fit">
              <DotLottieReact
                src="https://lottie.host/f1899756-1dc6-496f-a81c-a0104d02d048/UgBJ4PguFT.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          <div className="col-span-1 row-span-1 bg-[#fbf950] rounded-[48px] max-md:p-6 p-10 flex gap-6">
            <div className="flex flex-col justify-between">
              <h1 className="text-[32px] font-bold font-montserrat leading-none">
                UI/UX
              </h1>
              <p className="text-black font-montserrat font-normal text-[20px] max-sm:text-[16px]">
                From Figma prototypes to design systems and micro interactions,
                we got you covered
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 bg-[#fbf950] rounded-[48px] max-md:p-6 p-10 flex gap-6">
            <div className="flex flex-col justify-between">
              <h1 className="text-[32px] font-bold font-montserrat leading-none">
                SEO
              </h1>
              <p className="text-black font-montserrat font-normal text-[20px] max-sm:text-[16px]">
                We base our SEO strategy on keyword research and competitive
                analysis to give you the edge over the competiton
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
