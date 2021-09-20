
import React, {Component} from 'react'
import s from './Modal.module.css'

class modal extends Component{
   state = {
     name: '',
     number: '',
     nameDirty: false,
     numberDirty: false,
     nameError: '',
     numberError:''
  }
  
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

  hendleButtonClick = e  => {
  this.props.onClose()
  }

  blureHendle = e => {
  
    switch (e.target.name) {
      case 'Name':
        this.setState({ nameDirty: true })
       
        break
      case 'Phone number':
        this.setState({ numberDirty: true })
        
        break
    }
  }

  nameHendle = e => {
    this.setState({ name: e.target.value })
    // const re = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
    if (!(/^[a-zA-Z]+$/.test(e.target.value.replace(/\s/g, '')))) {
      this.setState({ nameError: 'Only letters allowed' })
      if (!e.target.value) {
        this.setState({ nameError: 'This field in required' })
      }
    } else {
      this.setState({ nameError:''})
    }
  }

  numberHendle = e => {
    this.setState({ number: e.target.value })
    
    if (!(/^[0-9]+$/.test(e.target.value.replace(/\s/g, '')))) {
      this.setState({ numberError: 'Only numbers allowed' })
          
    } else {
      this.setState({ numberError:''})
    }
     if (e.target.value.length < 12) {
      this.setState({ numberError: 'Should contain 12 characters' })
    }
      if (!e.target.value) {
        this.setState({ numberError: 'This field in required' })
      }
  }


  hendleFormSubmit = e => {
    
    
    this.setState({ nameDirty: false })
    this.setState({ nameError:''})
    this.setState({ numberDirty: false })
    this.setState({ nameError: '' })
    
    if (this.state.name && this.state.number) {
      console.log(this.state.name)
      console.log(this.state.number)
      this.props.onClose()
    }
    

    
  if(!e.target.value) {
    this.nameHendle(e)
    this.setState({ nameDirty: true })
    this.numberHendle(e)
    this.setState({ numberDirty: true })
  }
   
   
  }
  
render(){
  const item = this.props.currentProducts;
 
  return (
    <div className = { s.Overlay } >
      <div className = { s.Modal }>
        <div  className={s.products_box}>
              <p className={s.products_category}>{item.category}</p>
             <h2 className={s.products_name}>{item.name}</h2>
                <div className={s.products_price_box}>
                    <span className={s.products_price_symbol}>$</span>
            <p className={s.products_price}>{item.price}</p>
          </div>
          </div>
        
        <form className={s.modal_form} onSubmit={this.hendleFormSubmit}>
          {(this.state.nameDirty&&this.state.nameError)&&<p className={s.modal_form_error} >{this.state.nameError}</p>}
          <input  className={s.modal_form_input} onChange={this.nameHendle} onBlur={this.blureHendle} value={this.state.name} name="Name" type="text" placeholder="Name"  />
          <input className={s.modal_form_input} onChange={this.numberHendle} onBlur={this.blureHendle} value={this.state.number}  name="Phone number" type="text" placeholder="Number" />
          {(this.state.numberDirty&&this.state.numberError)&&<p className={s.modal_form_error} >{this.state.numberError}</p>}
        </form>

        <button type="button" className={s.Button} onClick={this.hendleFormSubmit}  >Order</button>
        <button className={s.Button_close} onClick={this.hendleButtonClick}>X</button>
      </div>
    </div>)}
  
}

  

export default  modal


