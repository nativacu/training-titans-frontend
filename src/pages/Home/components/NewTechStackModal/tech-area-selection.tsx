import React from "react";
import { TechArea } from "../../../../common/types/TechStack";
import { IonButton, IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import { Steps } from "./new-tech-stack-modal";

interface TechAreaSelectionProps {
    areas: TechArea[],
    selected: string;
    onClick: (value: string) => void,
    setStep: (step: Steps) => void,
}

const TechAreaSelection = ({areas, selected, onClick, setStep}: TechAreaSelectionProps) => {
    return (
        <>
            <h3>What area you want to interview?</h3>
            <div className="area-list">
                {
                    areas.map((area, index) => {
                        return (
                            <div
                                key={`tech-area-${index}`}
                                className={`tech-area-card ${selected === area.value && 'selected'}`}
                                onClick={() => onClick(area.value)}
                            >{area.label}</div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <IonButton
                    className="ml-auto"
                    size="small"
                    color='primary'
                    disabled={selected === ''}
                    onClick={() => setStep('skills')}
                >
                    <IonIcon slot="start" icon={chevronForward} /> Next
                </IonButton>
            </div>
        </>
    )
}

export default TechAreaSelection