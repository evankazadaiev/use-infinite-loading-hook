import React, { useState } from 'react';
import { getServerImages } from './services';
import useInfiniteScroll from 'react-use-infinite-scroll';
import Spinner from 'react-svg-spinner';
import Loader from './Loader';
import './styles.css';

const Demo = () => {
  const [images, setImages] = useState(null);
  
  const getImages = (page) => new Promise(async (resolve) => {
    const res = await getServerImages(page, 20);
    setImages(prev => (prev ? [...prev, ...res] : res));
  
    resolve(res);
  });
  

  const [ref, containerRef, isLoading] = useInfiniteScroll({
    hasMore: true,
    offset: 250,
    direction: 'bottom',
    callback: getImages,
  });
  

  return (
    <div ref={containerRef}>
      <div className="gallery">
        {images &&
          images.map((image, idx) => (
            <figure
              key={image.id}
              className={`gallery__item gallery__item--${idx + 1}`}
            >
              <img
                src={image.url}
                className="gallery__img"
               alt="Image"/>
            </figure>
          ))}
      </div>
      <Loader ref={ref}>
        {isLoading && <Spinner color="goldenrod" size="64px" thickness={2} />}
      </Loader>
    </div>
  );
};

export default Demo;
