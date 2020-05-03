import React, { useState } from "react";
import Movies from "./Movies";
import Toprated from "./Toprated";
import Upcoming from "./Upcoming";
import { Switch } from "react-router-dom";
import VideoPlayer from "./Videoplayer";

function Home() {
  return (
    <div>
     
        <Movies />
        <br/>
        <br/>
        <Toprated />
        <br/>
        <br/>
        <Upcoming />
        <br/>
        {/* <VideoPlayer/> */}
     
    </div>
  );
}

export default Home;
