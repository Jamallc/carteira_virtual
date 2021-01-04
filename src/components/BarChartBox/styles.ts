import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    min-height: 260px;
    margin: 10px 0;

    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};

    border-radius: 10px;

    padding: 0 0 0 16px;

    display: flex;

    animation: ${animate} .5s;

    @media(max-width: 1200px){
        display: flex;
        flex-direction: column;

        width: 100%;
        height: auto;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 0 30px 20px;
    >h2 {
        margin-bottom: 10px;
    }
`;


export const LegendContainer = styled.ul`
    list-style: none;

    height: 165px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color.secondary}
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.color.tertiary}
    }

    @media(max-width: 1200px){
        display: flex;

        height: auto;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;


    >div {
        background-color: ${props => props.color};

        width: 55px;
        height: 40px;
        border-radius: 5px;

        font-size: 18px;
        line-height: 40px;
        text-align: center;
    }

    >span {
        margin-left: 5px;
    }

    @media(max-width: 1200px){
        >div {
            width: 40px;
            height: 30px;

            font-size: 12px;
            line-height: 30px;
        }
    }
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;

    padding-bottom: 15px;

    display: flex;
    justify-content: center;

    padding-top: 35px;
`;
