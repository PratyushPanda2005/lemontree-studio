'use client'
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project size and complexity, but most websites take 4–8 weeks from start to finish. We’ll give you a detailed timeline upfront, so you’ll always know what’s happening and when to expect delivery.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing varies based on features, complexity, and timeline. After a quick consultation, we'll provide a detailed proposal tailored to your needs.",
  },
  {
    question: "What does a full branding package include?",
    answer:
      "Yes! We offer ongoing support, maintenance, and updates to ensure your site continues to perform optimally.",
  },
  {
    question: "What if I don’t like the designs?",
    answer:
      "Yes! We offer ongoing support, maintenance, and updates to ensure your site continues to perform optimally.",
  },
  {
    question: "How long does it take to create a brand identity?",
    answer:
      "We get it—trust is earned. That’s why we prioritize clear communication, regular updates, and involving you in every key decision. You’ll always know exactly where your project stands. Delivering a website you’re proud of isn’t just our goal—it’s how we grow too.",
  },
  {
    question: "What if I already have a logo? Can you work with it?",
    answer:
      "Absolutely! If you love your current logo but want to refresh or expand your branding, we can build around it. Whether it’s updating colors, creating additional assets, designing marketing materials, or building you a website, we’ll ensure everything stays consistent and true to your identity.",
  },
];

const FAQ = () => {
  useGSAP(() => {
    gsap.from("#faq", {
      scale: 1.5,
      scrollTrigger: {
        trigger: "#faq",
        scrub: true,
      },
    });
    gsap.utils.toArray(".cards").forEach((card) => {
      gsap.from(card as HTMLElement, {
        x: -100,
        duration: 1.3,
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: "top bottom",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          scrub: true
        },
      });
    });
})
  return (
    <section className="w-full min-h-screen py-[200px] max-lg:py-[70px] max-md:py-[60px] max-sm:py-[80px] bg-[#fcf952] flex justify-center items-center flex-col z-[1] relative overflow-x-hidden">
      <div className="w-[1200px] max-w-full max-lg:w-[90%] max-sm:w-[95%] flex flex-col gap-[64px] max-sm:gap-[32px] items-center">
        <h1 id="faq" className="font-montserrat text-[7vw] max-lg:text-[10vw] font-black leading-none relative -left-1/2 translate-x-[50%]">
          FAQ
        </h1>
        <dl className="w-full flex flex-col gap-[32px] max-sm:gap-[24px]">
          {faqData.map((item, index) => (
            <div key={index} className="border-b-2 pb-[32px] cards">
              <dt className="text-[40px] max-md:text-[32px] max-sm:text-[24px] font-montserrat font-bold pb-[32px]">
                {item.question}
              </dt>
              <dd className="text-black font-montserrat font-medium leading-[140%] text-[24px] max-sm:text-[18px]">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
