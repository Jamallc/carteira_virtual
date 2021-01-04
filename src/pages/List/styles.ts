import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .tag-filter {
        font-size: 18px;
        font-weight:500;
        background: none;
        color: ${props=> props.theme.color.white};

        padding-bottom: 5px;


        margin: 0 10px;

        margin-bottom: 10px;
        
        transition: opacity .3s;
        opacity: 0.4;

        &:hover{
            opacity: .7;
        }
    }

    .tag-filter-recurrent::after {
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.color.warning};
    }

    .tag-filter-eventual::after {
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.color.success};
    }

    .tag-actived {
        opacity: 1;
    }

`;