import './styles.css';
import Logo from '../Logo';
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';
import MenuItems from '../MenuItems';

export default function Menu() {
  return (
    <div className="menu-container">

      <div className="menu">

        <div>
          <Logo />
        </div>

        <div className="menu-items">
          <MenuItems>
            StarterPack
          </MenuItems>
          <MenuItems>
            Evolution
          </MenuItems>
          <MenuItems>
            Specialist
          </MenuItems>
        </div>

        <div className="menu-button">
          <ButtonIcon>
            Entrar
          </ButtonIcon>
          <Button>
            Começar
          </Button>
        </div>

      </div>
    </div>
  )
}
