import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import * as C from '../LoginCount/LoginCountStyled';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';

function LoginCreateCount() {
  return (
    <C.container>
      <Link to='/Login'>
        <ArrowLeft
          size={22}
        />
      </Link>
      <form action="">
        <legend>
          <span>Criar</span> Conta
        </legend>

        <C.container>
          <div>
            <Inputs label='Nome:' type='text' />
            <Inputs label='sobrenome' type='text' />
          </div>
        </C.container>

        <C.container>
          <div>
            <Inputs label='E-mail' type='email' />
            <Inputs label='contacto' type='number' />
          </div>
        </C.container>

        <C.container>
          <div>
            <Inputs label='Password' type='password' />
            <Inputs label='Informe a senha novamente:' type='password' />
          </div>
        </C.container>

        <C.container>
          <Inputs label='data' type='date' />
        </C.container>

        <Button text='Cadastrar' />
      </form>
    </C.container>
  );

}

export default LoginCreateCount;