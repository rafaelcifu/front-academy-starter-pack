import './styles.css';

export default function Button(props) {
  const children = props.children;
  
  return (
   <div className="button-container">

      <div className="button">
       {children}
      </div>    
   
    </div>
  )
}
