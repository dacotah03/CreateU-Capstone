import logo from '../../../assets/logo/CreateUlogo.png'
import hero from '../../../assets/Signin-background.jpeg'
import google from '../../../assets/google-signin.png'
import "../SignIn/SignIn.scss"
import { Navigate, useNavigate } from 'react-router'

const SignIn = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/dashboard')
    }
    return ( 
        <div className="login">
        <div className='login__hero'>
            <div className='login__hero-overlay'>
                <img className='login__hero-overlay-img' width='100%'src={hero}/>
            </div>
            </div>
            <div className='login__top'>
                <img className='login__top-logo' src={logo}/>
            </div>
            <div className='login__form'>
            <h1 className='login__form-header'>LOGIN</h1>
            <input className='login__form-user'type='textbox' placeholder='Username'></input>
            <input  className='login__form-pass' type='textbox' placeholder='Password'></input>
            <button className='login__form-submit' type='submit'onClick={handleClick}></button>
            <img className='login__form-google'/>
            </div>
        </div>
     );
}
 
export default SignIn;