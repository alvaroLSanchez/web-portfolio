import { useEffect } from "react";
import RadioButton from "../Radio/RadioButton";
import RadioGroup from "../Radio/RadioGroup";
import useRadioGroup from "../Radio/useRadioGroup";
import style from "./Settings.module.css"

import { useTranslation } from "react-i18next";

function ThemeSelector() {
    const {t} = useTranslation();

    const radio = useRadioGroup([
        {
            labelKey: t("settings.theme.default"),
            value: "default"
        },
        {
            labelKey: t("settings.theme.dark"),
            value: "dark"
        },
        {
            labelKey: t("settings.theme.light"),
            value: "light"
        }
    ]);
    useEffect(() => {
        switch (radio.checkedRadio) {
            case "light":
                document.querySelector("body")?.setAttribute("data-theme", "light");
                break;
            case "dark":
                document.querySelector("body")?.setAttribute("data-theme", "dark");
                break;
            case "default":
                {
                    const mq = window.matchMedia("(prefers-color-scheme: dark)");
                    if (mq.matches) {
                        document.querySelector("body")?.setAttribute("data-theme", "dark");
                    } else {
                        document.querySelector("body")?.setAttribute("data-theme", "light");
                    }
                }
                break;
        }
    }, [radio.checkedRadio]);

    return (
        <div>
        <p className={style.settingsTitle}>{t("settings.theme.title")}</p>
        <hr />
            <RadioGroup Component={RadioButton} radio={radio} direction="vertical" />
        </div>
    );

}

export default ThemeSelector;