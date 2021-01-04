import styled, { keyframes } from 'styled-components';

interface ITagprops {
    color:string;
}

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
    background-color: ${props => props.theme.color.tertiary};
    list-style: none;

    margin: 10px 0;
    padding: 12px;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    position: relative;
    transition: all .3s;

    opacity: .7;

    animation: ${animate} .5s ease;

    &:hover{
        opacity: 1;
        transform: scale(1.01, 1.08);
    }

    >div {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        padding-left: 10px;
    }

    >div span {
        font-weight: 500;
        font-size: 22px
    }
`;

export const Tag = styled.li<ITagprops>`
    width: 13px;
    height: 60%;

    position: absolute;
    left: 0;

    background-color: ${props => props.color}
`;