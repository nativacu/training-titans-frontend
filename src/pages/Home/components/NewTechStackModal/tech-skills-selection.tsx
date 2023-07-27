import React, { useEffect, useState } from "react";
import { Requirement, Seniority, Technology } from "../../../../common/types/TechStack";
import { IonButton, IonCol, IonIcon, IonItem, IonRow, IonSelect, IonSelectOption, IonToggle } from "@ionic/react";
import { add, chevronBack, chevronForward } from "ionicons/icons";
import { Steps } from "./new-tech-stack-modal";
import { GeneralService } from "../../../../services/general.service";

interface TechSkillSelectionProps {
    randomSeniority: boolean;
    requirements: Requirement[],
    setRandomSeniority: (value: boolean) => void;
    setRequirements: (requirements: Requirement[]) => void,
    setStep: (step: Steps) => void,
}

const TechSkillSelection = ({ randomSeniority, setRandomSeniority, requirements, setRequirements, setStep }: TechSkillSelectionProps) => {

    const [technologies, setTechnologies] = useState<Technology[]>([]);

    const setTechnology = (skillIndex: number, value: string) => {
        const newSkillSet = [...requirements];
        newSkillSet[skillIndex].technology_name = value;
        setRequirements(newSkillSet);
    }

    const setTechnologyLevel = (skillIndex: number, value: Seniority) => {
        const newSkillSet = [...requirements];
        newSkillSet[skillIndex].seniority = value;
        setRequirements(newSkillSet);
    }

    const addLanguage = () => {
        const newSkillSet = [...requirements];
        newSkillSet.push({ technology_name: '', seniority: null });
        setRequirements(newSkillSet);
    }

    const removeSkill = (index: number) => {
        const newSkillSet = [...requirements];
        newSkillSet.splice(index, 1);
        setRequirements(newSkillSet);
    }

    useEffect(() => {
        new GeneralService().getTechnologies().then((result) => {
            setTechnologies(result.data.technologies);
        })
    }, [])

    const handleRandomSeniority = (value: boolean) => {
        setRandomSeniority(value);
        if(value) {
            setRequirements(requirements.map((requirement) => {
                requirement.seniority = null;
                return requirement;
            }))
        }
    }

    return (
        <>
            <h3>Select languages to evaluate</h3>
            <div className="skill-list">
                <IonRow className="ion-justify-content-end">
                    <IonToggle checked={randomSeniority} onIonChange={(e) => handleRandomSeniority(e.target.checked)} labelPlacement="end" mode="ios">Set random seniority</IonToggle>
                </IonRow>
                {
                    requirements.map((requirement, index) => {

                        return (
                            <IonRow key={`skillset-${index}`}>
                                <IonCol>
                                    <IonItem>
                                        <IonSelect value={requirement.technology_name} label="Technology" labelPlacement="fixed"
                                            onIonChange={(e) => setTechnology(index, e.target.value)}
                                        >
                                            {
                                                technologies.map((technology) => {
                                                    return (
                                                        <IonSelectOption key={`technologies-${technology.id}`} value={technology.name}>{technology.name}</IonSelectOption>
                                                    )
                                                })
                                            }
                                        </IonSelect>
                                    </IonItem>
                                </IonCol>
                                {
                                    !randomSeniority &&
                                    <IonCol>
                                        <IonItem>
                                            <IonSelect value={requirement.seniority} label="Seniority" labelPlacement="fixed"
                                                onIonChange={(e) => setTechnologyLevel(index, e.target.value)}
                                            >
                                                <IonSelectOption value="junior">Junior</IonSelectOption>
                                                <IonSelectOption value="semisenior">Mid</IonSelectOption>
                                                <IonSelectOption value="senior">Senior</IonSelectOption>
                                            </IonSelect>
                                        </IonItem>
                                    </IonCol>
                                }
                                {
                                    requirements.length > 1 &&
                                    <IonCol size="2">
                                        <IonButton size="small" fill="clear" color='danger'
                                            onClick={() => removeSkill(index)}
                                        >Remove</IonButton>
                                    </IonCol>
                                }
                            </IonRow>
                        )
                    })
                }

                <IonButton size="small" fill="clear" color='secondary' onClick={addLanguage}>
                    <IonIcon icon={add} slot="start" /> Add technology
                </IonButton>
            </div>
            <div className="footer">
                <IonButton
                    size="small"
                    color='light'
                    onClick={() => setStep(Steps.Area)}
                >
                    <IonIcon slot="start" icon={chevronBack} /> Back
                </IonButton>
                <IonButton
                    size="small"
                    color='primary'
                    onClick={() => setStep(Steps.Description)}
                >
                    <IonIcon slot="start" icon={chevronForward} /> Start
                </IonButton>
            </div>
        </>
    )
}

export default TechSkillSelection