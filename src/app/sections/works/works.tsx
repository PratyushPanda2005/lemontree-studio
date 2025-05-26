"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "../../../../public/images/lemontree-design-agency-studio-muchiz-card-img-49bb8625-900.webp";
import ProjectImage2 from "../../../../public/images/lemontree-design-agency-smol-card-img-68902a15-900.webp";
import ProjectImage3 from "../../../../public/images/lemontree-design-agency-connect-water-bottle-1-transparent-68ca5e2e-900.webp";
import ProjectImage4 from "../../../../public/images/lemontree-design-agency-studio-hyperpay-card-img-1-5723fba1-900.webp";
import ProjectImage5 from "../../../../public/images/lemontree-design-agency-studio-harout-fazlian-card-img-1-f3abc4d5-900.webp";
import ProjectImage6 from "../../../../public/images/lemontree-design-agency-cormune-card-img-2-ecf6f484-900.webp";
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useGSAP(() => {
    gsap.from("#head", {
      scale: 1.5,
      scrollTrigger: {
        trigger: "#head",
        scrub: true,
      },
    });
    gsap.set('.image',{translateY: 40})
    
    gsap.utils.toArray<HTMLImageElement>(".image").forEach((img) => {
        gsap.to(img, {
          y: -100, 
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom", 
            end: "bottom top",
            scrub: true,
          },
        });
      });
  }, {});

  const ProjectContent = [
    {
      id: 1,
      title: "Munchiz",
      subtitle: "Canada",
      imageSrc: ProjectImage,
      content: "Exotic snacks wholesale distributor",
      bgcolor: "#c5aaee",
    },
    {
      id: 2,
      title: "Smol",
      subtitle: "Dubai",
      imageSrc: ProjectImage2,
      content: "Sweet & savory bite-sized dishes",
      bgcolor: "#333333",
    },
    {
      id: 3,
      title: "Connect",
      subtitle: "Dubai",
      imageSrc: ProjectImage3,
      content: "Dubai pilates boutique studio",
      bgcolor: "#c9654f",
    },
    {
      id: 4,
      title: "Hyperpay",
      subtitle: "Saudi Arabia",
      imageSrc: ProjectImage4,
      content: "online payment solutions",
      bgcolor: "#ff4e00",
    },
    {
      id: 5,
      title: "Harout Fazlian",
      subtitle: "Dubai",
      imageSrc: ProjectImage5,
      content: "music orchestra conductor",
      bgcolor: "#b6a163",
    },
    {
      id: 6,
      title: "Cormune",
      subtitle: "Bulgaria",
      imageSrc: ProjectImage6,
      content: "unique bulgarian probiotics",
      bgcolor: "#232323",
    },
  ];
  return (
    <section className="w-[100%] min-h-screen py-[200px] max-lg:py-[70px] max-md:py-[60px] max-sm:py-[80px] relative top-0 left-0 z-[1] bg-black flex justify-center items-center flex-col bg-center bg-cover overflow-hidden">
      <div className="max-w-[100%] h-[100%] w-[90%] max-sm:w-[95%] relative top-0 left-0 flex flex-col gap-[64px] max-sm:gap-[32px] justify-center items-center z-[1]">
        <h1
          id="head"
          className="text-white font-montserrat text-[10vw] max-lg:text-[12vw] max-md:text-[12vw] max-sm:text-[12vw] font-black leading-[100%] tracking-normal"
        >
          Our Work
        </h1>
        <div className="flex flex-col justify-start items-center gap-20">
          <div className="grid z-[1] grid-cols-3 max-lg:grid-cols-1 max-md:grid-cols-1 w-[100%] gap-8">
            {ProjectContent.map((project) => (
              <Link
                href="/"
                key={project.id}
                className="inline-block cursor-pointer col-span-1 row-span-1"
              >
                <div
                  className={`rounded-[48px] max-md:rounded-[32px] p-10 max-sm:p-6 relative z-[1] h-[100%] flex flex-col justify-between`}
                  style={{ backgroundColor: project.bgcolor }}
                >
                  <div className="flex w-full justify-between items-center">
                    <h1 className="font-montserrat font-bold text-[32px] text-white w-1/2 leading-tight">
                      {project.title}
                    </h1>
                    <h3 className="font-montserrat font-bold text-[24px] text-white">
                      {project.subtitle}
                    </h3>
                  </div>
                  <Image
                    src={project.imageSrc}
                    alt="Project Image"
                    className="object-contain image"
                  />
                  <div className="flex flex-col gap-6">
                    <h1 className="max-md:text-[32px] max-xl:text-[32px] max-2xl:text-[40px] text-[48px] font-bold font-montserrat text-white leading-[100%] uppercase w-fit">
                      {project.content}
                    </h1>
                    <button className="group flex justify-center items-center px-[32px] py-[14px] max-sm:w-[100%] bg-black border-2 border-solid transition-all duration-300 ease-linear rounded-[48px] max-md:rounded-[32px] w-fit text-[#fbf950] font-montserrat font-bold cursor-pointer text-[20px] hover:bg-[#fbf950] hover:border-black hover:text-black">
                      See Project
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div>
            <button className="bg-white text-black font-montserrat rounded-[48px] max-md:rounded-[32px] px-[32px] py-[14px] transition-all duration-300 ease-linear border-2 border-black border-solid text-[24px] max-sm:text-[18px] font-bold cursor-pointer hover:bg-[#fbf950]">
              Request a quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
