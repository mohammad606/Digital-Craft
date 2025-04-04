import Link from "next/link";
import WhatsIcon from "@/components/icon/WhatsIcon";
import FaceBookIcon from "@/components/icon/FaceBookIcon";
import InstaIcon from "@/components/icon/InstaIcon";


const FooterSection = () => {
    return (
        <footer className="bg-[#333331] text-white  ">
            <div className={'flex py-14 px-12 sm:px-20 lg:px-32 justify-between h-full'}>
                <div className={'flex gap-4 items-center'}>
                    <img src={'/logo1.png'} alt={'..'} className={'max-h-[200px]'}></img>
                    <div>
                        <h3 className={'text-[BoldItalicArt] text-[20px] md:text-[30px] xl:text-[40px] bg-gradient-to-r from-[#009CFF] to-[#9536E5] text-transparent bg-clip-text'}>Digital Craft</h3>
                        <div
                            className="text-textColor text-[BoldItalicArt] text-[12px] md:text-[14px] xl:text-[16px] flex justify-center gap-2">
                            <h2>Copyright 2025 @</h2>
                            <h2 className="bg-gradient-to-r from-[#009CFF] to-[#9536E5] text-transparent bg-clip-text">Digital
                                Craft</h2>
                            <h2>All rights reserved.</h2>
                        </div>
                    </div>

                </div>
                <div className={'flex flex-col  justify-center gap-4 text-[12px] md:text-[14px] xl:text-[16px] text-white'}>
                    <Link href={''} className={'hover:text-darkBlue'}>About Us</Link>
                    <Link href={''} className={'hover:text-darkBlue'}>Process</Link>
                    <Link href={''} className={'hover:text-darkBlue'}>Our work</Link>
                    <Link href={''} className={'hover:text-darkBlue'}>Contact Us</Link>
                </div>
                <div className={'flex flex-col gap-4 justify-center'}>
                    <div className={'flex gap-2'}>
                        <WhatsIcon props={'w-6 h-6'}/>
                        <p>+20 1094221030</p>
                    </div>
                    <div className={'flex gap-2'}>
                        <InstaIcon props={'w-6 h-6'}/>
                        <p>@Digital Craft</p>
                    </div>
                    <div className={'flex gap-2'}>
                        <FaceBookIcon props={'w-6 h-6'}/>
                        <p>Digital Craft</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;