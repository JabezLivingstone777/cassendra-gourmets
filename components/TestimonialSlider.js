"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

/* ─── Custom Arrow Components ─── */
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous"
    style={{
      position: 'absolute',
      left: '-28px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #e8a87c, #c0392b)',
      boxShadow: '0 4px 18px rgba(192,57,43,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-50%) scale(1.12)';
      e.currentTarget.style.boxShadow = '0 8px 28px rgba(192,57,43,0.5)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 18px rgba(192,57,43,0.35)';
    }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next"
    style={{
      position: 'absolute',
      right: '-28px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #e8a87c, #c0392b)',
      boxShadow: '0 4px 18px rgba(192,57,43,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-50%) scale(1.12)';
      e.currentTarget.style.boxShadow = '0 8px 28px rgba(192,57,43,0.5)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 18px rgba(192,57,43,0.35)';
    }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>
);

/* ─── Premium screenshot-card slider settings ─── */
const feedbackSliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  dots: true,
  centerMode: true,
  centerPadding: "18%",
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: { centerPadding: "10%", prevArrow: <PrevArrow />, nextArrow: <NextArrow /> },
    },
    {
      breakpoint: 991,
      settings: { centerPadding: "5%", prevArrow: <PrevArrow />, nextArrow: <NextArrow /> },
    },
    {
      breakpoint: 767,
      settings: { centerMode: false, centerPadding: "0", prevArrow: <PrevArrow />, nextArrow: <NextArrow /> },
    },
  ],
};

const feedbackImages = [
  "/assets/images/testimonials/uploaded_media_0_1770709477803.webp",
  "/assets/images/testimonials/uploaded_media_1_1770709477803.webp",
  "/assets/images/testimonials/uploaded_media_2_1770709477803.webp",
  "/assets/images/testimonials/uploaded_media_3_1770709477803.webp",
  "/assets/images/testimonials/uploaded_media_4_1770709477803.webp",
];

function TestimonialSlider() {

  return (
    <section className="testimonials-five rel z-1 bgc-lighter py-130 rpy-100">
      {/* ── Inline styles ── */}
      <style>{`
        /* Section heading */
        .testi-heading-wrap {
          text-align: center;
          margin-bottom: 55px;
        }

        /* Slider track */
        .cg-feedback-slider {
          padding-bottom: 55px;
        }

        /* Each slide wrapper */
        .cg-feedback-slide {
          padding: 0 12px;
          transition: transform 0.4s ease, opacity 0.4s ease;
          opacity: 0.45;
          transform: scale(0.92);
        }
        .cg-feedback-slider .slick-center .cg-feedback-slide,
        .cg-feedback-slider .slick-current .cg-feedback-slide {
          opacity: 1;
          transform: scale(1);
        }

        /* Card */
        .cg-feedback-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.10);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
          position: relative;
        }
        .cg-feedback-card:hover {
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.16);
          transform: translateY(-4px);
        }

        /* Decorative top accent bar */
        .cg-feedback-card::before {
          content: '';
          display: block;
          height: 4px;
          background: linear-gradient(90deg, #e8a87c, #c0392b);
          border-radius: 20px 20px 0 0;
        }

        /* Quote icon overlay */
        .cg-feedback-card .quote-icon {
          position: absolute;
          top: 18px;
          left: 22px;
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #e8a87c, #c0392b);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 16px;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(192,57,43,0.3);
        }

        /* Screenshot image */
        .cg-feedback-img {
          width: 100%;
          height: 420px;
          display: block;
          object-fit: contain;
          object-position: top;
          border-radius: 0 0 16px 16px;
        }
        @media (max-width: 767px) {
          .cg-feedback-img {
            height: 280px;
          }
        }

        /* Dots */
        .cg-feedback-slider .slick-dots {
          bottom: 0;
        }
        .cg-feedback-slider .slick-dots li button:before {
          font-size: 10px;
          color: #c0392b;
          opacity: 0.35;
          transition: opacity 0.3s;
        }
        .cg-feedback-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #c0392b;
        }

        /* hide default slick arrow pseudo-elements (custom components used instead) */
        .cg-feedback-slider .slick-prev:before,
        .cg-feedback-slider .slick-next:before {
          display: none;
        }
      `}</style>

      <div className="container rel">
        {/* ── Section Heading ── */}
        <div className="row text-center justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div
              className="section-title testi-heading-wrap"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">What Our Customers Say</span>
              <h2>Love from Our Happy Customers</h2>
            </div>
          </div>
        </div>

        {/* ── Screenshot Slider ── */}
        <div
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <Slider {...feedbackSliderSettings} className="cg-feedback-slider">
            {feedbackImages.map((src, i) => (
              <div key={i}>
                <div className="cg-feedback-slide">
                  <div className="cg-feedback-card">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left" style={{ fontSize: '13px' }} />
                    </div>
                    <img
                      src={src}
                      alt={`Customer Feedback ${i + 1}`}
                      className="cg-feedback-img"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ── Decorative shapes ── */}
      <div className="testimonials-shapes">
        <div className="shape one">
          <img src="assets/images/testimonials/testi-five-shape3.webp" alt="Shape" />
        </div>
        <div className="shape three">
          <img src="assets/images/testimonials/testi-five-shape1.webp" alt="Shape" />
        </div>
        <div className="shape four">
          <img src="assets/images/testimonials/testi-five-shape2.webp" alt="Shape" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;

export const TestimonialSlider2 = () => {
  return (
    <Slider {...sliderProps.testimonialsActive} className="testimonials-active">
      <div
        className="testimonial-item"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author1.webp" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div
        className="testimonial-item"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author2.webp" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div
        className="testimonial-item"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author3.webp" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author1.webp" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author2.webp" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="quote">
          <i className="flaticon-quote" />
        </div>
        <div className="text">
          Renowned for its versatility in the kitchen, Red King Crab can be
          prepared in various ways, from simple steaming or boiling to elaborate
          preparations such as grilling incorporating
        </div>
        <div className="author">
          <img src="assets/images/testimonials/author3.webp" alt="Author" />
          <div className="description">
            <h5>Steven H. Paxson</h5>
            <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
    </Slider>
  );
};
