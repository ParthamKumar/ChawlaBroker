import React, { useRef } from "react";
import "./portfolio.css";
// import IMG1 from '../../assets/portfolio1.jpg'
import ricevid from '../../assets/vid1.mp4'
import fullvid from '../../assets/fullvid.mp4'
import pvid from '../../assets/pvid1.mp4'
import pimg from '../../assets/pimg1.jpg'
import mill1 from '../../assets/mill1up.jpg'
import millvid1 from '../../assets/huskvid.mp4'
import empcont from '../../assets/empcont2.jpg'
import empcont2 from '../../assets/empcont.jpg'
import fullcont from '../../assets/fullcont.jpg'
import fullcont2 from '../../assets/fullcont2.jpg'




const Portfolio = () => {

  const videoRef = useRef(null);

  // const playVideo = () =>{
  //     if(videoRef.current){
  //       videoRef.current.playVideo();
  //     }
  // };

  return (
    <section id="portfolio">
      <h5>Our Recent Work</h5>
      <h2>Media</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <video ref={videoRef} width="50%" height="50%" controls>
            <source src={ricevid} type="video/mp4" />
            </video>
            
          </div>
          
        </article>

        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <video ref={videoRef} width="50%" height="50%" controls>
            <source src={fullvid} type="video/mp4" />
            </video>
            
          </div>
          
        </article>

        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <video ref={videoRef} width="50%" height="50%" controls>
            <source src={pvid} type="video/mp4" />
            </video>
            
          </div>
          
        </article>

        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <img src={pimg} width="40%" height="40%" alt="" />
            
          </div>
          {/* <h3></h3> */}
          <div className="portfolio__item-cta">
          
          </div>
        </article>

        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <img src={mill1} width="40%" height="40%" alt="" />
            
          </div>
          {/* <h3></h3> */}
          <div className="portfolio__item-cta">
          
          </div>
        </article>

        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <video ref={videoRef} width="50%" height="50%" controls>
            <source src={millvid1} type="video/mp4" />
            </video>
            
          </div>
          
        </article>

        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <img src={empcont} width="40%" height="40%" alt="" />
            
          </div>
          {/* <h3></h3> */}
          <div className="portfolio__item-cta">
          
          </div>
        </article>

        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <img src={empcont2} width="40%" height="40%" alt="" />
            
          </div>
          {/* <h3></h3> */}
          <div className="portfolio__item-cta">
          
          </div>
        </article>

        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <img src={fullcont} width="40%" height="40%" alt="" />
            
          </div>
          {/* <h3></h3> */}
          <div className="portfolio__item-cta">
          
          </div>
        </article>

        <article className="portfolio__item">
          <div className="prtfolio__item-image">
            <img src={fullcont2} width="40%" height="40%" alt="" />
            
          </div>
          {/* <h3></h3> */}
          <div className="portfolio__item-cta">
          
          </div>
        </article>

        
      </div>
    </section>
  );
};

export default Portfolio;
