import React, {Component} from 'react'
import axios from 'axios'
import ProductsGallery from './components/ProductsGallery/ProductsGallery'
import ProductsGalleryItem from './components/ProductsGalleryItem/ProductsGalleryItem'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'




class App extends Component {
  state = {
    products:[],
    currentProducts: '',
    isOpen: false
  }

  componentDidMount() {
    
      this.fetchProducts()
    
  }

  
  
  onChangeItem = item => {
    this.setState({ currentProducts: item, })
    this.toggelModal()
   
  }

  toggelModal = () => {
    this.setState(({ isOpen }) => ({isOpen: !isOpen, }))
  } 
  
 
  fetchProducts = () => {
    
    this.setState({isLoading: true})
      axios
            .get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
        .then(response => {
              
          this.setState(prevState => ({
            products: [...prevState.products,...response.data],
            
          }))
        }).finally(() => this.setState({ isLoading: false }));
                
  }

  onBuyCheapest = () => {
    const items = this.state.products
        
  let minPriceItem = items.reduce((a, b) => a.price < b.price ? a : b);
     this.setState({ currentProducts: minPriceItem })
    this.setState({isOpen: true})
}

 

  render() {
    return (
      <>
        
      
        <ProductsGallery>
          <ProductsGalleryItem items={this.state.products} onClick={this.onChangeItem}/>
        </ProductsGallery>
        <Button onClick={this.onBuyCheapest} products={this.state.products}/>
     
        {this.state.isOpen && <Modal currentProducts={this.state.currentProducts} onClose={ this.toggelModal}/>}
       </> 
      
    
    
  );}
  
}

export default App;
