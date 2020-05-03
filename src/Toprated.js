import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Toprated() {
  const [top_rated, setMovies] = useState([]);

  async function topRatedMovies() {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=578cb25fbe005df502d4c65de0db071e`
    );
    const data = await result.json();
    // console.log(data.results);

    setMovies(data.results);
  }

  useEffect(() => {
    topRatedMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <h2 style={{ color: "gold", textAlign: "left", marginLeft: "35px" }}>
        Top Rated...
      </h2>
      <Slider {...settings}>
        {top_rated.map((ele) => {
          return (
            <div>
              <Link to={`/videoplayer/${ele.id}`}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`http://image.tmdb.org/t/p/w500${ele.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Text>
                      <h4>Rating: {ele.vote_average}</h4>
                      <hr />
                      <h6>Release: {ele.release_date}</h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Toprated;
