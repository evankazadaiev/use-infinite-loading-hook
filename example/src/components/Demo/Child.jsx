import React from 'react'

const Child = ({ url, name }) => (
  <figure
    key={name}
    className={`gallery__item gallery__item--${name}`}
  >
    <img
      src={url}
      className="gallery__img"
      alt="Image"/>
  </figure>
)

export default Child;
