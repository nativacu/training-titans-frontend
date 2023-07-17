import React from "react";
import './tech-stack-card.scss';
import { TechStack } from "../../common/types/TechStack";

interface TechStackCardProps {
    techStack?: TechStack,
    onClick: (trainingId: number) => void
}

export const TechStackCard = ({ techStack, onClick }: TechStackCardProps) => {

    return (
        <>
            {
                techStack ?
                    <div onClick={() => onClick(techStack.id)} className="tech-stack-card" >
                        <p className="ion-text-left">{techStack.creationDate}</p>
                        <h3>{techStack.name}</h3>
                        <p className="ion-text-right">{techStack.trainingCount} tries</p>
                    </div> :
                    <div className="new-tech-stack-card" onClick={() => onClick(0)}>
                        <h3>Create new</h3>
                        <img src="./assets/images/woman-working.png" alt="woman working on laptop"></img>
                    </div>
            }
        </>
    )
}