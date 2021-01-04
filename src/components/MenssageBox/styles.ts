import styled, {keyframes} from 'styled-components';

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
    width: 48%;
    height: 260px;

    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};

    border-radius: 10px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    animation: ${animate} .5s;

    >header img {
        width: 35px;
        margin-left: 10px;
    }

    >header p {
        font-size: 18px;
    }

    @media(max-width: 770px){
        width: 100%;
        height: auto;
        >header h1 {
            font-size: 24px;

            >img {
                height: 20px;
                width: 20px;
            }
        }

        >header p, > footer span {
            font-size: 14px;
        }
    }

    @media(max-width: 420px){
        >header p, > footer span {
            margin-bottom: 15px;
            font-size: 18px;
        }
    }
`;