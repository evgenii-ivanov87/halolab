import React,{Component} from 'react';
import s from './ProductsGalleryItem.module.css';
 



class ProductsGalleryItem extends Component {
    
    // handlerClick = e => {this.props.onClick(item)}
    
     
    render(){
    const { items } = this.props;
    return (
        <>
         
        {items.map((item,index) => (
          <li key={index}   className={s.products_box}>
              <p className={s.products_category}>{item.category}</p>
             <h2 className={s.products_name}>{item.name}</h2>
                <div className={s.products_price_box}>
                    <span className={s.products_price_symbol}>$</span>
                    <p className={s.products_price}>{item.price}</p>
                  <button
            type="button"
            className={s.products_button} 
            onClick={( e => {this.props.onClick(item)})}          
          >  
            BUY
                    </button>
                </div>
             

           
        </li>
      ))}


        </>    
    )}
    
    
      
    
}
export default ProductsGalleryItem