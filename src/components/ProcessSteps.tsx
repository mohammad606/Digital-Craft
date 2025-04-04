import Image from "next/image";
import TrueDots from "@/components/TrueDots";
import ArrowIcon from "@/components/icon/arrowIcon";


const ProcessSteps = ({image,title,text,qu,info}:{image:string,title:string,text:string,qu:string,info:string[]}) => {

    return (
        <div className={'flex w-full h-auto'} >
            <div className={'w-1/4 md:block hidden max-w-[250px]'}>
                <div className={'relative w-full h-1/2  '}>
                    <Image src={image} alt={'...'} fill={true}></Image>
                </div>
            </div>
            <div className={'w-full md:w-3/4 flex flex-col gap-3 md:gap-6'}>
                <h4 className={'text-greenText text-[18px] lg:text-[20px] xl:text-[30px]'}>{title}</h4>
                <p className={'text-white text-[12px] lg:text-[14px] xl:text-[16px]'}>{text}</p>
                <div className={'flex flex-col gap-4'}>
                    <h5 className={'text-textColor text-[12px] lg:text-[14px] xl:text-[16px]'}>{qu}</h5>
                    {info.map((item, index) => (
                        <div key={index}>
                            <TrueDots title={item} icon={<ArrowIcon classN={'w-6 h-4 mr-4'}/>}/>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default ProcessSteps