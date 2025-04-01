import TrueIcon from "@/components/icon/trueIcon";
import TypewriterEffect from "@/components/helpers/typeWriterEffect";
import DubleArrow from "@/components/icon/dubleArrow";
import Image from "next/image";


const HomeSection = () => {

  let words = ['seamless','scalable','extraordinary']

  return (
    <main className={'w-full pt-12 flex justify-center'} >
      <div className={`w-10/12 flex h-full`}>
         <div className={'w-full sm:w-1/2 h-full flex flex-col gap-6 md:gap-12 xl:gap-16 '}>
           <h2 className={'text-textColor text-[30px] md:text-[50px] xl:text-[60px] leading-none font-[BoldItalicArt]'}>Mastering the Art of Software Craftsmanship to Shape a Smarter Future</h2>
           <h3 className={'text-darkBlue text-[10px] md:text-[20px] xl:text-[40px] font-[BoldItalicArt]'}>Leave the work to us @</h3>
           <div className={'flex  items-center'}>
             <TrueIcon props={'w-7 h-5 mr-4'}/>
             <p className={'text-white text-[12px] md:text-[15px] xl:text-[18px] mr-2'}>Empowering your digital journey with solutions that are <TypewriterEffect words={words} textStyle={'text-red-500 text-[12px] md:text-[15px] xl:text-[18px]'}/></p>
           </div>
           <div className={'px-10 py-2 hover:bg-darkBlue cursor-pointer flex items-center gap-2 text-white border-darkBlue border-2 rounded-full w-fit'}>
             <p className={'text-[10px] md:text-[14px] xl:text-[16px]'}>BUILD YOUR DREAM APP TODAY!</p>
             <DubleArrow props={'w-5 h-5'}/>
           </div>
         </div>
          <div className={'sm:flex hidden w-1/2 h-auto  justify-end'}>
              <div className={'relative w-[80%] h-full max-w-[550px]'}>
                  <Image src={'/image.png'} alt={'...'} fill={true}></Image>
              </div>
          </div>
      </div>
    </main>
  );
}
export default HomeSection;