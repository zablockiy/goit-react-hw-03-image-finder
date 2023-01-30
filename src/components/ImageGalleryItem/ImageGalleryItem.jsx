import React from 'react';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL,
                            searchName,
                            onClick,
                            largeImageURL, }) => {
  return (
      <img className={styles.image} src={webformatURL}  alt={searchName} onClick={onClick} data-src={largeImageURL}/>

  );
};

export default ImageGalleryItem;

