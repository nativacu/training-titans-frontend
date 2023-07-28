import { IonButton, IonContent, IonPage, IonPopover } from "@ionic/react";
import './login.scss';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Blob } from "../../components/Blob/blob";

const Login = () => {
    const [lang, setLang] = useState('en');
    const [langIsOpen, setLangIsOpen] = useState(false);
    const { t, i18n } = useTranslation('common');

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang]);

    return (
        <IonPage className="login-page">
            <IonContent>
                <div className="login-content">
                    <Blob blobType={2} />
                    <div className="login-container">
                        <div className="lang-button">
                            <div id="click-trigger" onClick={() => setLangIsOpen(true)} >{lang}</div>
                            <IonPopover mode="ios" trigger="click-trigger" triggerAction="click" isOpen={langIsOpen} onWillDismiss={() => setLangIsOpen(false)}>
                                <IonContent class="ion-padding-vertical">
                                    <div className="lang-options" onClick={() => { setLang('en'); setLangIsOpen(false); }}>EN</div>
                                    <div className="lang-options" onClick={() => { setLang('es'); setLangIsOpen(false); }}>ES</div>
                                </IonContent>
                            </IonPopover>
                        </div>
                        <img src="./assets/images/user.png" />
                        <h2>SimuLearn</h2>
                        <p>{t('LOGIN_PAGE.DESCRIPTION')}</p>
                        <IonButton expand="block" color={"secondary"} routerLink="/home">{t('LOGIN_PAGE.ACCESS')}</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Login;