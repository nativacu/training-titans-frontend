import React from "react";
import { TechProfile } from "../../../../common/types/TechStack";
import { IonButton, IonIcon, } from "@ionic/react";
import { chevronBack, play } from "ionicons/icons";
import { Steps } from "./new-tech-stack-modal";

interface ProfileSummaryProps {
    profile: TechProfile,
    onStart: () => void,
    setStep: (step: Steps) => void,
}

const ProfileSummary = ({ profile, setStep, onStart }: ProfileSummaryProps) => {

    return (
        <>
            <h3>Profile {profile.name}</h3>
            <div className="profile-summary">
                <h2>John Doe</h2>
                {profile.description ||
                    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy 
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                
                <hr />
                <h5>Skills</h5>
                <ul>
                    {
                        profile.requirements.map((requirement) => {
                            return (
                                <li key={requirement.technology_name}>{requirement.technology_name} {requirement.seniority}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="footer">
                <IonButton
                    size="small"
                    color='light'
                    onClick={() => setStep(Steps.Description)}
                >
                    <IonIcon slot="start" icon={chevronBack} /> Back
                </IonButton>
                <IonButton
                    size="small"
                    color='secondary'
                    onClick={onStart}
                >
                    <IonIcon slot="start" icon={play} /> Start
                </IonButton>
            </div>
        </>
    )
}

export default ProfileSummary;