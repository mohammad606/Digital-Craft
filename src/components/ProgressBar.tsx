'use client'
import {useEffect, useState} from "react";


const ProgressBar = (props: { ref: any }) => {

    let [progress, setProgress] = useState<number>(0)

    useEffect(() => {
        let refScroll = props.ref.current
        const handleScroll = () => {
            const scrollHeight = refScroll.scrollHeight;
            const clientHeight = refScroll.clientHeight;
            const scrollTop = refScroll.scrollTop;
            const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setProgress(scrollPercent)
       }
       refScroll.addEventListener('scroll', handleScroll);

        return () => {
            refScroll.removeEventListener('scroll', handleScroll);
        }

    }, [props.ref.current])

    return (

        <div className={'w-8 h-full bg-gray'}>
            <div className={'w-full bg-[#0F33F8]'} style={{height:`${progress}%`}}></div>
        </div>
    )


}

export default ProgressBar