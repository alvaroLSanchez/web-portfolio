import { useId } from "react";
import { RadioButtonProps } from "./useRadioGroup";
import style from "./Radio.module.css";
import { useTranslation } from "react-i18next";


function RadioButton(props: RadioButtonProps) {
    const id = useId();
    const {t} = useTranslation();
    return (
        <div className={style.buttonContainer}>
            <input 
            className={style.radioInput}
            onChange={e=>props.changeChecked(e.currentTarget.value)} type="radio" name={props.name} value={props.value} id={id} checked={props.checked}  />
            <label
                className={style.radioLabel}
             htmlFor={id}>{t(props.labelKey)}</label>
        </div>
    );
}

export default RadioButton;