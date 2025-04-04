import {className} from "postcss-selector-parser";


const ArrowIcon = ({classN}:{classN:string}) => {
    return(
        <svg className={`${classN}`} viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_25_166)">
                <path d="M33.75 14.1815L1.25 27.3958L11.205 14.1815L1.25 0.967285L33.75 14.1815Z" fill="#1E7DAF"/>
            </g>
            <defs>
                <clipPath id="clip0_25_166">
                    <rect width="35" height="27.687" fill="white" transform="translate(0 0.337891)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default ArrowIcon;