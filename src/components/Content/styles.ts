import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;

    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.primary};

    padding: 20px;

    height: calc(100vh - 70px);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 13px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color.secondary}
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.color.tertiary}
    }
`;