import './styles.css';
import Logo from '../Logo';
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';
import Link from '../Link';

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu">

        <div>
          <Logo />
        </div>

        <div className="menu-items">
          <Link>StarterPack</Link>
          <Link>Evolution</Link>
          <Link>Specialist</Link>
        </div>

        <div className="menu-button">
          <ButtonIcon>Entrar</ButtonIcon>
          <Button>Começar</Button>
        </div>

      </div>
    </div>
  )
}
