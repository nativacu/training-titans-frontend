import React, { useState } from "react";
import './new-tech-stack-modal.scss';
import AppModal from "../../../../components/AppModal/app-modal";
import { TechProfile, ValuesOf } from "../../../../common/types/TechStack";
import TechAreaSelection from "./tech-area-selection";
import TechSkillSelection from "./tech-skills-selection";
import TechDescription from "./tech-description";
import ProfileSummary from "./profile-summary";
import { GeneralService } from "../../../../services/general.service";
import { makeConversation } from "../../../../common/types/Conversation";
import { use } from "i18next";
import { useIonRouter } from "@ionic/react";
import useConsumer from "../../../../common/hooks/useConsumer";
import { useInterviewContext } from "../../../../common/hooks/useInterviewContext";

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

const cleanProfile = { area: 'Frontend', requirements: [{ technology_id: '', technology_name: '', seniority: null }], description: '', language: {name: 'English', id: 1}, name: '' };

const NewTechStackModal: React.FC<NewTechStackModalProps> = ({ isOpen, onConfirm, onDismiss }) => {
    const {setChatId} = useInterviewContext();
    const [step, setStep] = useState<Step>(Steps.Area);
    const [randomSeniority, setRandomSeniority] = useState(false);
    const [selection, setSelection] = useState<TechProfile>({ ...cleanProfile });
    const [profileId, setProfileId] = useState<number>(0);
    const router = useIonRouter();

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
            console.log(result.data.id);
            setChatId(result.data.id);
            router.push(`/call/${result.data.id}`, 'forward');
            handleDismiss();
        })
    }
    
    const onConfirmProfile = () => {
        saveProfile();
    }

    const saveProfile = () => {
        const newProfile = {...selection, description: "John Doe has been working for years at ABC Company knows 3 programming languages including Javascript with React. Started working in 2019 and has been in three companies, has experience with leadership positions."};
        const payload = {...newProfile, language: selection.language.name}
        new GeneralService().saveProfile(payload).then((result) => {
            setProfileId(result.data.id);
            setSelection({...newProfile, id: result.data.id});
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
                        onConfirmProfile={onConfirmProfile}
                        setName={(name) => setSelection({ ...selection, name })}
                        setStep={setStep}
                        language={selection.language}
                        setLanguage={(language) => { setSelection({ ...selection, language }) }}
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