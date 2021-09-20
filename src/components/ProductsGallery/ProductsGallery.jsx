import React from 'react'
import s from './ProductsGallery.module.css'



const ProductsGallery = ({children}) => {
    
    return (
     
         <ul className={s.ProductsGallery} >            
           {children}
       </ul>
    );
}

export default ProductsGallery