import Image from "next/image";
import Link from "next/link";


const Nav = () => {
    return (
        <div className={'w-full pt-12 flex justify-center items-end font-[BoldItalicArt] text-textColor'}>
            <nav className={'w-10/12 h-[70px] rounded-full bg-darkGray '} style={{boxShadow: '0 0 10px 0 #ffffff40;'}}>
                <div className={`w-full h-full flex justify-between items-center`}>
                   <div className={'flex h-full'}>
                       <div className={'pl-10 py-4 h-full w-[65px]'}>
                           <div className={'relative w-full h-full'}>
                               <Image src={'/logo1.png'} alt={'...'} fill={true}/>
                           </div>
                       </div>
                       <div className={'h-full pl-6 flex items-center  text-[25px] '}>
                           <h1 >Digital Craft</h1>
                       </div>
                   </div>
                    <div className={'flex gap-4 h-full items-center text-[20px]  '}>
                        <Link href={'/'} className={'hover:text-lightBlue '}>Work</Link>
                        <Link href={'/'} className={'hover:text-lightBlue '}>About</Link>
                        <Link href={'/'} className={'hover:text-lightBlue '}>Services</Link>
                    </div>
                    <div className={'p-2 text-[20px]'}>
                        <div className={'border-2  border-lightBlue  hover:bg-lightBlue hover: rounded-full px-10 pt-1 pb-2'}><Link href={'/'}>Contact</Link></div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;