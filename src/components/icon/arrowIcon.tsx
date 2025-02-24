

const ArrowIcon = ({props}:{props:string}) => {
    return(
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className={`icon ${props}`}
             aria-hidden="true" role="img" >
            <defs>
                <symbol fill="none" viewBox="0 0 14 22" id="lib-icon-arrow3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 11L.5 21.5 4.482 11 .5.5l13 10.5z" fill="#1B2C5C"></path>
                </symbol>
            </defs>
            <use xlinkHref="#lib-icon-arrow3"></use>
        </svg>
    )
}

export default ArrowIcon;