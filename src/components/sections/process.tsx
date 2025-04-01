'use client'
import ProgressBar from "@/components/ProgressBar";
import {useRef} from "react";


const ProcessSection = () => {
    let ref = useRef<HTMLDivElement>(null);
    return(
        <div ref={ref} className={'w-full overflow-y-scroll h-screen scrollbar-hide'} style={{background: "linear-gradient(to bottom, #333331 0%, #2C3D8F 33%, #371668 66%, #140A3A 100%);"}}>
           <div className={'flex flex-col p-32 gap-6 h-[2000px]'}>
               <h3 className={'text-[20px] lg:text-[30px] xl:text-[40px] text-textColor text-center'}>Website Design Process</h3>
               <p className={'text-textColor text-center'}>Take a peek behind the curtain and explore the custom web design process our team follows. We build custom sites for brands of all sizes that deliver measurable results.</p>
               <div className={'flex justify-between w-full h-[1500px]'}>
                   <div className={'w-[80%]'}></div>
                   <div className={'w-[20%]'}>
                       <ProgressBar  ref={ref} />
                   </div>
               </div>
           </div>
        </div>
    )
}

export default ProcessSection