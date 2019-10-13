import React, { useState, useEffect } from "react";
import Loader from "./../../components/Loader";

const SingleSeries = props => {
  console.log(props);
  const [show, setShow] = useState(null);

  useEffect(() => {
    const { id } = props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
      .then(response => response.json())
      .then(json => {
        setShow(json);
        console.log(json);
      });
  }, []);
  return (
    <div>
      {show === null && <Loader />}
      {show !== null && 
      <div>
          <p>{show.name}</p>
          <p>Premeired - {show.premiered}</p>
          <p>Rating - {show.rating.average }</p>
          <p>
              <img alt="Show" src={show.image.medium} />
          </p>
     </div>}
    </div>
  );
};

export default SingleSeries;
