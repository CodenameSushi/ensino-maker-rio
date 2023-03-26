import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { goToLogin, goToMain } from '../../routes/coordinator'
import { Main } from './Signup.styled'

const Signup = () => {
    const navigate = useNavigate()
  return (
    <Main>
        <img src={Logo} alt="logo"/>

       <div className='login-input'>
        <input placeholder='Nome Completo'/>

        <input placeholder='E-mail'/>
        <input placeholder='Senha'/>
        <button onClick={() => goToMain(navigate)}>
            Cadastrar
        </button>
       </div>

       <div className='signup'>
        <p>Já possui uma conta?</p>
        <button onClick={() => goToLogin(navigate)}>Entrar</button>

       </div>



    </Main>
  )
}

export default Signup