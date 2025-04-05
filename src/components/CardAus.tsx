


const CardAus = ({key,number,title,text,cardWidth='w-[40%]'}:{key:any,number:string,title:string,text:string,cardWidth?:string}) => {


    return (
        <div key={key} className={`${cardWidth} flex flex-col gap-2 text-textColor`}>
            <div className={'text-textColor text-[BoldItalicArt] text-[15px] md:text-[18px] xl:text-[20px] flex gap-2'}>
                <span className={'bg-gradient-to-r from-[#009CFF] to-[#9536E5] text-transparent bg-clip-text'}>{number}</span>
                <h3>{title}</h3>
            </div>
            <p className={'text-[12px] md:text-[14px] lg:text-[16px]'}>{text}</p>
        </div>
    )
}

export default CardAus