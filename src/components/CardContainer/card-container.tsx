import React from "react";
import './card-container.scss';

interface CardContainerProps {
    className?: string;
    children: Array<JSX.Element | string> | JSX.Element | string;
}

const CardContainer: React.FC<CardContainerProps> = (props) => {
    return (
        <div className={`card-container ${props.className}`}>
            {props.children}
        </div>
    )
}

export default CardContainer;