import './styles.css';

export default function Link(props) {
  const children = props.children;
 
  return (
      <div className="links-container">
      
          <div className="link">
            {children}
          </div>
    
      </div>
  )
}
