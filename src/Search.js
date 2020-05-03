import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Search({ match }) {
  const [res, setRes] = useState({});
  const params = new URLSearchParams(window.location.search);

  const query = params.get("query");

  async function multiSearch() {
    const result = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=578cb25fbe005df502d4c65de0db071e&language=en-US&query=${query}&page=1&include_adult=false`
    );
    let data = await result.json();
    // console.log(data.results);

    setRes(data.results[0]);
  }

  useEffect(() => {
    multiSearch();
  }, [query]);

  console.log(res);

  return (
    <div className="container">
      {res.media_type === "person" && (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`http://image.tmdb.org/t/p/w500/${res.profile_path}`}
            />
            <Card.Body>
              <Card.Title>{res.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      )}

      {res.media_type === "movie" && (
        <div>
          <Link to={`/videoplayer/${res.id}`}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`http://image.tmdb.org/t/p/w500${res.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{res.original_title}</Card.Title>
                <Card.Text>
                  <p>Rating: {res.vote_average}</p>
                  <hr />
                  <h6>Release: {res.release_date}</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      )}

      {res.media_type === "tv" && (
        <div>
          <Link to={`/videoplayer/${res.id}`}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`http://image.tmdb.org/t/p/w500${res.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{res.original_title}</Card.Title>
                <Card.Text>
                  <p>Rating: {res.vote_average}</p>
                  <hr />
                  <h6>Release: {res.release_date}</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Search;
