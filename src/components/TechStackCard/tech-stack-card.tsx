import React from "react";
import './tech-stack-card.scss';
import { TechProfile } from "../../common/types/TechStack";

interface TechStackCardProps {
    profile?: TechProfile,
    onClick: (trainingId: number) => void
}

export const TechStackCard = ({ profile, onClick }: TechStackCardProps) => {

    return (
        <>
            {
                profile ?
                    <div onClick={() => onClick(profile.id || 0)} className="tech-stack-card" >
                        <p className="ion-text-left">{profile.language.name}</p>
                        <h3>{profile.name}</h3>
                        <div className="ion-text-right requirements">
                            {profile.requirements.slice(0, 3).map((requirement, index) => {
                                return (
                                    <span key={`prof-requirement-${index}`}>{requirement.technology_name}</span>
                                )
                            })}
                        </div>
                    </div> :
                    <div className="new-tech-stack-card" onClick={() => onClick(0)}>
                        <h3>Create new</h3>
                        <img src="./assets/images/woman-working.png" alt="woman working on laptop"></img>
                    </div>
            }
        </>
    )
}