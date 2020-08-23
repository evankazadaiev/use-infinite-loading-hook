import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Child = ({ url, name, thumbnailUrl }) => (
  <div className={`gallery__item gallery__item--${name}`}>
    <LazyLoadImage
      alt="img"
      visibleByDefault
      effect='blur'
      className="gallery__img"
      src={url}
      placeholderSrc={thumbnailUrl}
    />
  </div>
)

export default Child;
