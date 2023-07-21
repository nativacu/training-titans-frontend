import React from "react";
import { Skill, SkillLevel, TechLanguage } from "../../../../common/types/TechStack";
import { IonButton, IonCol, IonIcon, IonItem, IonRow, IonSelect, IonSelectOption, IonToggle } from "@ionic/react";
import { add, chevronBack, chevronForward } from "ionicons/icons";
import { Steps } from "./new-tech-stack-modal";

interface TechSkillSelectionProps {
    randomSeniority: boolean;
    skillSet: Skill[],
    technologies: TechLanguage[],
    setRandomSeniority: (value: boolean) => void;
    setSkills: (skillset: Skill[]) => void,
    setStep: (step: Steps) => void,
}

const TechSkillSelection = ({ randomSeniority, setRandomSeniority, skillSet, technologies, setSkills, setStep }: TechSkillSelectionProps) => {

    const setTechnology = (skillIndex: number, value: number) => {
        const newSkillSet = [...skillSet];
        newSkillSet[skillIndex].technology_id = value;
        setSkills(newSkillSet);
    }

    const setTechnologyLevel = (skillIndex: number, value: SkillLevel) => {
        const newSkillSet = [...skillSet];
        newSkillSet[skillIndex].level = value;
        setSkills(newSkillSet);
    }

    const addLanguage = () => {
        const newSkillSet = [...skillSet];
        newSkillSet.push({ technology_id: 0, level: null });
        setSkills(newSkillSet);
    }

    const removeSkill = (index: number) => {
        const newSkillSet = [...skillSet];
        newSkillSet.splice(index, 1);
        setSkills(newSkillSet);
    }

    return (
        <>
            <h3>Select languages to evaluate</h3>
            <div className="skill-list">
                <IonRow className="ion-justify-content-end">
                    <IonToggle checked={randomSeniority} onIonChange={(e) => setRandomSeniority(e.target.checked)} labelPlacement="end" mode="ios">Set random seniority</IonToggle>
                </IonRow>
                {
                    skillSet.map((skill, index) => {

                        return (
                            <IonRow key={`skillset-${index}`}>
                                <IonCol>
                                    <IonItem>
                                        <IonSelect value={skill.technology_id} label="Technology" labelPlacement="fixed" placeholder="React"
                                            onIonChange={(e) => setTechnology(index, e.target.value)}
                                        >
                                            {
                                                technologies.map((technology) => {
                                                    return (
                                                        <IonSelectOption key={`technologies-${technology.id}`} value={technology.id}>{technology.name}</IonSelectOption>
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
                                            <IonSelect value={skill.level} label="Seniority" labelPlacement="fixed" placeholder="Junior"
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
                                    skillSet.length > 1 &&
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