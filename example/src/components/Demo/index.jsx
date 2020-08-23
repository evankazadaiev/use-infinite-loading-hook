import React, { useState } from 'react';
import { getServerImages } from './services';
import useInfiniteScroll from 'react-use-infinite-scroll';
import Spinner from 'react-svg-spinner';
import Loader from './Loader';
import Child from './Child';
import './styles.css';

const Demo = () => {
  const [images, setImages] = useState([]);
  const [hasNextPage, setNextPage] = useState(null);
  
  const getImages = (page) => new Promise(async (resolve) => {
    const { results, next } = await getServerImages(page, 100);
    setImages(prev => (prev ? [...prev, ...results] : results));
    setNextPage(next);
    resolve(results);
  });
  

  const [ref, containerRef, isLoading] = useInfiniteScroll({
    hasMore: hasNextPage,
    offset: 100,
    direction: 'bottom',
    callback: getImages,
  });

  return (
    <div ref={containerRef}>
      <ul className="gallery">
        { images.map((image, idx) => (
            <Child {...image} key={idx}/>
          ))}
      </ul>
      <Loader ref={ref}>{ isLoading && <Spinner color="goldenrod" size="64px" thickness={2} />}</Loader>
    </div>
  );
};

export default Demo;
