import LogoImage from '../Images/frontacademy-logo-branco.svg';
import './styles.css';

function Logo() {
  return (
    <div className="logo-container">
      
        <img alt="Logo Front Academy" className="logo" 
        src={LogoImage} />
    
    </div>
  )
}

export default Logo;