import React, { useEffect, useState } from "react";
import { IonButton, IonIcon, IonInput, IonItem, IonList, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Steps } from "./new-tech-stack-modal";
import { Language } from "../../../../common/types/TechStack";
import { GeneralService } from "../../../../services/general.service";

interface TechDescriptionProps {
    name: string,
    language: Language,
    setName: (value: string) => void,
    setLanguage: (value: Language) => void,
    setStep: (step: Steps) => void,
    onConfirmProfile: () => void
}

const TechDescription = ({ name, language, setName, setLanguage, setStep, onConfirmProfile }: TechDescriptionProps) => {

    const [languages, setLanguages] = useState<Language[]>([]);

    useEffect(() => {
        new GeneralService().getLanguages().then((result) => {
            setLanguages(result.data.languages)
        })
    }, [])

    return (
        <>
            <h3>Set profile details</h3>
            <div className="tech-description">
                <IonList>
                    <IonItem>
                        <IonInput label="Profile name" type="text" value={name} onIonChange={(e) => setName((e.target.value)?.toString() || '')}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonSelect value={language} label="Language" labelPlacement="fixed" placeholder="English"
                            onIonChange={(e) => setLanguage(e.target.value)}
                        >
                            {
                                languages.map((language, index) => {
                                    return (
                                        <IonSelectOption key={`language-${index}`} value={language}>{language.name}</IonSelectOption>
                                    )
                                })
                            }
                        </IonSelect>
                    </IonItem>
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
                    onClick={onConfirmProfile}
                >
                    <IonIcon slot="start" icon={chevronForward} /> View Profile Details
                </IonButton>
            </div>
        </>
    )
}

export default TechDescription