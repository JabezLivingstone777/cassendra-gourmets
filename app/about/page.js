import { AboutUs3 } from "@/components/AboutUs";
import BookTableForm from "@/components/BookTableForm";
import FoodCategory from "@/components/FoodCategory";
import Headline from "@/components/Headline";
import PageBanner from "@/components/PageBanner";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"About company"} pageName={"About Us"} />
      <AboutUs3 />
      <Headline />
      {/* Food Category Area start */}
      <FoodCategory />
      {/* Food Category Area end */}
      {/* Our Story Area start */}
      <section className="about-page-story pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-story-image rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/webp/platters/_DSC4385-large.webp" alt="Cassandra's Creations" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-story-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <span className="sub-title mb-5">Our Journey</span>
                  <h2>From Passion to Perfection</h2>
                </div>
                <p>
                  What began as a childhood love for baking at age 10 has blossomed into Cassandra's Gourmet.
                  For over 30 years, I've been crafting artisan chocolates and baked goods, combining traditional
                  recipes passed down through two generations with modern techniques.
                </p>
                <p className="mt-20">
                  After a successful career in HR, I decided to follow my heart and turn my passion into a
                  full-time venture. Every item from our cloud kitchen is made with the same love and care
                  I put into treats for my own family - because that's what you deserve.
                </p>
                <div className="about-features mt-40">
                  <div className="feature-item">
                    <i className="flaticon-chef-hat" />
                    <h5>30+ Years of Expertise</h5>
                    <p>in artisan chocolates and baking</p>
                  </div>
                  <div className="feature-item">
                    <i className="flaticon-badge" />
                    <h5>Generational Recipes</h5>
                    <p>Handed down with love</p>
                  </div>
                  <div className="feature-item">
                    <i className="flaticon-cook" />
                    <h5>Made to Order</h5>
                    <p>Fresh, customized, homemade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story Area end */}
      <div className="headline-area mb-105 rmb-85 rel z-1">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Korean Buns</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Artisan Chocolates</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Custom Cakes</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Korean Buns</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Artisan Chocolates</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Custom Cakes</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Korean Buns</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Artisan Chocolates</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Custom Cakes</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/tomato.webp" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/burger.webp" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Features Two area start */}
      <div className="feature-two-area pb-130 rpb-100">
        <div className="container-fluid">
          <div className="row no-gap">
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature1.webp" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Private dining</h3>
                <p>
                  The duration of a consulting engagement varies depending on
                  the scope and complexity of the project.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Testy and quality food</li>
                  <li>Fast food delivery</li>
                  <li>Awards winning restuarent</li>
                </ul>
                <Link href="shop" className="theme-btn style-two">
                  book now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 offset-xl-4">
              <div
                className="feature-two-image"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature2.webp" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>The Raw Bar</h3>
                <p>
                  The duration of a consulting engagement varies depending on
                  the scope and complexity of the project.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Testy and quality food</li>
                  <li>Fast food delivery</li>
                  <li>Awards winning restuarent</li>
                </ul>
                <Link href="shop" className="theme-btn style-two">
                  book now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature3.webp" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Outdoor catering</h3>
                <p>
                  The duration of a consulting engagement varies depending on
                  the scope and complexity of the project.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Testy and quality food</li>
                  <li>Fast food delivery</li>
                  <li>Awards winning restuarent</li>
                </ul>
                <Link href="shop" className="theme-btn style-two">
                  book now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Two area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-lighter pt-120 rpt-90 rel z-2">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Gourmet Cookies</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Savory Delights</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Gourmet Cookies</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Savory Delights</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Gourmet Cookies</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Savory Delights</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.webp" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.webp" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonials Area start */}
      <section className="testimonials-area bgc-lighter pt-105 rpt-85 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">customer feedback</span>
                <h2>what have lot’s off happy customer explore feedback</h2>
              </div>
            </div>
          </div>
          <TestimonialSlider2 />
        </div>
        <div className="testimonials-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape4.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.webp" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
    </WellFoodLayout>
  );
};
export default page;
