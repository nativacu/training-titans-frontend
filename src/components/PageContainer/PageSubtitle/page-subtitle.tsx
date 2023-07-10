import { useTranslation } from 'react-i18next';
import './page-subtitle.scss';
import { IonLabel } from "@ionic/react";

interface PageSubtitleProps {
    translationKey: string;
}

export const PageSubtitle = ({ translationKey }: PageSubtitleProps) => {
    const [t] = useTranslation('common');

    return (
        <IonLabel className="page-subtitle">
            <div className="separator"></div>
            <h2 className="subtitle">
                {t(translationKey)}
            </h2>
        </IonLabel>
    )
}