import React, { useMemo } from 'react';



import dollarImg from '../../assets/dollar.svg'
import arrowDownImg from '../../assets/arrow-down.svg'
import arrowUpImg from '../../assets/arrow-up.svg'
import CountUp from 'react-countup'

import { Container } from './styles'

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    color: string;
    icon: 'dolar' | 'arrowDown' | 'arrowUp';
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerLabel,
    color,
    icon
}) => {

    const iconSelected = useMemo(() => {
        if(icon === 'dolar') {
            return dollarImg
        } else if(icon === 'arrowUp') {
            return arrowUpImg
        } else {
            return arrowDownImg
        }
    },[icon]);

    return(
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp 
                    end={amount}
                    separator="."
                    decimal=','
                    decimals={2}
                    duration={1}
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    )
}

export default WalletBox;