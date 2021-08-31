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
    <Navtop></Navtop>
    <MainHead></MainHead>
    
  </div>
  
  <div class="podcast-episode1">
    <h1 class="heading"> Brandy Nagel 
    
    </h1>
    <h3> </h3>

  <iframe src="https://open.spotify.com/embed/episode/5212Ya0Elz9Agzi8BV7pma?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

  
  </div>

  <div class="podcast-episode2">

  <h1 class="heading"> Likoebe Maruping 
    
    </h1>

  <iframe src="https://open.spotify.com/embed/episode/4zZVi6XcNTHlLFdhcNz7mF?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

  
  </div>
  
  </div>
}


export default App;
