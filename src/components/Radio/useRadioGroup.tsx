import { useId, useState } from "react";

interface RadioButtonParams {
    labelKey: string;
    value: string;
}

export interface RadioButtonProps {
    checked: boolean;
    labelKey: string;
    value: string,
    key: string,
    name: string,
    changeChecked: (value: string)=>void;
}

export interface Radio {
    buttonProps: RadioButtonProps[];
    checkedRadio: string;
    groupName: string;
    setCheckedRadio: (value: string)=>void;
}

function useRadioGroup(buttons: RadioButtonParams[]){
    //const [buttonParams, buttonParams] = useState(buttons);
    const [checkedRadio, setCheckedRadio] = useState(buttons[0]?.value)
    const groupName = useId();

    const buttonProps: RadioButtonProps[] = buttons.map((button, index) => {
        return {
            checked: button.value == checkedRadio,
            labelKey: button.labelKey,
            value: button.value,
            name: groupName,
            key: groupName + button.value + index,
            changeChecked: value=>setCheckedRadio(value),
        }
    });

    return {
        buttonProps,
        checkedRadio,
        groupName,
        setCheckedRadio
    };
}

export default useRadioGroup