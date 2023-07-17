import React from "react";
import { TechArea } from "../../../../common/types/TechStack";
import { IonButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Steps } from "./new-tech-stack-modal";

interface TechDescriptionProps {
    description: string,
    language: string,
    setDescription: (value: string) => void,
    setLanguage: (value: string) => void,
    setStep: (step: Steps) => void,
}

const TechDescription = ({ description, language, setDescription, setLanguage, setStep }: TechDescriptionProps) => {

    const languages = ['English', 'Spanish', 'Portuguese', 'Italian', 'French'];

    return (
        <>
            <h3>Set profile details</h3>
            <div className="tech-description">
                <IonList>
                    <IonItem>
                        <IonSelect value={language} label="Technology" labelPlacement="fixed" placeholder="English"
                            onIonChange={(e) => setLanguage(e.target.value)}
                        >
                            {
                                languages.map((language, index) => {
                                    return (
                                        <IonSelectOption key={`language-${index}`} value={language}>{language}</IonSelectOption>
                                    )
                                })
                            }
                        </IonSelect>
                    </IonItem>
                    {/* <IonItem>
                        <IonTextarea label="Profile description" labelPlacement="start" autoGrow={true} value={description} onIonChange={(e) => setDescription(e.target.value || '')} />
                    </IonItem> */}
                </IonList>
            </div>
            <div className="footer">
                <IonButton
                    size="small"
                    color='light'
                    onClick={() => setStep('skills')}
                >
                    <IonIcon slot="start" icon={chevronBack} /> Back
                </IonButton>
                <IonButton
                    size="small"
                    color='primary'
                    onClick={() => setStep('profile')}
                >
                    <IonIcon slot="start" icon={chevronForward} /> View Profile Details
                </IonButton>
            </div>
        </>
    )
}

export default TechDescription