import React, { useEffect, useState } from "react";
import './tech-stack-card.scss';
import { useTranslation } from "react-i18next";

interface TechStackCardProps {
    id: number,
    label: string,
    trainingCount: number,
    children: JSX.Element[] | string,
    footer: JSX.Element[] | string | JSX.Element,
    onClick: (trainingId: number) => void
}

export const TechStackCard = ({ id, label, trainingCount, onClick, children, footer }: TechStackCardProps) => {
    const arr = [1, 2, 3, 4, 5, 6];
    const [counter, setCounter] = useState<number>(0);

    const [t] = useTranslation('common');

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter(counter + 1);
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, [counter])

    return (
        <div onClick={() => onClick(id)} className="tech-stack-card" >
            {t('test')}
            {label} <br />
            {trainingCount}
            {children}
            {footer}
        </div>
    )
}