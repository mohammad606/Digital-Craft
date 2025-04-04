import Cards from "@/components/Cards";
import ArrowIcon from "@/components/icon/arrowIcon";


const WorkSection = () => {

    let data = [
        {
            imageOne: '/pom.png',
            imageTow: '/pomPc.png',
            name: 'Planet Of Medicine',
            title: 'It is a platform to get the best possible medical care from your home .',
            link: 'https://planetofmedicine.com/'
        },
        {
            imageOne: '/law.png',
            imageTow: '/lawPc.png',
            name: 'Planet Of Medicine',
            title: 'It is a platform to get the best possible medical care from your home .',
            link: 'https://planetofmedicine.com/'
        },
        {
            imageOne: '/afak.png',
            imageTow: '/afakPc.png',
            name: 'Planet Of Medicine',
            title: 'It is a platform to get the best possible medical care from your home .',
            link: 'https://planetofmedicine.com/'
        },
        {
            imageOne: '/serv.png',
            imageTow: '/servPc.png',
            name: 'Planet Of Medicine',
            title: 'It is a platform to get the best possible medical care from your home .',
            link: 'https://planetofmedicine.com/'
        }
    ]

    return (
        <div className={' w-full'}   style={{background: "linear-gradient(to bottom, #00042A 0%, #00042A 82%, #333331 100%);"}}>
            <div className={'flex flex-col items-center px-12 sm:px-20 lg:px-32 pt-10 gap-2 md:gap-4 '}>
                <p className={'text-white text-[12px] lg:text-[14px] xl:text-[16px]'}>OUR WORK</p>
                <h3 className={'text-[20px] lg:text-[30px] xl:text-[40px] text-textColor text-center'}>Featured Website Design Projects</h3>
                <p className={'text-textColor text-center text-[12px] lg:text-[14px] xl:text-[16px]'}>
                    Have a sneak peek at some of our recent work delivered to our esteemed global clients belonging to various industry verticals. Get a feel for the innovative, quality-rich product you will receive when you collaborate with JPLoft as your trusted technology partner for your web and app development project
                </p>
                <div className={'w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center'}>
                    {data.map((item, index) => (
                            <Cards
                                key={index}
                                imageOne={item.imageOne}
                                imageTow={item.imageTow}
                                name={item.name}
                                title={item.title}
                                link={item.link}
                            />
                    ))}

                </div>
                <div className={'w-full flex justify-center my-7 '}>
                    <div className={'flex gap-1 text-textColor text-[BoldItalicArt]  cursor-pointer justify-center items-center group'}>
                        <span className={'text-[12px]'}>MORE</span>
                        <ArrowIcon classN={'w-4 h-4 mt-1 rotate-90 group-hover:translate-y-1 duration-200'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkSection