import React, { useState, useEffect } from "react";
import SeriesList from "./../../components/SeriesList";
import Loader from "./../../components/Loader";
import Intro from "./../../components/Intro";

const Series = props => {
  const [series, setSeries] = useState([]);
  const [seriesName, setSeriesName] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // setTimeout(()=> {
    //   setSeries([...series, "Vikings", "Game of Thrones"])
    // }, 2000)
    // fetch("http://api.tvmaze.com/search/shows?q=Vikings")
    // .then(response => response.json())
    // .then(json => {
    //   console.log(json);
    //   setSeries(json);
    // });
  }, []);

  const onSeriesInputChange = e => {
    setSeriesName(e.target.value);
    setIsFetching(true);
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setSeries(json);
        setIsFetching(false);
      });
  };

  return (
    <div>
      <Intro message="Here you can find all of your loved TV Series" />

      <div>
        <input type="text" onChange={onSeriesInputChange} value={seriesName} />
      </div>
      {!isFetching && series.length === 0 && seriesName.trim() === "" && (
        <p>Please enter series name into the Input</p>
      )}

      {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
        <p>No TV Series have been found with this name</p>
      )}

      {isFetching && <Loader />}
      {!isFetching && <SeriesList list={series} />}
    </div>
  );
};

export default Series;
