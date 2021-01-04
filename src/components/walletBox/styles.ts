import styled, { keyframes } from 'styled-components';

interface IContainerProps {
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

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};

    width: 32%;
    height: 150px;
    
    margin: 10px 0;
    padding: 10px 20px;

    border-radius: 7px;

    color: ${props => props.theme.color.white};

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;

    >img{
        position: absolute;

        height: 110%;
        right: -30px;
        top: -10px;

        opacity: .3;
    }

    >span{ 
        font-size: 18px;
        font-weight: 500;
    }

    >small{
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 770px){
        >span {
            font-size: 14px;
        }

        >h1 {
            word-wrap: break-word;
            font-size: 22px;
            
            >strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }
    @media(max-width: 440px){
        width: 100%;

        >span{ 
        font-size: 26px;
        font-weight: 500;
        }

        >h1 {
           display: flex;
           font-size: 30px;
            
            >strong {
                position: initial;
                width: auto;
                font-size: 22px;
            }

            >strong::after {
                display: inline-block;
                content: ' ';
                width: 1px;
            }
        }

        >small{
        font-size: 15px;
        position: absolute;
        bottom: 10px;
    }
    }

`;