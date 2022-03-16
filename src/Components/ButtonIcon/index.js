import './styles.css';
import UserIcon from '../Images/user-icon.svg';

export default function ButtonIcon(props) {
  const children = props.children;
 
  return (
      <div className="buttonicon-container">
      
          <div>
            <img className="buttonicon-icon" alt="Icone de usuário" src={UserIcon} />
          </div>

          <div className="buttonicon">
            {children}
          </div>
    
      </div>
  )
}
