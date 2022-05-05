import React, {useState} from "react";
import s from './hw5.module.css'

function Header() {

    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const toggle = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div className={s.menuWrapper}>
            <div className={s.burgerMenu} onClick={toggle}>&#9776;</div>
            <div className={`${s.containerMenuLinks} ${activeMenu && s.activeMenu}`}>
            </div>
        </div>
    );
}

export default Header;