import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/man.png";
// import AVTR2 from "../../assets/me-aboutt.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients </h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">xxxx</h5>
          <small className="client__review">
            I'm thoroughly impressed with <strong>Chawla Broker</strong>. Their
            commitment to top-notch quality and sustainability is evident in
            every interaction. From start to finish, the team's professionalism
            and dedication made the entire experience seamless. Highly recommend
            [Your Business Name] for anyone seeking excellence in crop trading!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">xxxx</h5>
          <small className="client__review">
            <strong>Chawla Broker</strong> has been a reliable partner in our agricultural
            endeavors. Their attention to detail and commitment to sustainable
            practices set them apart. The seamless process and quality products
            make them our go-to in crop trading. Highly recommended for anyone
            in the industry!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">xxxx</h5>
          <small className="client__review">
            <strong>Better Dealing Service</strong>
          </small>
        </SwiperSlide>

        {/* <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ajay Kumar</h5>
          <small className="client__review">
            I had the pleasure of working with Partham on a challenging project,
            and I couldn't be happier with the results. His collaborative
            spirit, excellent communication, and technical proficiency were
            invaluable. Partham's enthusiasm for coding and problem-solving is
            contagious, making him an excellent addition to any team.
          </small>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default testimonials;
