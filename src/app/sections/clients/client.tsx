"use client";
import Image from "next/image";
import React from "react";
import ProfilePhoto from "../../../../public/images/profilepic.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const ClientPage = () => {
  useGSAP(() => {
    gsap.from("#client", {
      scale: 1.5,
      scrollTrigger: {
        trigger: "#client",
        scrub: true,
      },
    });
  });
  return (
    <section className="w-[100%] min-h-screen py-[200px] max-lg:py-[70px] max-md:py-[60px] max-sm:py-[80px] relative top-0 left-0 z-[1] bg-black flex justify-center items-center flex-col bg-center bg-cover">
      <div className="max-w-[100%] h-[100%] w-[1200px] max-lg:w-[90%] max-sm:w-[95%] relative top-0 left-0 flex flex-col gap-[64px] max-sm:gap-[32px] justify-center items-center z-[1]">
        <div className="w-full max-sm:overflow-hidden">
          <h1
            id="client"
            className="font-montserrat text-[5vw] max-lg:text-[10vw] font-black leading-[100%] tracking-normal text-center text-white"
          >
            What our client say
          </h1>
        </div>
        <div className="w-[95%] max-lg:w-[90%] max-sm:w-[100%] relative flex flex-col gap-10 ">
          <div className="rounded-[48px] max-md:rounded-[40px] h-[400px] max-lg:h-[450px] max-md:h-[500px] max-sm:h-[530px] sticky top-[100px] max-lg:top-[90px] left-0 bg-[#fbf950] z-[1] p-10 py-20 max-sm:p-6">
            <div className="flex flex-col justify-between h-full">
              <p className="text-[24px] max-md:text-[16px] font-montserrat leading-[120%] font-medium">
                What I value most about working with Lemontree is the
                flexibility and creative flow the team offers at any time, day
                or night. They provide easy and efficient solutions for every
                task. An incredible sense of justice and alignment of values is
                also at the top of the list. It’s truly a joy and a pleasure.
              </p>
              <div className="flex max-sm:flex-col justify-between items-center max-sm:jus">
                <div className="flex gap-6 max-sm:flex-col max-sm:w-full">
                  <Image
                    src={ProfilePhoto}
                    alt="Profile Photo"
                    className="w-[80px] h-auto grayscale rounded-2xl"
                  />
                  <h1 className="flex justify-center items-center max-sm:justify-start font-montserrat font-bold text-[24px] max-sm:text-[20px]">
                    Pratyush Panda
                  </h1>
                </div>
                <h1 className="font-montserrat font-normal text-[32px] max-sm:text-[16px] max-sm:justify-start max-sm:w-full">
                  Dubai
                </h1>
              </div>
            </div>
          </div>
          <div className="rounded-[48px] max-md:rounded-[40px] h-[400px] max-lg:h-[450px] max-md:h-[500px] max-sm:h-[530px] sticky top-[100px] max-lg:top-[90px] left-0 bg-[#fbf950] z-[1] p-10 py-20 max-sm:p-6">
            <div className="flex flex-col justify-between h-full">
              <p className="text-[24px] max-md:text-[16px] font-montserrat leading-[120%] font-medium">
                What I value most about working with Lemontree is the
                flexibility and creative flow the team offers at any time, day
                or night. They provide easy and efficient solutions for every
                task. An incredible sense of justice and alignment of values is
                also at the top of the list. It’s truly a joy and a pleasure.
              </p>
              <div className="flex max-sm:flex-col justify-between items-center max-sm:jus">
                <div className="flex gap-6 max-sm:flex-col max-sm:w-full">
                  <Image
                    src={ProfilePhoto}
                    alt="Profile Photo"
                    className="w-[80px] h-auto grayscale rounded-2xl"
                  />
                  <h1 className="flex justify-center items-center max-sm:justify-start font-montserrat font-bold text-[24px] max-sm:text-[20px]">
                    Pratyush Panda
                  </h1>
                </div>
                <h1 className="font-montserrat font-normal text-[32px] max-sm:text-[16px] max-sm:justify-start max-sm:w-full">
                  Dubai
                </h1>
              </div>
            </div>
          </div>
          <div className="rounded-[48px] max-md:rounded-[40px] h-[400px] max-lg:h-[450px] max-md:h-[500px] max-sm:h-[530px] sticky top-[100px] max-lg:top-[90px] left-0 bg-[#fbf950] z-[1] p-10 py-20 max-sm:p-6">
            <div className="flex flex-col justify-between h-full">
              <p className="text-[24px] max-md:text-[16px] font-montserrat leading-[120%] font-medium">
                What I value most about working with Lemontree is the
                flexibility and creative flow the team offers at any time, day
                or night. They provide easy and efficient solutions for every
                task. An incredible sense of justice and alignment of values is
                also at the top of the list. It’s truly a joy and a pleasure.
              </p>
              <div className="flex max-sm:flex-col justify-between items-center max-sm:jus">
                <div className="flex gap-6 max-sm:flex-col max-sm:w-full">
                  <Image
                    src={ProfilePhoto}
                    alt="Profile Photo"
                    className="w-[80px] h-auto grayscale rounded-2xl"
                  />
                  <h1 className="flex justify-center items-center max-sm:justify-start font-montserrat font-bold text-[24px] max-sm:text-[20px]">
                    Pratyush Panda
                  </h1>
                </div>
                <h1 className="font-montserrat font-normal text-[32px] max-sm:text-[16px] max-sm:justify-start max-sm:w-full">
                  Dubai
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="rounded-[48px] max-md:rounded-[32px] bg-white px-[32px] py-[14px] text-[24px] max-sm:text-[20px] text-black hover:bg-[#fbf950] font-montserrat font-bold cursor-pointer border-2 border-black  hover:text-black transition-all duration-300">
            Request a quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientPage;
