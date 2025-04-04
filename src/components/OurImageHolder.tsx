import Image from "next/image";

const OurImageHolder = (props: { image: string ,title:string}) => {

    return (
        <div className={'flex flex-col group cursor-pointer w-fit'}>
            <div className={'relative w-full h-2/3 '}>
                <Image alt={'..'} src={props.image} fill={true} className={'group-hover:-translate-y-4 duration-200 object-contain'}></Image>
                <div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/25 rounded-full blur-sm transition-all duration-300 group-hover:opacity-80 group-hover:scale-90 z-10"
                ></div>
            </div>
            <div className={'flex flex-col justify-end items-center h-1/3 w-full px-4  z-10'}>
                <p className={'font-[BoldItalicArt] text-[12px] lg:text-[15px] xl:text-[18px] transition-all duration-200 group-hover:scale-105 group-hover:font-medium  text-textColor'}>{props.title}</p>
                <p className={'font-[BoldItalicArt] text-[12px] lg:text-[15px] xl:text-[18px] transition-all duration-200 group-hover:scale-105 group-hover:font-medium  text-textColor'}>Development</p>
            </div>
        </div>
    )
}
export default OurImageHolder