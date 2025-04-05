import CardAus from "@/components/CardAus";

const WhyAus = () => {
    const data = [
        {
            number: '01',
            title: 'Have A Clear Web Strategy',
            text: 'Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals. This strategic approach ensures a strong foundation for your website’s success.'
        },
        {
            number: '02',
            title: 'Build A Strong Online Presence',
            text: 'Establishing a strong and professional online presence positions you as a leader in your industry. We’ve successfully guided numerous clients in building their online authority and are ready to help you achieve the same.'
        },
        {
            number: '03',
            title: 'Boost Conversion Rates With User-Centric Design',
            text: 'Our expert website designers focus on optimizing your website for an exceptional user experience, transforming visitors into loyal customers. We ensure your site is designed to engage and convert, driving higher conversion rates.'
        },
        {
            number: '04',
            title: 'Increase User Engagement',
            text: 'Professional website design keeps visitors on your site longer, reducing bounce rates. Our designers create intuitive, easy-to-navigate websites that enhance user engagement and improve conversion rates.'
        },
        {
            number: '05',
            title: 'Create A Custom eCommerce Design for Better Performance',
            text: 'Our award-winning designers craft e-Stores with user interfaces that captivate your customers and maximize your revenue. We ensure your online store not only attracts but retains customers effectively.'
        },
        {
            number: '06',
            title: 'Optimize For Search Engines',
            text: 'We implement proven SEO strategies to enhance your website’s search engine ranking and drive organic traffic, helping you reach a broader audience.'
        }
    ];

    const groupedData = [];
    for (let i = 0; i < data.length; i += 2) {
        groupedData.push(data.slice(i, i + 2));
    }

    return (
        <div className="bg-[#333331] py-20">
            <div className="flex flex-col gap-6 items-center px-12 sm:px-20 lg:px-32">
                <div
                    className="text-textColor text-[BoldItalicArt] text-[15px] sm:text-[20px] md:text-[30px] xl:text-[40px] flex justify-center gap-2">
                    <h2>Why Choose</h2>
                    <h2 className="bg-gradient-to-r from-[#009CFF] to-[#9536E5] text-transparent bg-clip-text">Digital
                        Craft</h2>
                    <h2>Company ?</h2>
                </div>

                <div className=" flex-col w-full gap-6 md:flex hidden">
                    {groupedData.map((pair, index) => (
                        <div key={`pair-${index}`}>
                            <div className="flex justify-between w-full gap-4">
                                {pair.map((item) => (
                                    <CardAus
                                        key={item.number}
                                        number={item.number}
                                        title={item.title}
                                        text={item.text}
                                    />
                                ))}
                                {pair.length === 1 && <div className="flex-1"></div>}
                            </div>

                            {index < groupedData.length - 1 && (
                                <hr className="w-full h-1 bg-gradient-to-r from-[#009CFF] to-[#9536E5] my-6"/>
                            )}
                        </div>
                    ))}
                </div>
                <div className={'md:hidden flex flex-col w-full gap-2'}>
                    {data.map((item,index) => (
                        <>
                            <CardAus
                                cardWidth={'w-full'}
                                key={index}
                                number={item.number}
                                title={item.title}
                                text={item.text}
                            />
                            {index < data.length - 1 && (
                                <hr className="w-full h-1 bg-gradient-to-r from-[#009CFF] to-[#9536E5] my-6"/>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyAus;