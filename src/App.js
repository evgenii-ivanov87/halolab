import React, {Component} from 'react'
import axios from 'axios'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import item from './components/test.json'




class App extends Component {
  state = []
  setState(item)
    
  // componentDidMount() {
    
  //     this.fetchPhoto()
  //   console.log(this.state)
  // }

  onChangeQuery = query => {
    this.setState({ search: query,currentPage: 1,photos:[]})       
        
  }
  
  onChangeItem = item => {
    this.setState({ currentImg: item, })
    this.toggelModal()

    
        
  }

  toggelModal = () => {
    this.setState(({ isOpen }) => ({isOpen: !isOpen, }))
  } 
  
 
  fetchPhoto = () => {
    
    this.setState({isLoading: true})
      axios
            .get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
        .then(response => { return response }).then(data=>this.setState(data.data ))
        
        .finally(() => this.setState({ isLoading: false }));
                
  }

  render() {
    return (
           
      <>                           
        <ImageGallery>
          <ImageGalleryItem items={this.state} onClick={this.onChangeItem}/>
        </ImageGallery>
        {this.state.length>0 && !this.state.isLoading && (<Button onClick={this.fetchPhoto} photo={this.state}/>) }
        {this.state.isOpen && <Modal url={this.state.currentImg} onClose={ this.toggelModal}/>} 
       </>   
    
    
  );}
  
}

export default App;
