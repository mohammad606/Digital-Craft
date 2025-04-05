const MenuIcon = ({props,onClick}:{props:string,onClick:any}) => {


    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={props} onClick={onClick} viewBox="-5 -7 24 24">
            <path fill="#04e4ff"
                  d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/>
        </svg>
    )
}

export default MenuIcon;