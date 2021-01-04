import React from 'react';

import { Container } from './styles'

interface IMenssageBoxProps {
    title: string;
    description: string;
    footerDescription: string;
    icon: string;
}

const MenssageBox: React.FC<IMenssageBoxProps> = ({
    title,
    description,
    footerDescription,
    icon
}) => {
    return(
        <Container>
            <header>
                <h1>
                    {title}
                    <img src={icon} alt={title}/>
                </h1>
                <p>{description}</p>
            </header>
            <footer>
                <span>{footerDescription}</span>
            </footer>
        </Container>
    )
}

export default MenssageBox;