import React from 'react'
import { Main } from './Login.styled'
import Logo from '../../assets/Logo.svg'
import Background from '../../assets/background.svg'
import { useNavigate } from 'react-router-dom'
import { goToMain, goToSignup } from '../../routes/coordinator'

const Login = () => {
    const navigate = useNavigate()

  return (
    <Main > 
        <img src={Logo} alt="logo"/>

       <div className='login-input'>
        <input placeholder='E-mail'/>
        <input placeholder='Senha'/>
        <button onClick={() => goToMain(navigate)}>
            Entrar
        </button>
       </div>

       <div className='login-input'>
        <p>Não possui uma conta?</p>
        <button onClick={() => goToSignup(navigate)}>Cadastre-se</button>

       </div>



    </Main>
  )
}

export default Login