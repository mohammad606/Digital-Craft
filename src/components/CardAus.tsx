


const CardAus = ({number,title,text}:{number:string,title:string,text:string}) => {


    return (
        <div className={'w-[40%] flex flex-col gap-2 text-textColor'}>
            <div className={'text-textColor text-[BoldItalicArt] text-[15px] md:text-[18px] xl:text-[20px] flex gap-2'}>
                <span className={'bg-gradient-to-r from-[#009CFF] to-[#9536E5] text-transparent bg-clip-text'}>{number}</span>
                <h3>{title}</h3>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default CardAus