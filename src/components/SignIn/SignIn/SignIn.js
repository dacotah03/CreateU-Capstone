import logo from '../../../assets/logo/CreateUlogo.png'
import hero from '../../../assets/Signin-background.jpeg'
import "../SignIn/SignIn.scss"
import { useNavigate } from 'react-router'

const SignIn = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dashboard')
    }
    return (
        <div className="login">
            <div className='login__hero'>
                <div className='login__hero-overlay'>
                    <img className='login__hero-overlay-img' width='100%' src={hero} alt='black woman using ring light' />
                </div>
            </div>
            <div className='login__top'>
                <img className='login__top-logo' src={logo} alt='company star swirl logo' />
            </div>
            <div className='login__form'>
                <h1 className='login__form-header'>LOGIN</h1>
                <input className='login__form-user' type='textbox' placeholder='Username'></input>
                <input className='login__form-pass' type='textbox' placeholder='Password'></input>
                <button className='login__form-submit' type='submit' onClick={handleClick}></button>
            </div>
        </div>
    );
}

export default SignIn;