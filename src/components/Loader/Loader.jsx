import React from 'react'
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css'

const loaderNew =()=>  {
 
  
  return (    
    <div className={s.loaderWrapper}>
        <Loader
        type="ThreeDots" color="#00BFFF" height={80} width={80}
      />
      </div>
     
    );
  
}

export default loaderNew