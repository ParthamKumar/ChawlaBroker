import React from "react";
import "./experience.css";
// import { BsFillPatchCheckFill } from "react-icons/bs";
import corn from "../../assets/corn.jpg";
import moong from "../../assets/moong.png"
import dall from "../../assets/dall.jpg"
import rice from "../../assets/rice.jpg"
import paddy from "../../assets/paddy.jpg"
import husk from "../../assets/husk.jpg"

const Experience = () => {
  return (
      <section id="experience">
        <h5>What We Do</h5>
        <h2>Our Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>We deal with </h3>
            <div className="experience__content">
              <article className="experience__detaild">
                <img
                  src= {corn}
                  alt="Experience Icon"
                  className="experience__details-icon"
                />
                <div>
                  <h4>Corn</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>

              <article className="experience__detaild">
                <img
                  src= {moong}
                  alt="Experience Icon"
                  className="experience__details-icon"
                />
                <div>
                  <h4>Moong</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>

              <article className="experience__detaild">
                <img
                  src= {dall}
                  alt="Experience Icon"
                  className="experience__details-icon"
                />
                <div>
                  <h4>Dall</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>

            </div>
            {/* ////////////////////////////////////////////////////// */}
          </div>
          <div className="experience__backend">
            <div className="experience__frontend">
              <h3>We specially Trade in </h3>
              <div className="experience__content">
              <article className="experience__detaild">
                <img
                  src= {rice}
                  alt="Experience Icon"
                  className="experience__details-icon"
                />
                <div>
                  <h4>Rice</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>

              <article className="experience__detaild">
                <img
                  src= {paddy}
                  alt="Experience Icon"
                  className="experience__details-icon"
                />
                <div>
                  <h4>Paddy</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
              <article className="experience__detaild">
                <img
                  src= {husk}
                  alt="Experience Icon"
                  className="experience__details-icon"
                />
                <div>
                  <h4>Husk</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>


              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Experience;
