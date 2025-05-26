import Image from "next/image";
import HyperPay from "../../../../public/svgs/lemontree-design-agency-studio-hyperpay-logo-blk-dade48d8.svg"
const Hero = () => {
  return (
    <section className="min-h-screen w-[100%] bg-[#fbf950] top-0 left-0 flex pt-[100px] max-lg:pt-[70px] max-md:pt-[144px] max-sm:pt-[50px] pb-[100px] max-lg:pb-[70px] max-md:pb-[70px] max-sm:pb-[0px] flex-col max-sm:justify-center items-center max-sm:items-center bg-cover bg-top justify-center sticky max-md:static bg-fixed bg-primary opacity-[1] z-[auto]">
      <div className="flex justify-center items-center flex-col max-w-[100%] w-[90%] max-sm:w-[95%] pt-[100px] gap-12 max-sm:gap-4 max-lg:gap-6">
        <div className="flex flex-col justify-start items-center bg-center bg-cover relative left-0 gap-6 max-sm:gap-4">
          <h1 className="font-montserrat text-[40px] max-md:text-[32px] max-sm:text-[24px] font-normal leading-[130%] max-sm:leading-[100%] text-center">We design. We develop</h1>
          <h1 className="text-[9vh] font-montserrat font-black text-center max-lg:text-[10vw] max-sm:text-[11vw] max-md:tracking-[autopx] leading-[105%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[120%] w-[65%] max-lg:w-[100%]">
          We deliver your vision to the world
          </h1>
          <div>
            <h2 className="text-center font-montserrat text-2xl max-sm:text-[14px]">Explore our work and discover your potential.</h2>
          </div>
          <button className="px-8 py-[14px] border-2 border-solid rounded-[48px] max-md:rounded-[32px] bg-white hover:bg-black transition-all duration-300 text-2xl max-sm:text-[20px] tracking-tight font-montserrat cursor-pointer font-bold hover:text-[#fbf950]">
            Show me the magic
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-montserrat text-[32px] font-bold max-md:text-[28px] max-sm:text-[16px] text-center">Trusted by clients worldwide</h3>
          <div className="flex gap-10 max-sm:gap-4 max-md:gap-6 max-lg:gap-8 justify-center">
            <Image src={HyperPay} alt="HyperPay Logo" className="w-[100px] max-sm:w-[64px] max-md:w-[72px] max-lg:w-[96px]"/>
            <Image src={HyperPay} alt="HyperPay Logo" className="w-[100px] max-sm:w-[64px] max-md:w-[72px] max-lg:w-[96px]"/>
            <Image src={HyperPay} alt="HyperPay Logo" className="w-[100px] max-sm:w-[64px] max-md:w-[72px] max-lg:w-[96px]"/>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
