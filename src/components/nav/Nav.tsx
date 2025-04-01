import Image from "next/image";
import Link from "next/link";


const Nav = () => {
    return (
        <header className={'w-full pt-12 flex justify-center items-end font-[BoldItalicArt] text-textColor'}>
            <nav className={'w-10/12 h-[50px] md:h-[60px] xl:h-[70px] rounded-full bg-darkGray '} style={{boxShadow: '0 0 10px 0 #ffffff40;'}}>
                <div className={`w-full h-full flex justify-between items-center`}>
                   <div className={'flex h-full '}>
                       <div className={'pl-6 xl:pl-10 py-2 xl:py-4 h-full w-[45px] md:w-[50px] xl:w-[65px]'}>
                           <div className={'relative w-full h-full'}>
                               <Image src={'/logo1.png'} alt={'...'} fill={true}/>
                           </div>
                       </div>
                       <div className={'h-full pl-6 flex items-center text-[18px] md:text-[20px] xl:text-[25px] whitespace-nowrap'}>
                           <h1 >Digital Craft</h1>
                       </div>
                   </div>
                    <div className={' gap-3 md:gap-6 xl:gap-10 h-full items-center text-[15px] md:text-[18px] xl:text-[20px]  hidden sm:flex'}>
                        <Link href={'/'} className={'hover:text-lightBlue '}>Work</Link>
                        <Link href={'/'} className={'hover:text-lightBlue '}>About</Link>
                        <Link href={'/'} className={'hover:text-lightBlue '}>Services</Link>
                    </div>
                    <div className={'p-2 hidden sm:block text-[15px] md:text-[18px] xl:text-[20px]'}>
                        <div className={'border-2  border-lightBlue  hover:bg-lightBlue hover: rounded-full px-10 pt-1 pb-2'}><Link href={'/'}>Contact</Link></div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;