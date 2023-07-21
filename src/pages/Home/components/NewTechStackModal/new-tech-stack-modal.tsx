import React, { useState } from "react";
import './new-tech-stack-modal.scss';
import AppModal from "../../../../components/AppModal/app-modal";
import { TechArea, TechLanguage, TechProfile, ValuesOf } from "../../../../common/types/TechStack";
import TechAreaSelection from "./tech-area-selection";
import TechSkillSelection from "./tech-skills-selection";
import TechDescription from "./tech-description";
import ProfileSummary from "./profile-summary";
import { useHistory } from "react-router";

interface NewTechStackModalProps {
    isOpen: boolean,
    onConfirm: () => void
    onDismiss: () => void
}

export enum Steps {
    Area = 'area',
    Skills = 'skills',
    Description = 'description',
    Profile = 'profile'
}

export type Step = ValuesOf<Steps>;

const cleanProfile = { area: '', skillSet: [{ technology_id: 0, level: null }], description: '', language: 'English' };

const NewTechStackModal: React.FC<NewTechStackModalProps> = ({ isOpen, onConfirm, onDismiss }) => {

    const [step, setStep] = useState<Step>(Steps.Area);
    const [randomSeniority, setRandomSeniority] = useState(false);
    const [selection, setSelection] = useState<TechProfile>({ ...cleanProfile });
    const history = useHistory();

    const technologies: TechLanguage[] = [
        { id: 1, name: 'React' },
        { id: 2, name: 'Angular' },
        { id: 3, name: 'Ionic' },
    ]

    const areas: TechArea[] = [
        {
            label: "Full Stack",
            value: "fullstack"
        },
        {
            label: "DevOps",
            value: "devops"
        },
        {
            label: "Backend",
            value: "backend"
        },
        {
            label: "Frontend",
            value: "frontend"
        },
        {
            label: "QA",
            value: "qa"
        }
    ]

    const selectArea = (value: string) => {
        setSelection({ ...selection, area: value });
    }

    const handleDismiss = () => {
        setSelection({ ...cleanProfile });
        setStep(Steps.Area);
        onDismiss();
    }

    const onStart = () => {
        history.push('/call');
        handleDismiss();
    }

    return (
        <AppModal
            isOpen={isOpen}
            onConfirm={onConfirm}
            onDismiss={handleDismiss}
        >
            <div className="ion-padding-horizontal new-tech-stack-modal">
                {
                    step === 'area' &&
                    <TechAreaSelection
                        areas={areas}
                        selected={selection.area}
                        onClick={selectArea}
                        setStep={setStep}
                    />
                }
                {
                    step === 'skills' &&
                    <TechSkillSelection
                        randomSeniority={randomSeniority}
                        skillSet={selection.skillSet}
                        technologies={technologies}
                        setRandomSeniority={setRandomSeniority}
                        setSkills={(skillSet) => setSelection({ ...selection, skillSet })}
                        setStep={setStep}
                    />
                }
                {
                    step === 'description' &&
                    <TechDescription
                        setStep={setStep}
                        description={selection.description}
                        language={selection.language}
                        setDescription={(description) => setSelection({ ...selection, description })}
                        setLanguage={(language) => setSelection({ ...selection, language })}
                    />
                }
                {
                    step === 'profile' &&
                    <ProfileSummary
                        profile={selection}
                        technologies={technologies}
                        setStep={setStep}
                        onStart={onStart}
                    />
                }
            </div>
        </AppModal>
    )
}

export default NewTechStackModal;