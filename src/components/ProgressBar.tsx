'use client'
import {useEffect, useState} from "react";


const ProgressBar = (props: { ref: any }) => {

    let [progress, setProgress] = useState<number>(0)

    const [distanceFromTop, setDistanceFromTop] = useState(0);

    useEffect(() => {
        if (props.ref.current) {
            const rect = props.ref.current.getBoundingClientRect();
            setDistanceFromTop(rect.top + window.scrollY);
        }
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (props.ref.current) {
                const rect = props.ref.current.getBoundingClientRect();
                const totalHeight = rect.height + rect.top;
                const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const scroll = windowScrollTop - distanceFromTop;
                const progress = (scroll / totalHeight) * 100;
                let progressValue = progress < 0 ? 0 : progress > 100 ? 100 : progress;
                setProgress(progressValue);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [distanceFromTop]);

    return (

        <div className={'w-5 h-full relative '}>
            <div className={'w-2 bg-[#0F33F8] absolute top-0 left-1/2 -translate-x-1/2'} style={{height:`${progress}%`}}></div>
            <div className={'w-6 h-full flex flex-col justify-between'}>
                <div className={'w-5 h-5 rounded-full bg-[#0F33F8]'} style={{boxShadow: '0 0 25.5px 9.5px #4761f6'}}></div>
                <div className={'w-5 h-5 rounded-full bg-gray '} style={progress >= 20 ? { boxShadow: '0 0 25.5px 9.5px #4761f6',backgroundColor:'#0F33F8' } : {}}></div>
                <div className={'w-5 h-5 rounded-full bg-gray '} style={progress >= 40 ? { boxShadow: '0 0 25.5px 9.5px #4761f6',backgroundColor:'#0F33F8' } : {}}></div>
                <div className={'w-5 h-5 rounded-full bg-gray '} style={progress >= 60 ? { boxShadow: '0 0 25.5px 9.5px #4761f6',backgroundColor:'#0F33F8' } : {}} ></div>
                <div className={'w-5 h-5 rounded-full bg-gray '} style={progress >= 80 ? { boxShadow: '0 0 25.5px 9.5px #4761f6',backgroundColor:'#0F33F8' } : {}} ></div>
                <div className={'w-5 h-5 rounded-full bg-gray '} style={progress >= 98 ? { boxShadow: '0 0 25.5px 9.5px #4761f6',backgroundColor:'#0F33F8' } : {}} ></div>
            </div>
        </div>
    )


}

export default ProgressBar