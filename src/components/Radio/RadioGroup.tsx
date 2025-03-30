import style from "./Radio.module.css";
import { Radio, RadioButtonProps } from "./useRadioGroup";

interface RadioGroupProps {
    radio: Radio,
    direction: "horizontal" | "vertical"
    Component: React.FC<RadioButtonProps>;
}

function RadioGroup({ radio, direction, Component }: RadioGroupProps) {
    return (
        <div 
        style={{flexDirection: direction == "horizontal" ? "row" : "column"}} 
        className={style.radioGroup}>
            {
                radio.buttonProps.map(props => {
                    const {key, ...rest} = props;
                    return <Component key={key} {...rest} />;
                })
            }
        </div>
    );

}

export default RadioGroup;