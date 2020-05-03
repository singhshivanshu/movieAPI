import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function VideoPlayer({ match }) {
  const [video, setVideo] = useState({});
  const [detail, setDetail] = useState({});

  async function playVideo() {
    const result1 = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=578cb25fbe005df502d4c65de0db071e`
    );
    const data1 = await result1.json();
    // console.log(data1.results);
    setVideo(data1.results);

    const result2 = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=578cb25fbe005df502d4c65de0db071e`
    );
    const data2 = await result2.json();
    // console.log(data2.overview)
    setDetail(data2);

    // console.log(match);
  }

  useEffect(() => {
    playVideo();
  }, []);
  // console.log(video[0] && video[0].key)

  console.log(detail)
  // console.log(video);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => event.target.pauseVideo();

  return (
    <div>
      {video && video.length !== 0 ? (
        <div>
          <YouTube
            videoId={video[0] && video[0].key}
            opts={opts}
            onReady={onReady}
          />
          <Jumbotron fluid>
            <Container>
              <h1>Overview</h1>
              <p>
                {detail && detail.overview}
              </p>
            </Container>
          </Jumbotron>
        </div>
      ) : (
        <h1>Video is unavailable..</h1>
      )}
    </div>
  );
}

export default VideoPlayer;
