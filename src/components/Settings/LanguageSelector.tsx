import { useEffect, useState } from "react";
import RadioButton from "../Radio/RadioButton";
import useRadioGroup from "../Radio/useRadioGroup";
import style from "./Settings.module.css"

import { useTranslation } from "react-i18next";
import Expand from "../Expand/Expand";

function LanguageSelector() {
    const { t, i18n } = useTranslation();
    const [initialized, setInitialized] = useState(false);

    const radio = useRadioGroup([
        {
            labelKey: t("settings.language.spanish"),
            value: "es"
        },
        {
            labelKey: t("settings.language.english"),
            value: "en"
        },
        {
            labelKey: t("settings.language.tokipona"),
            value: "tok"
        },
        {
            labelKey: t("settings.language.sitelenpona"),
            value: "toksp"
        }
    ]);

    if(!initialized) {
        radio.setCheckedRadio(i18n.language);
        setInitialized(true);
    }


    useEffect(() => {
        i18n.changeLanguage(radio.checkedRadio);
        if(radio.checkedRadio == "toksp") {
            document.body.classList.add("sitelenpona");
        } else {
            document.body.classList.remove("sitelenpona");
        }
    }, [radio.checkedRadio, i18n]);

    return (
        <div className={style.languageContainer}>
            <p className={style.settingsTitle}>{t("settings.language.title")}</p>
            <hr />
            {
                radio.buttonProps.slice(0, 2).map(props => {
                    const { key, ...rest } = props;
                    return <RadioButton key={key} {...rest} />;
                })
            }
            <div>
                <Expand buttonText={t("settings.language.extras")}>
                    {
                        radio.buttonProps.slice(2).map(props => {
                            const { key, ...rest } = props;
                            return <RadioButton key={key} {...rest} />;
                        })
                    }
                </Expand>
            </div>
        </div>
    );

}

export default LanguageSelector;