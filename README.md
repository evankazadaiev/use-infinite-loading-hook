# react-use-infinite-scroll

> Infinite scroll hook for React

[![NPM](https://img.shields.io/npm/v/react-use-infinite-scroll.svg)](https://www.npmjs.com/package/react-use-infinite-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
NPM 
npm install --save react-use-infinite-loading
-------------
YARN
yarn add react-use-infinite-loading
```

## Usage

```tsx
import React from 'react'
import useInfiniteLoading from 'react-use-infinite-loading'


const Example = () => {
  const [ref, containerRef, isLoading] = useInfiniteLoading({
     hasMore: true,
     offset: 250, // distance to Loader ref to fire callback before
     direction: 'bottom', // scroll direction, top or bottom
     callback: getImages, 
   });
    return (
        <div ref={containerRef}>
          <div className="gallery">
            ... LIST ...
          </div>
          <Loader ref={ref}>
            {isLoading && <Spinner />}
          </Loader>
        </div>
      ); 
  
}
```

## License

MIT © [evankazadaiev](https://github.com/evankazadaiev)
