import React from "react";
import Navtop from "./Navbar.jsx";
import backgroundImage from "./images/backgroundHead.jpg"
import "./css/styles.css"
import MainHead from "./maintext.jsx"




function App() {
    return <div class = "master">

    <div class="backgroundHead"
    style={{
      backgroundImage: 'url('+backgroundImage+')',
      backgroundSize: "cover",
      minheight: "100vh",
      backgroundRepeat: 'no-repeat',
    }}
  >
    
);
    <Navtop></Navtop>
    <MainHead></MainHead>
    
  </div>
  <div class="podcast-episode">
  <h1 class="heading"> Likoebe Maruping  </h1>
    <h3 class="description"> Likoebe is a Professor of Computer Information Systems whose research focuses on open innovation and collaboration in large-scale collectives. He teaches a graduate-level course on digital innovation, platform business models and open innovation. He is also an angel investor whose investing thesis emphasizes founders who develop or utilize technology to tackle society's big challenges.</h3>

    <div align="center"> 
  <iframe src="https://open.spotify.com/embed/episode/4zZVi6XcNTHlLFdhcNz7mF?theme=0" width="90%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
  </div>
  

  <div class="podcast-episode2">
  <h1 class="heading"> Julia Kahky  </h1>
    <h3 class="description"> Julia is on the investment team at Panoramic Ventures after completing a competitive rotational development program at General Motors. Her primary areas of focus for investment are enterprise software in the Healthcare, FinTech, AdTech, Compliance, and Cybersecurity verticals. She has been awarded a number of certifications in data analytics and business development and enjoys her continuous pursuit of knowledge. An avid Duke basketball fan, Julia enjoys mentoring students from her alma mater.</h3>

    <div align="center"> 
    <iframe src="https://open.spotify.com/embed/episode/4qA46nHLJLjqb5QBYlq909" width="90%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
  </div>
  </div>
}


export default App;
