import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";

const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Business Partnerships"} pageName={"Partner With Us"} />
      
      {/* Partnership Hero Section */}
      <section className="partnership-area pt-130 rpt-100 pb-50 rpb-30 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="partnership-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-35">
                  <span className="sub-title mb-10">business opportunities</span>
                  <h2>Partner With Cassandra Gourmet</h2>
                </div>
                <p className="mb-25">
                  Join forces with one of the region's most prestigious culinary destinations. 
                  We're always looking for like-minded businesses and organizations to create 
                  mutually beneficial partnerships that enhance our guests' experiences.
                </p>
                <p className="mb-35">
                  From corporate catering to event collaborations, supplier relationships to 
                  cross-promotional opportunities, we believe in building partnerships that 
                  create lasting value for all involved.
                </p>
                <div className="partnership-highlights">
                  <ul className="list-style-one">
                    <li>Corporate catering services</li>
                    <li>Event venue partnerships</li>
                    <li>Supplier and vendor opportunities</li>
                    <li>Cross-promotional marketing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="partnership-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature1.jpg" alt="Business Partnership" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="partnership-types-area pt-80 rpt-60 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">partnership opportunities</span>
                <h2>Ways We Can Work Together</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Corporate Catering */}
            <div className="col-lg-6 col-md-6">
              <div
                className="partnership-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="partnership-icon">
                  <i className="flaticon-restaurant" />
                </div>
                <div className="partnership-content">
                  <h4>Corporate Catering</h4>
                  <p>
                    Elevate your business events with our premium catering services. 
                    From executive lunches to large-scale corporate events, we deliver 
                    exceptional cuisine that impresses clients and employees alike.
                  </p>
                  <div className="partnership-features">
                    <ul>
                      <li>Custom menu development</li>
                      <li>Full-service event management</li>
                      <li>Flexible pricing packages</li>
                      <li>Professional presentation</li>
                    </ul>
                  </div>
                  <Link href="contact" className="theme-btn style-two mt-20">
                    Learn More <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Partnerships */}
            <div className="col-lg-6 col-md-6">
              <div
                className="partnership-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="partnership-icon">
                  <i className="flaticon-quality-food" />
                </div>
                <div className="partnership-content">
                  <h4>Event Collaborations</h4>
                  <p>
                    Partner with us for special events, festivals, and celebrations. 
                    Our expertise in culinary excellence combined with your event vision 
                    creates unforgettable experiences for attendees.
                  </p>
                  <div className="partnership-features">
                    <ul>
                      <li>Wine tasting events</li>
                      <li>Culinary demonstrations</li>
                      <li>Pop-up dining experiences</li>
                      <li>Festival food services</li>
                    </ul>
                  </div>
                  <Link href="contact" className="theme-btn style-two mt-20">
                    Discuss Ideas <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Supplier Partnerships */}
            <div className="col-lg-6 col-md-6">
              <div
                className="partnership-item"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="partnership-icon">
                  <i className="flaticon-awards" />
                </div>
                <div className="partnership-content">
                  <h4>Supplier Opportunities</h4>
                  <p>
                    We're always seeking high-quality suppliers who share our commitment 
                    to excellence. From locally sourced ingredients to premium equipment, 
                    join our network of trusted partners.
                  </p>
                  <div className="partnership-features">
                    <ul>
                      <li>Local produce suppliers</li>
                      <li>Specialty ingredient providers</li>
                      <li>Equipment and technology partners</li>
                      <li>Service providers</li>
                    </ul>
                  </div>
                  <Link href="contact" className="theme-btn style-two mt-20">
                    Submit Proposal <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Marketing Partnerships */}
            <div className="col-lg-6 col-md-6">
              <div
                className="partnership-item"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="partnership-icon">
                  <i className="flaticon-wine" />
                </div>
                <div className="partnership-content">
                  <h4>Cross-Promotion</h4>
                  <p>
                    Expand your reach through strategic marketing partnerships. 
                    We collaborate with complementary businesses to create value-added 
                    experiences and broaden our mutual customer base.
                  </p>
                  <div className="partnership-features">
                    <ul>
                      <li>Joint marketing campaigns</li>
                      <li>Referral programs</li>
                      <li>Package deals and bundles</li>
                      <li>Social media collaborations</li>
                    </ul>
                  </div>
                  <Link href="contact" className="theme-btn style-two mt-20">
                    Explore Options <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories-area bgc-lighter pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">partnership success</span>
                <h2>Success Stories From Our Partners</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="success-story-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="story-image">
                  <img src="assets/images/gallery/gallery3.jpg" alt="Corporate Event" />
                </div>
                <div className="story-content">
                  <h4>Tech Innovations Inc.</h4>
                  <p>
                    "Cassandra Gourmet transformed our annual company retreat into an 
                    extraordinary culinary experience. Their attention to detail and 
                    exceptional service exceeded our expectations."
                  </p>
                  <div className="story-author">
                    <strong>- Sarah Johnson, CEO</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="success-story-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="story-image">
                  <img src="assets/images/gallery/gallery4.jpg" alt="Wine Festival" />
                </div>
                <div className="story-content">
                  <h4>City Wine Festival</h4>
                  <p>
                    "Our partnership with Cassandra brought a new level of sophistication 
                    to our festival. Their culinary expertise perfectly complemented our 
                    wine selections, creating an unforgettable experience."
                  </p>
                  <div className="story-author">
                    <strong>- Michael Rodriguez, Event Director</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="success-story-item"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="story-image">
                  <img src="assets/images/gallery/gallery5.jpg" alt="Local Farm Partnership" />
                </div>
                <div className="story-content">
                  <h4>Green Valley Farms</h4>
                  <p>
                    "Working with Cassandra Gourmet has opened new markets for our 
                    organic produce. Their commitment to quality ingredients aligns 
                    perfectly with our farming philosophy."
                  </p>
                  <div className="story-author">
                    <strong>- Emma Thompson, Farm Owner</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Requirements */}
      <section className="requirements-area pt-130 rpt-100 pb-50 rpb-30 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="requirements-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-35">
                  <span className="sub-title mb-10">partnership criteria</span>
                  <h2>What We Look For In Partners</h2>
                </div>
                <p className="mb-30">
                  We carefully select our partners based on shared values, quality 
                  standards, and mutual benefit. Here's what we value in potential 
                  partnership relationships:
                </p>
                <div className="requirements-list">
                  <div className="requirement-item">
                    <i className="far fa-check-circle" />
                    <div className="requirement-content">
                      <h5>Quality Excellence</h5>
                      <p>Commitment to the highest standards in products or services</p>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <i className="far fa-check-circle" />
                    <div className="requirement-content">
                      <h5>Brand Alignment</h5>
                      <p>Values that complement our commitment to gourmet dining excellence</p>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <i className="far fa-check-circle" />
                    <div className="requirement-content">
                      <h5>Professional Reliability</h5>
                      <p>Proven track record of dependable business practices</p>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <i className="far fa-check-circle" />
                    <div className="requirement-content">
                      <h5>Innovation Focus</h5>
                      <p>Openness to creative collaboration and new ideas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="requirements-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature2.jpg" alt="Partnership Standards" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="partnership-contact-area pt-80 rpt-60 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div
                className="partnership-form"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title text-center mb-40">
                  <span className="sub-title mb-5">get in touch</span>
                  <h2>Submit Your Partnership Proposal</h2>
                  <p>Tell us about your business and how we can work together</p>
                </div>
                <form className="partnership-form-inner">
                  <div className="row gap-20">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="company_name"
                          placeholder="Company Name"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="contact_person"
                          placeholder="Contact Person"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select name="partnership_type" className="form-control" required>
                          <option value="">Select Partnership Type</option>
                          <option value="catering">Corporate Catering</option>
                          <option value="events">Event Collaboration</option>
                          <option value="supplier">Supplier Partnership</option>
                          <option value="marketing">Marketing Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="proposal"
                          rows={6}
                          placeholder="Describe your partnership proposal and how we can work together..."
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="theme-btn">
                        Submit Proposal <i className="far fa-arrow-alt-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="cta-area overlay pt-130 rpt-100 pb-130 rpb-100 rel z-1 bgs-cover"
        style={{ backgroundImage: "url(assets/images/background/cta-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div
                className="cta-content text-center text-white"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-35">
                  <span className="sub-title mb-10">ready to partner</span>
                  <h2>Let's Create Something Amazing Together</h2>
                </div>
                <p className="mb-35">
                  Whether you're looking for catering services, event collaboration, 
                  or business partnerships, we're excited to explore how we can work together 
                  to create exceptional experiences.
                </p>
                <Link href="contact" className="theme-btn me-3">
                  Contact Us Today <i className="far fa-arrow-alt-right" />
                </Link>
                <Link href="about" className="theme-btn style-two">
                  Learn More About Us <i className="far fa-arrow-alt-right" />
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
