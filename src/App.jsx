import React from "react";
import Navtop from "./Navbar.jsx"
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
    
    <Navtop> </Navtop>
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


  <div class="podcast-episode2">
  <h1 class="heading"> Brandy Nagel  </h1>
    <h3 class="description"> Brandy Nagel works at Georgia Tech's Enterprise Innovation Institute, in the Atlanta MBDA Business Center. She is excited about the new initiative: The Southeast MBDA Inner City Innovation Hub.
    She has also been working with the Economic Development Lab. They help universities and communities grow with innovation-led economic development programs. They teach evidence-based entrepreneurship (Lean Startup) and offer other programs to support entrepreneurship and economic development. She has also been a a part of the NSF I-Corps program since 2012.
    Her recent projects involve helping entrepreneurs and entrepreneur support organizations in the greater Atlanta area, Puerto Rico, Chile, South Korea, and India.
</h3>

    <div align="center"> 
    <iframe src="https://open.spotify.com/embed/episode/5212Ya0Elz9Agzi8BV7pma?theme=0" width="90%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
  </div>
  <div class="podcast-episode2">
  <h1 class="heading"> Andrew Zhou  </h1>
    <h3 class="description"> Andrew is currently helping teams build great cultural habits at Kona. Previously worked on FCPX at Apple and studied computer science at UCLA
</h3>

    <div align="center"> 
    <iframe src="https://open.spotify.com/embed/episode/7eSLdzrAvs8rHiHKD3XRfW" width="90%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
  </div>

  </div>
  

}



export default App;
