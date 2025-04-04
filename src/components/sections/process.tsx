'use client'
import ProgressBar from "@/components/ProgressBar";
import {useRef} from "react";
import ProcessSteps from "@/components/ProcessSteps";


const ProcessSection = () => {
    let ref = useRef<HTMLDivElement>(null);

    let webStrategy = ['Identify your target audiences', 'Analyze user pain-points & define your UVPs', 'Define key performance indicators (KPIs)', 'Create a roadmap to growing your brand online']
    let planning = ['We  develop a base-level user flow & sitemap', 'We utilize wireframing to create a seamless conversion funnel', 'We add on-brand, consistent messaging to your structure']
    let creativeDesign = ['Thoughtfully place design features to guide to the user journey', 'Utilize interactive videos & animations', 'Create custom, branded illustrations']
    let responsive = ['Gather touchpoint & user-channel insights', 'Transform your wireframes into a flexible UI', 'Test across devices before approval & launch']
    let quality = ['Actively involve our clients throughout every project', 'Meticulously test all designs to catch errors', 'Use tried-and-tested tools to secure before launch']
    let launch = ['Following a strict protocol for every website launch', 'Offering post-launch maintenance & optimization', 'Creating & implementing a digital marketing plan to drive awareness across touchpoints']

    let data = [
        {
            image: '/st.png',
            title: 'Web Strategy',
            text: 'We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.',
            qu: 'In this phase, we :',
            info: webStrategy
        },
        {
            image: '/pl.png',
            title: 'Planning & Information Architecture',
            text: 'This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design in NYC.',
            qu: 'Here’s how our team does it :',
            info: planning
        },
        {
            image: '/cr.png',
            title: 'Creative Design',
            text: 'We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, we ensure seamless user journeys to key conversion points.',
            qu: 'With just 50 milliseconds to make a good first impression, your website needs to stand out. To achieve this, we:',
            info: creativeDesign
        },
        {
            image: '/rd.png',
            title: 'Responsive Development',
            text: 'A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.',
            qu: 'To ensure your website reaches and satisfies every user, we:',
            info: responsive
        },
        {
            image: '/qa.png',
            title: 'Quality Assurance (QA)',
            text: 'At Digital Silk, we pride ourselves on delivering measurable results and professional outcomes. By following a strict quality assurance (QA) protocol, we guarantee a high-quality digital experience for your brand.',
            qu: 'To achieve this, we:',
            info: quality
        },
        {
            image: '/lo.png',
            title: 'Launch & Optimization',
            text: "Our end-to-end website design services in New York cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
            qu: 'Our design specialists make this happen by:',
            info: launch
        }
    ]

    return (
        <div ref={ref} className={'w-full '}
             style={{background: "linear-gradient(to bottom, #333331 0%, #2C3D8F 33%, #371668 66%, #140A3A 100%);"}}>
            <div className={'flex flex-col p-12 sm:p-20 lg:p-32 gap-6'}>
                <h3 className={'text-[20px] lg:text-[30px] xl:text-[40px] text-textColor text-center'}>Website Design
                    Process</h3>
                <p className={'text-textColor text-center text-[12px] lg:text-[14px] xl:text-[16px]'}>Take a peek behind the curtain and explore the custom web
                    design process our team follows. We build custom sites for brands of all sizes that deliver
                    measurable results.</p>
                <div className={'flex pt-10 justify-between w-full '}>
                    <div className={'w-[5%] md:flex hidden  pt-6'}>
                        <ProgressBar ref={ref} hight={'h-[90%]'}/>
                    </div>
                    <div className={'md:w-[90%] w-full gap-10 flex flex-col'}>
                        {data.map((item, index) => (
                            <div key={index}>
                                <ProcessSteps
                                    image={item.image}
                                    title={item.title}
                                    text={item.text}
                                    qu={item.qu}
                                    info={item.info}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessSection