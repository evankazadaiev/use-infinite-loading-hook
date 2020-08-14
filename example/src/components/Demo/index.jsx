import React, { useState } from 'react';
import { getPokemons } from './services';
import useInfiniteScroll from 'react-use-infinite-scroll';
import Spinner from 'react-svg-spinner';
import Loader from './Loader';
import Child from './Child';
import './styles.css';

const Demo = () => {
  const [pokemons, setPokemons] = useState(null);
  const [hasNextPage, setNextPage] = useState(null);
  
  const getImages = (page) => new Promise(async (resolve) => {
    const { results, next } = await getPokemons(page, 100);
    setPokemons(prev => (prev ? [...prev, ...results] : results));
    setNextPage(!!next);
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
        {pokemons &&
        pokemons.map((pokemon, idx) => (
            <Child {...pokemon} key={idx}/>
          ))}
      </ul>
      <Loader ref={ref}>{ isLoading && <Spinner color="goldenrod" size="64px" thickness={2} />}</Loader>
    </div>
  );
};

export default Demo;
