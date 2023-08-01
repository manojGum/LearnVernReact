import './ErrorModal.css';
import Container from './Container';
import Button from './Button';
const ErrorModal=(props)=>{
    return (
        <div className="backdrop" onClick={props.onClose}>
        <Container className="modal">
           <header className="header">
               <h2>{props.title}</h2>
           </header>
           <div>
               <p className="content">{props.content}</p>
           </div>
           <footer className="actions">
               <Button onClick={props.onClose}>okay</Button>
           </footer>
        </Container>
        </div>
    )
}
export default ErrorModal