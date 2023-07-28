import React from "react";
import { IonButton, IonIcon, IonInput, IonItem, IonList, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Steps } from "./new-tech-stack-modal";
import { Language } from "../../../../common/types/TechStack";

interface TechDescriptionProps {
    name: string,
    language: string,
    setName: (value: string) => void,
    setLanguage: (value: Language) => void,
    setStep: (step: Steps) => void,
}

const TechDescription = ({ name, language, setName, setLanguage, setStep }: TechDescriptionProps) => {

    const languages = ['English', 'Spanish', 'Portuguese', 'Italian', 'French'];

    return (
        <>
            <h3>Set profile details</h3>
            <div className="tech-description">
                <IonList>
                    <IonItem>
                        <IonInput label="Profile name" type="text" onIonChange={(e) => setName((e.target.value)?.toString() || '')}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonSelect value={language} label="Language" labelPlacement="fixed" placeholder="English"
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
                    onClick={() => setStep(Steps.Skills)}
                >
                    <IonIcon slot="start" icon={chevronBack} /> Back
                </IonButton>
                <IonButton
                    size="small"
                    color='primary'
                    onClick={() => setStep(Steps.Profile)}
                >
                    <IonIcon slot="start" icon={chevronForward} /> View Profile Details
                </IonButton>
            </div>
        </>
    )
}

export default TechDescription