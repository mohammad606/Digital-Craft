import {useState} from "react";


const ProviderMenu = ({children,}:{ children: React.ReactNode; }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>{children}</>
    )

}

export default ProviderMenu;