import './../styles/loader.module.css';

import React from 'react';

function Loader() {
  return (
    <div className="lds-ring" data-testid="loader-element">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
