import './ErrorModal.css';
import Container from './Container';
import Button from './Button';
import { Fragment } from 'react';
import ReactDom from 'react-dom';
const Backdrop=(props)=>{
    return <div className="backdrop" onClick={props.onClose}></div>
}
const Overlay=(props)=>{
    return (
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
    )
} 
const ErrorModal=(props)=>{
    return (
        // <div className="backdrop" onClick={props.onClose}>
        // <Container className="modal">
        //    <header className="header">
        //        <h2>{props.title}</h2>
        //    </header>
        //    <div>
        //        <p className="content">{props.content}</p>
        //    </div>
        //    <footer className="actions">
        //        <Button onClick={props.onClose}>okay</Button>
        //    </footer>
        // </Container>
        // </div>
       <Fragment>
           {ReactDom.createPortal(<Backdrop onClose={props.onClose}></Backdrop>,document.getElementById("backdrop-root"))}
           {ReactDom.createPortal(<Overlay title={props.title} content={props.content} onClose={props.onClose}></Overlay>,document.getElementById('overlay-root'))}
        </Fragment>
    )
}
export default ErrorModal