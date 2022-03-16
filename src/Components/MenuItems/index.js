import './styles.css';

export default function MenuItems(props) {
  const children = props.children;
 
  return (
      <div className="menuitems-container">
      
          <div className="menuitem">
            {children}
          </div>
    
      </div>
  )
}
