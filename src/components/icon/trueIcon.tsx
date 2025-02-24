

const TrueIcon = ({props}:{props:string}) => {
    return (
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
             className={`icon icon-check-mark ${props}`} aria-hidden="true" role="img">
            <defs>
                <symbol fill="none" viewBox="0 0 22 16" id="check-mark" xmlns="http://www.w3.org/2000/svg">
                    <path opacity=".6" fillRule="evenodd" clipRule="evenodd"
                          d="M11.426 12.807L2.878 4.26 0 7.137l8.548 8.548 2.878-2.878z" fill="#04E4FF"></path>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M18.485 0L5.678 12.807l2.877 2.878L21.363 2.878 18.485 0z" fill="#04E4FF"></path>
                </symbol>
            </defs>
            <use xlinkHref="#check-mark"></use>
        </svg>
    );
}
export default TrueIcon;