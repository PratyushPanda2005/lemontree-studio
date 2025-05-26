import Image from 'next/image'
import Link from 'next/link'
import Lemontree from '../../../public/logos/lemontree-design-agency-studio-montreal-logo-2-27b84136.svg'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10 h-[0px] bg-black flex justify-center w-[100%]'>
      <div className=' w-[800px] max-lg:w-[90%] max-md:w-[95%] bg-red-400 relative top-[75px] max-sm:top-[50px]'>
          <div className='bg-black px-10 py-4 max-sm:px-5 rounded-[48px] flex justify-between'>
            <Link href="/" className='max-sm:h-[28px]'>
            <Image src={Lemontree} alt='Lemon Tree Logo' className='h-[40px] max-sm:h-[28px] visible' loading='lazy'/>
            </Link>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" name="Icon" id="Icon" className="w-[40px] max-sm:w-[28px] h-[40px] max-sm:h-[28px] text-white relative" lang=""><path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"></path>
            </svg>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar