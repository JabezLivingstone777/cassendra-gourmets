import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";

const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Join Our Team"} pageName={"Careers"} />
      
      {/* Career Hero Section */}
      <section className="career-hero-area pt-130 rpt-100 pb-50 rpb-30 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="career-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-35">
                  <span className="sub-title mb-10">work with us</span>
                  <h2>Build Your Culinary Career With Cassandra Gourmet</h2>
                </div>
                <p className="mb-25">
                  Join our passionate team of culinary professionals and be part of creating extraordinary 
                  dining experiences. We believe in nurturing talent, fostering creativity, and building 
                  careers that flourish in the world of gourmet cuisine.
                </p>
                <p className="mb-35">
                  From our kitchen to our front-of-house service, every role contributes to our mission 
                  of delivering exceptional hospitality and unforgettable moments for our guests.
                </p>
                <div className="career-features">
                  <ul className="list-style-one">
                    <li>Competitive salary and benefits package</li>
                    <li>Professional development opportunities</li>
                    <li>Creative and collaborative work environment</li>
                    <li>Career advancement pathways</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="career-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-two1.jpg" alt="Career at Cassandra" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="job-positions-area pt-80 rpt-60 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">open positions</span>
                <h2>Current Job Opportunities</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Job Position 1 */}
            <div className="col-lg-6">
              <div
                className="job-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="job-content">
                  <div className="job-header">
                    <h4>Executive Chef</h4>
                    <span className="job-type">Full Time</span>
                  </div>
                  <div className="job-details">
                    <p><i className="fal fa-map-marker-alt"></i> Main Location</p>
                    <p><i className="fal fa-clock"></i> 3-5 Years Experience</p>
                  </div>
                  <p className="job-description">
                    Lead our culinary team in creating innovative gourmet dishes and maintaining 
                    our high standards of food quality and presentation.
                  </p>
                  <div className="job-footer">
                    <Link href="contact" className="theme-btn style-two">
                      Apply Now <i className="far fa-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Position 2 */}
            <div className="col-lg-6">
              <div
                className="job-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="job-content">
                  <div className="job-header">
                    <h4>Restaurant Manager</h4>
                    <span className="job-type">Full Time</span>
                  </div>
                  <div className="job-details">
                    <p><i className="fal fa-map-marker-alt"></i> Main Location</p>
                    <p><i className="fal fa-clock"></i> 2-4 Years Experience</p>
                  </div>
                  <p className="job-description">
                    Oversee daily operations, manage staff, and ensure exceptional customer 
                    service while maintaining operational excellence.
                  </p>
                  <div className="job-footer">
                    <Link href="contact" className="theme-btn style-two">
                      Apply Now <i className="far fa-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Position 3 */}
            <div className="col-lg-6">
              <div
                className="job-item"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="job-content">
                  <div className="job-header">
                    <h4>Sous Chef</h4>
                    <span className="job-type">Full Time</span>
                  </div>
                  <div className="job-details">
                    <p><i className="fal fa-map-marker-alt"></i> Main Location</p>
                    <p><i className="fal fa-clock"></i> 1-3 Years Experience</p>
                  </div>
                  <p className="job-description">
                    Support the Executive Chef in kitchen operations, menu development, 
                    and maintaining food quality standards.
                  </p>
                  <div className="job-footer">
                    <Link href="contact" className="theme-btn style-two">
                      Apply Now <i className="far fa-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Position 4 */}
            <div className="col-lg-6">
              <div
                className="job-item"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="job-content">
                  <div className="job-header">
                    <h4>Server/Waitstaff</h4>
                    <span className="job-type">Part Time</span>
                  </div>
                  <div className="job-details">
                    <p><i className="fal fa-map-marker-alt"></i> Main Location</p>
                    <p><i className="fal fa-clock"></i> Entry Level Welcome</p>
                  </div>
                  <p className="job-description">
                    Provide exceptional dining service to our guests while maintaining 
                    knowledge of our menu and wine selections.
                  </p>
                  <div className="job-footer">
                    <Link href="contact" className="theme-btn style-two">
                      Apply Now <i className="far fa-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="why-work-area bgc-lighter pt-130 rpt-100 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">why choose us</span>
                <h2>Why Work at Cassandra Gourmet?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="feature-item text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-quality-food" />
                </div>
                <h4>Professional Growth</h4>
                <p>
                  We invest in our team's development with training programs, 
                  mentorship opportunities, and clear advancement paths.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="feature-item text-center"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-awards" />
                </div>
                <h4>Award-Winning Environment</h4>
                <p>
                  Be part of an acclaimed culinary team recognized for excellence 
                  in fine dining and innovative cuisine.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="feature-item text-center"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-restaurant" />
                </div>
                <h4>Comprehensive Benefits</h4>
                <p>
                  Enjoy competitive compensation, health benefits, meal allowances, 
                  and flexible scheduling options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-area pt-130 rpt-100 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div
                className="cta-content text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-35">
                  <span className="sub-title mb-10">ready to join</span>
                  <h2>Ready to Start Your Culinary Journey?</h2>
                </div>
                <p className="mb-35">
                  Don't see the perfect position? We're always looking for passionate 
                  individuals to join our team. Send us your resume and let's discuss 
                  how you can be part of the Cassandra Gourmet family.
                </p>
                <Link href="contact" className="theme-btn">
                  Contact HR Team <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};

export default page;
