import React from 'react';

import Button from '../../components/Button';

import Input from '../../components/Input'

import{
    Container,
    Form,
    FormTitle,
    Login
} from './styles'

const Cadastro: React.FC = () => {

    return(
        <Container>
            <Form>
                <FormTitle>Cadastro</FormTitle>

                <Input
                    placeholder='Nome'
                    type='text'
                    required
                />

                <Input
                    placeholder='E-mail'
                    type='email'
                    required
                />

                <Input
                    placeholder='Senha'
                    type='password'
                    required
                />

                <Input
                    placeholder='Digite a Senha novamente'
                    type='password'
                    required
                />

                <Button type='submit'>Cadastrar</Button>

                <Login href='/'>LogIn</Login>
            </Form>
        </Container>
    )
}

export default Cadastro;