import React from "react";
import loaderSrc from "./../../assets/loader.gif"

const Loader = props => {
  return <div>
      <img
      style={ {width: 100} } 
      src={loaderSrc} 
      alt="Loader Icon" 
      />
  </div>;
};

export default Loader;
