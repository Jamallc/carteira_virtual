import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0%{
        transform: translateX(-100px);
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
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 10px;

    animation: ${animate} .5s;

    @media(max-width: 900px){
        padding: 12px 5px;
    }
`;
export const ChartArea = styled.div`
    flex: 1;
    height: 260px;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    >h2 {
            margin-bottom: 20px;
            padding-left: 17px;
        }

    @media(max-width: 1200px){
        flex-direction: column;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`;

export const Legend = styled.li`
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
        margin-right: 20px;
    }

    @media(max-width: 1280px){
        >div {
            width: 20px;
            height: 20px;
            margin-left: 16px;
        }
    }
`;
