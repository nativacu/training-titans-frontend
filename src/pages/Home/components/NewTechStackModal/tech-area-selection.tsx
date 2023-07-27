import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import { Steps } from "./new-tech-stack-modal";

interface TechAreaSelectionProps {
    selected: string;
    onClick: (value: string) => void,
    setStep: (step: Steps) => void,
}

const TechAreaSelection = ({selected, onClick, setStep}: TechAreaSelectionProps) => {
    
    const areas = ["Full Stack", "DevOps", "Backend", "Frontend", "QA"]

    return (
        <>
            <h3>What area you want to interview?</h3>
            <div className="area-list">
                {
                    areas.map((area, index) => {
                        return (
                            <div
                                key={`tech-area-${index}`}
                                className={`tech-area-card ${selected === area && 'selected'}`}
                                onClick={() => onClick(area)}
                            >{area}</div>
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
                    onClick={() => setStep(Steps.Skills)}
                >
                    <IonIcon slot="start" icon={chevronForward} /> Next
                </IonButton>
            </div>
        </>
    )
}

export default TechAreaSelection