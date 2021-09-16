
import React, {Component} from 'react'
import s from './Modal.module.css'

class modal extends Component{
  
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
    
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = e => {
    if (e.code === 'Escape') {
       this.props.onClose()
     }
    
  }

  hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  }
render(){
  const { url, tittel = '' } = this.props;
  
  return (
    <div className = { s.Overlay } onClick={this.hendleBackdropClick}>
      <div className = { s.Modal }>
        <img src={url} alt={tittel } width="800"/>
      </div>
    </div>)}
  
}

  

export default  modal


