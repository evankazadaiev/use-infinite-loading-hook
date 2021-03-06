# react-use-infinite-loading

> Infinite scroll hook for React

[![NPM](https://img.shields.io/npm/v/react-use-infinite-scroll.svg)](https://www.npmjs.com/package/react-use-infinite-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## DEMO
https://evankazadaiev.github.io/use-infinite-loading-hook/

## Install

```bash
NPM 
npm install --save react-use-infinite-loading
-------------
YARN
yarn add react-use-infinite-loading
```

## Options

| Option        | Type |  Description     | Required |  Default value  |
| --------------|:-------:| :------------:|:--------:|:---------------:|
| callback      |Function | api request   | true     |-                |
| hasMore       | Boolean |   if server has more items for us | true | - |
| startPage     | Number  |  Start page   | false    | 1 |
| offset | Number |Distance for sending request before end of scrolling container | false | 250 |
| direction | String // top or bottom | Scroll direction | false | bottom |
 
## Usage

```tsx
import React from 'react'
import useInfiniteLoading from 'react-use-infinite-loading'


const Example = () => {
  const [pokemons, setPokemons] = useState(null);
  
  const getImages = (page) => new Promise(async (resolve) => {
    const res = await getPokemons(page, 100);
    setPokemons(prev => (prev ? [...prev, ...res] : res));
  
    resolve(res);
  });
  

  const [ref, containerRef, isLoading] = useInfiniteScroll({
    hasMore: true, // if server-side has more items for us
    offset: 100, // send request 100px before the end of scrolling container
    direction: 'bottom', // scroll direction
    callback: getImages, // api request
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
```

## License

MIT © [evankazadaiev](https://github.com/evankazadaiev)
