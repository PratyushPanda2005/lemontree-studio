"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
gsap.registerPlugin(ScrollTrigger);

const ProcessPage = () => {
    const blackLine = useRef<HTMLDivElement>(null)
    const blackLine2 = useRef<HTMLDivElement>(null)
    const blackLine3 = useRef<HTMLDivElement>(null)
    const lottieRef1 = useRef<HTMLDivElement>(null)
    const lottieRef2 = useRef<HTMLDivElement>(null)
    const lottieRef3 = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.from("#processhead", {
      scale: 1.5,
      scrollTrigger: {
        trigger: "#processhead",
        scrub: true,
      },
    });
    [blackLine, blackLine2, blackLine3].forEach((ref) => {
        gsap.to(ref.current, {
          width: "100%",
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
            start: 'top bottom'
          }
        });
      });
    [lottieRef1, lottieRef2, lottieRef3].forEach((ref) => {
        gsap.from(ref.current, {
          scale: 0.1,
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
            start: 'top bottom'
          }
        });
      });
      gsap.from('#textLeftFirst',{
        x: -100,
        scrollTrigger: {
          trigger: '#textLeftFirst',
          scrub: true,
          start: 'top bottom'
        }
      });
      gsap.from('#textRight',{
        x: 100,
        scrollTrigger: {
          trigger: '#textRight',
          scrub: true,
          start: 'top bottom'
        }
      });
      gsap.from('#textLeftSecond',{
        x: -100,
        scrollTrigger: {
          trigger: '#textLeftSecond',
          scrub: true,
          start: 'top bottom'
        }
      });
  });
  return (
    <section className="w-[100%] min-h-screen py-[200px] max-lg:py-[70px] max-md:py-[60px] max-sm:py-[80px] relative top-0 left-0 z-[1] bg-[#fbf950] flex justify-center items-center flex-col bg-center bg-cover overflow-x-hidden">
      <div className="max-w-[100%] h-[100%] w-[1200px] max-lg:w-[90%] max-sm:w-[95%] relative top-0 left-0 flex flex-col gap-[64px] max-sm:gap-[32px] justify-center items-center z-[1]">
        <h1
          id="processhead"
          className="font-montserrat text-[7vw] max-lg:text-[10vw] max-md:text-[10vw] max-sm:text-[11vw] font-black leading-[100%] tracking-normal text-center"
        >
          4 Steps to launch your project
        </h1>
        <div
          id="steps"
          className="flex flex-col justify-center items-center w-[100%] gap-[64px] max-md:gap-[48px]"
        >
          <div
            id="step1"
            className="flex flex-row max-md:flex-col-reverse justify-center items-center "
          >
            <div id="content-wrapper" className="w-1/2 max-sm:w-full flex flex-col gap-[32px] max-sm:gap-[8px]">
              <div id="textLeftFirst" className="text-right flex flex-col gap-[16px]">
                <h1 className="text-[48px] max-md:text-[40px] max-sm:text-[28px] font-montserrat font-bold leading-none">01</h1>
                <h1 className="font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] text-black leading-[100%] font-montserrat">Discovery Call & Planning</h1>
                <p className="text-right font-normal font-montserrat text-[24px]">We start by understanding your needs and goals, then create a clear plan to guide the project.</p>
              </div>
              <div className="Line rounded-[48px] max-md:rounded-[32px] h-[40px] max-lg:h-[40px] max-md:h-[30px] bg-white">
                <div className="Black Line h-full rounded-[inherit] flex justify-end">
                    <div ref={blackLine} className="bg-black w-0 h-full bg-cover rounded-[inherit] relative"></div>
                </div>
              </div>
            </div>
            <div ref={lottieRef1} className="w-1/2 max-sm:w-full">
              <DotLottieReact
                src="https://lottie.host/2f2c0365-9333-4ab6-a9b9-717c0e60cd01/3kNv3myJiJ.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          <div
            id="step2"
            className="flex flex-row-reverse max-md:flex-col-reverse justify-center items-center"
          >
            <div id="content-wrapper" className="w-1/2 max-sm:w-full flex flex-col gap-[32px] max-sm:gap-[8px]">
              <div id="textRight" className="text-right flex flex-col gap-[16px]">
                <h1 className="text-[48px] max-md:text-[40px] max-sm:text-[28px] font-montserrat font-bold leading-none text-left">02</h1>
                <h1 className="font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] text-black leading-[100%] font-montserrat text-left">Design & Execution</h1>
                <p className="font-normal font-montserrat text-[24px] text-left">We transform concepts into reality, designing your visuals with precise execution.</p>
              </div>
              <div className="Line rounded-[48px] max-md:rounded-[32px] h-[40px] max-lg:h-[40px] max-md:h-[30px] bg-white">
                <div className="Black Line h-full rounded-[inherit] flex justify-start">
                    <div ref={blackLine2} className="bg-black w-0 h-full bg-cover rounded-[inherit]"></div>
                </div>
              </div>
            </div>
            <div ref={lottieRef2} className="w-1/2 max-sm:w-full">
              <DotLottieReact
                src="https://lottie.host/2f2c0365-9333-4ab6-a9b9-717c0e60cd01/3kNv3myJiJ.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          <div
            id="step3"
            className="flex flex-row max-md:flex-col-reverse justify-center items-center "
          >
            <div id="content-wrapper" className="w-1/2 max-sm:w-full flex flex-col gap-[32px] max-sm:gap-[8px]">
              <div id="textLeftSecond" className="text-right flex flex-col gap-[16px]">
                <h1 className="text-[48px] max-md:text-[40px] max-sm:text-[28px] font-montserrat font-bold leading-none">03</h1>
                <h1 className="font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] text-black leading-[100%] font-montserrat">Feedback & Review</h1>
                <p className="text-right font-normal font-montserrat text-[24px]">We get feedback from you, and implement necessary changes.</p>
              </div>
              <div className="Line rounded-[48px] max-md:rounded-[32px] h-[40px] max-lg:h-[40px] max-md:h-[30px] bg-white">
                <div className="Black Line h-full rounded-[inherit] flex justify-end">
                    <div ref={blackLine3} className="bg-black w-0 h-full bg-cover rounded-[inherit]"></div>
                </div>
              </div>
            </div>
            <div ref={lottieRef3} className="w-1/2 max-sm:w-full">
              <DotLottieReact
                src="https://lottie.host/2f2c0365-9333-4ab6-a9b9-717c0e60cd01/3kNv3myJiJ.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
        <div>
            <button className="rounded-[48px] max-md:rounded-[32px] bg-black px-[32px] py-[14px] text-[24px] max-sm:text-[20px] text-[#fbf950] font-montserrat font-bold cursor-pointer border-2 border-black hover:bg-white hover:text-black transition-all duration-300">Request a quote</button>
        </div>
      </div>
    </section>
  );
};

export default ProcessPage;
