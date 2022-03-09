import React from "react";
import Navtop from "./Navbar.jsx";
import backgroundImage from "./images/BackgroundPodcast.jpg";
import "./css/styles.css";
import MainHead from "./maintext.jsx";
import Divider from "@material-ui/core/Divider";
import Card1 from "./cardox.jsx"
import Card2 from "./cardcreatex.jsx"

function App() {
  return (
    <div class="master">
      <div
        class="backgroundHead"
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundSize: "cover",
          minheight: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navtop> </Navtop>
        <MainHead></MainHead>

      </div>
      <div class="podcast-episode">
        <h1 class="heading"> Kevin Chandra and Putri Karunia </h1>
        <h3 class="description">
          {" "}
          Kevin Chandra is the CEO of Typedream. He is an amazing entrepreneur and loves to build cool technologies to assist people in building websites no-code websites.
          <br /> Putri Karunia is the CTO of Typedream. She is an enthusiast builder and talks about early stage software scaling and development.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/3TWisyezseUhCGEz8EcJ8n?theme=0" 
            title = "Kevin Chandra and Putri Karunia Podcast from Typedream"
            width="90%"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          
        </div>
        </div>



      <div class="podcast-episode2">
        <h1 class="heading"> Ethan Berg </h1>
        <h3 class="description">
          {" "}
          Founder and CEO of Agora World, Ethan is a Metaverse enthusiast and entrepreneur.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/3wivL4KUST6h73WzGYIVtD?utm_source=generator&theme=0"
            title = "Podcast Episode with Ethan Berg"
            width="90%"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          
        </div>
        </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Julia Kahky </h1>
        <h3 class="description">
          {" "}
          Julia is on the investment team at Panoramic Ventures after completing
          a competitive rotational development program at General Motors. Her
          primary areas of focus for investment are enterprise software in the
          Healthcare, FinTech, AdTech, Compliance, and Cybersecurity verticals.
          She has been awarded a number of certifications in data analytics and
          business development and enjoys her continuous pursuit of knowledge.
          An avid Duke basketball fan, Julia enjoys mentoring students from her
          alma mater.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/4qA46nHLJLjqb5QBYlq909?utm_source=generator&theme=0"
            title = "Podcast Episode"
            width="90%"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          
        </div>
        
        {/*
        <div class="icons"> 
        <a
        href="https://twitter.com/intent/tweet?url=https://open.spotify.com/episode/4qA46nHLJLjqb5QBYlq909?go=1&sp_cid=6d333377-047f-4990-98c5-90777c139c5b&utm_source=embed_player_p&utm_medium=desktop&nd=1&text=Just%20heard%20this%20cool%20podcast%20hosted%20by%20@Capercastmedia!" target ="_blank"> 

        <TwitterIcon style={{fontsize: 75, color:'blue'}}/>
        </a>
       
        </div>
        */}
        
      </div>


      <div class="podcast-episode2">
        <h1 class="heading"> Brandy Nagel </h1>
        <h3 class="description">
          {" "}
          Brandy Nagel works at Georgia Tech's Enterprise Innovation Institute,
          in the Atlanta MBDA Business Center. She is excited about the new
          initiative: The Southeast MBDA Inner City Innovation Hub. She has also
          been working with the Economic Development Lab. They help universities
          and communities grow with innovation-led economic development
          programs. They teach evidence-based entrepreneurship (Lean Startup)
          and offer other programs to support entrepreneurship and economic
          development. She has also been a a part of the NSF I-Corps program
          since 2012. Her recent projects involve helping entrepreneurs and
          entrepreneur support organizations in the greater Atlanta area, Puerto
          Rico, Chile, South Korea, and India.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/5212Ya0Elz9Agzi8BV7pma?theme=0"
            width="90%"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title = "Podcast Episode"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Likoebe Maruping </h1>
        <h3 class="description">
          {" "}
          Likoebe is a Professor of Computer Information Systems whose research
          focuses on open innovation and collaboration in large-scale
          collectives. He teaches a graduate-level course on digital innovation,
          platform business models and open innovation. He is also an angel
          investor whose investing thesis emphasizes founders who develop or
          utilize technology to tackle society's big challenges.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/4zZVi6XcNTHlLFdhcNz7mF?utm_source=generator&theme=0"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Andrew Zhou </h1>
        <h3 class="description">
          {" "}
          Andrew is currently helping teams build great cultural habits at Kona.
          Previously worked on FCPX at Apple and studied computer science at
          UCLA.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/7eSLdzrAvs8rHiHKD3XRfW"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Seth Radman </h1>
        <h3 class="description">
          {" "}
          Seth Radman is a Startup Founder & Tech Entrepreneur from ATL. He has
          built products people love to use. Co-Founder / CTO @ Infinite Giving,
          the robo-advisor investment platform for nonprofits. Co-Founder / CEO
          @ Upbeat Music App, helping musicians play together virtually in
          real-time online. Prev Founder / CEO @ Crescendo, an AI music trainer
          known as “Guitar Hero for real instruments”. Grew to 1 million users.
          Acquired by Ultimate Guitar in 2019. He has designed, built, and
          launched over 40 mobile and web apps. Featured on the App Store 100+
          times across the world and selected as Apple's App of the Day.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/1Zs68ku4C8o0ZwgblPsRWi?theme=0"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Charu Thomas </h1>
        <h3 class="description">
          {" "}
          Charu is currently building Ox with her world-class teammates to help
          retailers and 3PLs get customer orders out the door faster through
          nano and microfulfillment automation. Prior to that, she was an
          internationally award-winning researcher from Georgia Tech's #1 ISYE
          program.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/2hVMvvyfKT83ZYdfaFfCTh?theme=0"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Christopher Cherian </h1>
        <h3 class="description">
          {" "}
          Christopher is passionate about building things and connecting with
          people. He is currently working with his team on building Gatherly, a
          software product that seamlessly connects people to produce engaging
          virtual events. Gatherly has raised money, signed hundreds of
          corporate customers, and is continuing to grow.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/0flQzyXmFmKXaAR0SBD5vX?theme=0"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Jay Shaffer </h1>
        <h3 class="description">
          {" "}
          Jay Shaffer is a Board Member at Atlanta Technology Angels where he
          works with several startups to analyze xomplex business issues and
          devise customer centric solutions for them. Having worked in several
          roles and companies, Jay is very experienced with products, startups
          and entrepreneurship. He's a huge pioneer in helping young
          entreprenuers in Atlanta reach their startup goals.
        </h3>
        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/5ptePPJfq2TPML0FkTVm98?theme=0"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Deep Kakkad </h1>
        <h3 class="description"> 
        Deep Kakkad is a VC Scout and entrepreneur based out of India. He's immensely passionate about grooming the next generation of entrepreneurs and startup enthusiasts. He’s currently a partner at an advisory firm called Proxy and is also a venture partner at Conscience VC. He's been featured in Entrepreneur.com twice and is a skilled motivational speaker too.
        
        
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/2VtkKgVD7Lk83GK5OyU2IK?theme=0"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Michael Gracie </h1>
        <h3 class="description">
          {" "}
          Michael Gracie is a finance professional working on an email
          newsletter service called MKISIO. MKISIO is a secure email newsletter
          delivery service and has signed up with over a 1000 customers. Michael
          is very passionate about communites and believes MKISIO will one day
          power stronger community interaction too.
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/1JsQsAxgfy7qr9DPN4GSrP?theme=0"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Richard Lee </h1>
        <h3 class="description">
          {" "}
          Richard Lee is the Founder and CEO of Rangr, an platform to help
          aspiring entrprenerus. Having graduated from Georgia Tech, Richard has
          delved into several experiences as a founder, designer and engineer.
          He's also a fond media aficionado and maintains a newsletter called
          Rangr Outpost.{" "}
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/5YximCIAA1yYUntV0Ms3Qm?theme=0"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div class="podcast-episode2">
        <h1 class="heading"> Ash Bhimasani </h1>
        <h3 class="description">
          {" "}
          Ash Bhimasani is a product designer and software engineer working on
          an NFT project called Proof Of Beauty. Ash has worked at top startups
          and companies like Bitpay, 0xLabs, Coinbase and now leads his project.
          Having learnt all his skills in the industry, Ash gives a lot of
          insight about dropping out from college and following your passions.{" "}
        </h3>

        <div align="center">
          <iframe
            src="https://open.spotify.com/embed/episode/7eoCdo2qOHyUUlMdOBit4d?theme=0"
            width="90%"
            title = "Podcast Episode"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <Divider />
      <div class="supporters">
        <h1 class="heading2"> Proud Supporters </h1>
        <div class="testimage"> 

        <div class="card1">
          
        <Card1 />
        </div>
        <Card2 /> 
      </div>
      </div>

      <div id="newsletter" align="center" display="flex">
        <iframe
          src="https://capercast.substack.com/embed"
          title="Newsletter"
          width="400"
          height="320"
          background="white"
          border="1px"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
