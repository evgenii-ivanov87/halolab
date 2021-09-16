import React, {Component} from 'react'
import s from './Button.module.css'

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});


class Button extends Component {
  
  handelSearch = () => {
  this.props.onClick()
  }
  render() {
   
      return (
    <div className = { s.ButtonWrapper } >
      <button type="button" onClick={this.handelSearch} className={s.Button}>Load more...</button>
      </div>
        
    )}
    
  
}

export default Button