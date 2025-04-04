import TrueIcon from "@/components/icon/trueIcon";


const TrueDots = (
    {trueSize=5,fontSize='text-[10px] lg:text-[14px] xl:text-[16px]',title,icon,children}
     :
        {trueSize?:number,fontSize?:string,title:string,icon?:React.ReactNode,children?:React.ReactNode}
)=>{


    return(
        <div className={'flex  items-center'}>
            {
                icon?
                    icon
                    :
                    <TrueIcon props={`w-${trueSize + 2} h-${trueSize} mr-4`}/>
            }
            <p className={`text-white font-[BoldItalicArt] ${fontSize} mr-2`}>{title} {children} </p>
        </div>
    )
}

export default TrueDots