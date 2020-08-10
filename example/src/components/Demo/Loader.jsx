import React from 'react';

const Loader = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="loader">
      {props.children}
    </div>
  );
});

export default Loader;
