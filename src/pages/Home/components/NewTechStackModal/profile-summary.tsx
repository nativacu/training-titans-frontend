import React from "react";
import { TechLanguage, TechProfile } from "../../../../common/types/TechStack";
import { IonButton, IonIcon, } from "@ionic/react";
import { chevronBack, play } from "ionicons/icons";
import { Steps } from "./new-tech-stack-modal";

interface ProfileSummaryProps {
    profile: TechProfile,
    technologies: TechLanguage[],
    onStart: () => void,
    setStep: (step: Steps) => void,
}

const ProfileSummary = ({ profile, technologies, setStep, onStart }: ProfileSummaryProps) => {

    const getTechnologyLabel = (id: number): string => {
        if (technologies) {
            return technologies.find((tech) => tech.id === id)?.name || '';
        }
        return '';
    }

    return (
        <>
            <h3>Profile</h3>
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
                        profile.skillSet.map((skill) => {
                            return (
                                <li key={skill.technology_id}>{getTechnologyLabel(skill.technology_id)}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="footer">
                <IonButton
                    size="small"
                    color='light'
                    onClick={() => setStep('description')}
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