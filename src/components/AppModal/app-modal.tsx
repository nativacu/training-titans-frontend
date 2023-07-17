import { IonModal, IonContent, IonIcon } from "@ionic/react";
import React from "react";
import './app-modal.scss';
import {close} from 'ionicons/icons';

interface AppModalProps extends React.ComponentPropsWithRef<typeof IonModal> {
    onConfirm: () => void,
    onDismiss: () => void,
}

const AppModal: React.FC<AppModalProps> = (props) => {
    return (
        <IonModal
            {...props}
            className={`app-modal ${props.className}`}
            onWillDismiss={props.onDismiss}
        >
            <IonContent className="ion-padding">
                <div className="app-modal-close" onClick={props.onDismiss}>
                    <IonIcon icon={close} />
                </div>
                <>
                    {props.children}
                </>
            </IonContent>
        </IonModal>
    )
}

export default AppModal;