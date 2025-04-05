const CloseIcon = ({props,onClick}:{props: string,onClick:any}) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={props} onClick={onClick} viewBox="0 0 24 24">
            <g fill="none"  strokeWidth="0.9">
                <circle cx="12" cy="12" r="10"/>
                <path strokeLinecap="round" d="m14.5 9.5l-5 5m0-5l5 5"/>
            </g>
        </svg>
    )
}
export default CloseIcon;