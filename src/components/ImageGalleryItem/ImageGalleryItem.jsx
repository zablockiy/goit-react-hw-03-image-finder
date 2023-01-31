import React from 'react';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL,
                            searchName,
                            onClick,
                            largeImg, }) => {
  return (
      <img className={styles.image} src={webformatURL}  alt={searchName} onClick={()=> onClick(largeImg)} data-src={largeImg}/>

  );
};

export default ImageGalleryItem;

