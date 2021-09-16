import React,{Component} from 'react';
import s from './ImageGalleryItem.module.css';
 



class ImageGalleryItem extends Component {
    
    handlerClick = e => {this.props.onClick(e.target.srcset)}
    
     
    render(){
    const { items } = this.props;
        return (
            console.log(items),
            <h1>Hello</h1>
        // <>
        //     {items.map((item) => (<li className={s.ImageGalleryItem} key={item.id} onClick={this.handlerClick}>
        //         <img className={s.ImageGalleryItemIimage} src={item.webformatURL} alt={item.tage} srcSet={item.largeImageURL }/>
        //     </li>))}
        // </>    
    )}
    
    
      
    
}
export default ImageGalleryItem