import { useRef, useState } from "react";
import style from "./Expand.module.css";

interface ExpandProps {
    children: React.ReactElement[];
    buttonText: string;
}

function Expand(props: ExpandProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(0);

    function toggle() {
        if(!open) {
            if(ref.current == null) return;
            setHeight(ref.current.scrollHeight);
        } else {
            setHeight(0);
        }
        setOpen(!open);
    }

    return (
        <div className={style.container}>
            <div 
            onClick={toggle}
            className={style.button}>{props.buttonText}</div>
            <div 
            ref={ref} 
            style={{height, overflow: "hidden"}}
            className={style.content}>
                {props.children}
            </div>
        </div>
    )
}

export default Expand;