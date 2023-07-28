import React, { useState } from "react";
import './new-tech-stack-modal.scss';
import AppModal from "../../../../components/AppModal/app-modal";
import { TechProfile, ValuesOf } from "../../../../common/types/TechStack";
import TechAreaSelection from "./tech-area-selection";
import TechSkillSelection from "./tech-skills-selection";
import TechDescription from "./tech-description";
import ProfileSummary from "./profile-summary";
import { useHistory } from "react-router";
import { GeneralService } from "../../../../services/general.service";
import { makeConversation } from "../../../../common/types/Conversation";

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

const cleanProfile = { area: '', requirements: [{ technology_name: '', seniority: null }], description: '', language: {id: 1, name: 'English'}, name: '' };

const NewTechStackModal: React.FC<NewTechStackModalProps> = ({ isOpen, onConfirm, onDismiss }) => {

    const [step, setStep] = useState<Step>(Steps.Area);
    const [randomSeniority, setRandomSeniority] = useState(false);
    const [selection, setSelection] = useState<TechProfile>({ ...cleanProfile });
    const [profileId, setProfileId] = useState<number>(0);
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
        const payload = makeConversation(profileId);
        new GeneralService().saveConversation(payload).then((result) => {
            history.push({pathname: '/call', state: {callId: result.data.id}});
            handleDismiss();
        })
    }
    
    const onConfirmProfile = () => {
        saveProfile();
    }

    const saveProfile = () => {
        const payload = {...selection, language: selection.language.name, description: "test"}
        new GeneralService().saveProfile(payload).then((result) => {
            setProfileId(result.data.id);
            setStep(Steps.Profile);
        })
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
                        name={selection.name}
                        language={ selection.language.name}
                        onConfirmProfile={onConfirmProfile}
                        setName={(name) => setSelection({ ...selection, name })}
                        setLanguage={(language) => setSelection({ ...selection, language: {id: 1, name: language} })}
                        setStep={setStep}
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