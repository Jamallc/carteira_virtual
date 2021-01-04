import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.color.primary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    >h2 {
        color: ${props => props.theme.color.white};
        margin-left: 10px;
    }

    >img {
        height: 40px;
    }
`;

export const FormTitle = styled.h1`
    color: ${props => props.theme.color.white};

    margin-bottom: 40px;
    
    &::after{
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.color.warning};
}
`;

export const Form = styled.form`
    width: 300px;
    height: 320px;

    padding: 30px;

    border-radius: 10px;

    background-color: ${props => props.theme.color.tertiary};

    >input {
        border: 1px solid ${props => props.theme.color.primary}
    }

`;

export const Cadastro = styled.a`
    text-decoration: none;

    color: ${props => props.theme.color.info};
    text-decoration: none;

    margin: 10px 0;

    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }
`;

