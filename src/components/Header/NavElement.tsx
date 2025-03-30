
import { NavLink, useLocation } from "react-router-dom";
import style from "./header.module.css"
import { useState } from "react";

interface NavElementProps {
    text: string;
    path: string;
}

function NavElement({ text, path }: NavElementProps) {
    const [hover, setHover] = useState(false);
    const location = useLocation();
    const isCurrentPage = location.pathname == path;
    let className = style.navElement + " ";

    if (isCurrentPage) {
        className += style.active;
    } else {
        className += "outlineText ";
        className += hover ? "outlineTextActive" : "";
    }

    return (
        <NavLink
            to={path}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={className}
        >
            {text}
        </NavLink>
    );
}

export default NavElement;