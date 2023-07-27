import React, { useState } from "react";
import './new-tech-stack-modal.scss';
import AppModal from "../../../../components/AppModal/app-modal";
import { Technology, TechProfile, ValuesOf } from "../../../../common/types/TechStack";
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

const cleanProfile = { area: '', requirements: [{ technology_name: '', seniority: null }], description: '', language: 'English', name: '' };

const NewTechStackModal: React.FC<NewTechStackModalProps> = ({ isOpen, onConfirm, onDismiss }) => {

    const [step, setStep] = useState<Step>(Steps.Area);
    const [randomSeniority, setRandomSeniority] = useState(false);
    const [selection, setSelection] = useState<TechProfile>({ ...cleanProfile });
    const history = useHistory();

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
                        selected={selection.area}
                        onClick={selectArea}
                        setStep={setStep}
                    />
                }
                {
                    step === 'skills' &&
                    <TechSkillSelection
                        randomSeniority={randomSeniority}
                        requirements={selection.requirements}
                        setRandomSeniority={setRandomSeniority}
                        setRequirements={(requirements) => setSelection({ ...selection, requirements })}
                        setStep={setStep}
                    />
                }
                {
                    step === 'description' &&
                    <TechDescription
                        setStep={setStep}
                        name={selection.name}
                        language={selection.language}
                        setName={(name) => setSelection({ ...selection, name })}
                        setLanguage={(language) => setSelection({ ...selection, language })}
                    />
                }
                {
                    step === 'profile' &&
                    <ProfileSummary
                        profile={selection}
                        setStep={setStep}
                        onStart={onStart}
                    />
                }
            </div>
        </AppModal>
    )
}

export default NewTechStackModal;