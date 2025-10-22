import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";

const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Exclusive Dining Experience"} pageName={"Supper Club"} />
      
      {/* Supper Club Hero Section */}
      <section className="supper-club-area pt-130 rpt-100 pb-50 rpb-30 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="supper-club-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-35">
                  <span className="sub-title mb-10">exclusive experience</span>
                  <h2>Cassandra's Private Supper Club</h2>
                </div>
                <p className="mb-25">
                  Experience intimate dining like never before at our exclusive supper club. 
                  Limited to just 20 guests per evening, our supper club offers a curated 
                  multi-course journey through innovative gourmet cuisine.
                </p>
                <p className="mb-35">
                  Each evening features a unique menu crafted by our executive chef, 
                  paired with premium wines and served in an atmosphere of refined elegance 
                  and warm hospitality.
                </p>
                <div className="supper-club-features">
                  <ul className="list-style-one">
                    <li>Limited to 20 exclusive guests per evening</li>
                    <li>7-course chef's tasting menu</li>
                    <li>Premium wine pairings included</li>
                    <li>Meet and interact with our executive chef</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="supper-club-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/gallery/gallery1.jpg" alt="Supper Club Experience" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Details Section */}
      <section className="experience-details-area pt-80 rpt-60 pb-50 rpb-30 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">what to expect</span>
                <h2>An Unforgettable Evening Awaits</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="experience-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="experience-icon">
                  <i className="flaticon-quality-food" />
                </div>
                <h4>Curated Menu</h4>
                <p>
                  Our chef personally selects the finest seasonal ingredients to create 
                  a unique 7-course tasting menu that changes monthly.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="experience-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="experience-icon">
                  <i className="flaticon-wine" />
                </div>
                <h4>Wine Pairings</h4>
                <p>
                  Each course is expertly paired with premium wines selected by our 
                  sommelier to enhance and complement every flavor.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="experience-item"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="experience-icon">
                  <i className="flaticon-restaurant" />
                </div>
                <h4>Intimate Setting</h4>
                <p>
                  Dine in our private dining room with elegant ambiance, perfect 
                  for special occasions and memorable evenings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="menu-preview-area bgc-lighter pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">this month's menu</span>
                <h2>November Tasting Menu Preview</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="menu-course-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="course-number">01</div>
                <div className="course-content">
                  <h4>Amuse-Bouche</h4>
                  <p>Oyster foam with caviar pearls and microgreens</p>
                  <span className="wine-pairing">Paired with Champagne Brut</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="menu-course-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="course-number">02</div>
                <div className="course-content">
                  <h4>First Course</h4>
                  <p>Seared scallops with cauliflower purée and pancetta crisps</p>
                  <span className="wine-pairing">Paired with Chardonnay Reserve</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="menu-course-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="course-number">03</div>
                <div className="course-content">
                  <h4>Soup Course</h4>
                  <p>Roasted butternut squash soup with truffle oil drizzle</p>
                  <span className="wine-pairing">Paired with Viognier</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="menu-course-item"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="course-number">04</div>
                <div className="course-content">
                  <h4>Fish Course</h4>
                  <p>Pan-seared halibut with lemon herb risotto and asparagus</p>
                  <span className="wine-pairing">Paired with Sauvignon Blanc</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="menu-course-item"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="course-number">05</div>
                <div className="course-content">
                  <h4>Main Course</h4>
                  <p>Wagyu beef tenderloin with potato gratin and seasonal vegetables</p>
                  <span className="wine-pairing">Paired with Cabernet Sauvignon</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="menu-course-item"
                data-aos="fade-up"
                data-aos-delay={250}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="course-number">06</div>
                <div className="course-content">
                  <h4>Cheese Course</h4>
                  <p>Artisan cheese selection with honeycomb and nuts</p>
                  <span className="wine-pairing">Paired with Port Wine</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="menu-course-item finale"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="course-number">07</div>
                <div className="course-content">
                  <h4>Dessert</h4>
                  <p>Dark chocolate soufflé with vanilla bean ice cream and berry coulis</p>
                  <span className="wine-pairing">Paired with Dessert Wine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Information */}
      <section className="reservation-info-area pt-130 rpt-100 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="reservation-image"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/gallery/gallery2.jpg" alt="Private Dining Room" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="reservation-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-35">
                  <span className="sub-title mb-10">make a reservation</span>
                  <h2>Booking Information</h2>
                </div>
                <div className="booking-details">
                  <div className="detail-item">
                    <i className="fal fa-calendar-alt" />
                    <div className="detail-content">
                      <h5>Available Dates</h5>
                      <p>Friday & Saturday evenings, 7:00 PM seating</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fal fa-users" />
                    <div className="detail-content">
                      <h5>Group Size</h5>
                      <p>Limited to 20 guests per evening</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fal fa-clock" />
                    <div className="detail-content">
                      <h5>Duration</h5>
                      <p>Approximately 3.5 hours dining experience</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fal fa-money-bill-alt" />
                    <div className="detail-content">
                      <h5>Investment</h5>
                      <p>Rs. 15,500 per person (includes wine pairings)</p>
                    </div>
                  </div>
                </div>
                <div className="reservation-note">
                  <p><strong>Note:</strong> Advance reservations required. 48-hour cancellation policy applies. 
                  Dietary restrictions can be accommodated with advance notice.</p>
                </div>
                <Link href="contact" className="theme-btn mt-30">
                  Make Reservation <i className="far fa-arrow-alt-right" />
                </Link>
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
                  <span className="sub-title mb-10">exclusive invitation</span>
                  <h2>Join Our VIP Supper Club Membership</h2>
                </div>
                <p className="mb-35">
                  Become a member and enjoy priority reservations, exclusive menu previews, 
                  and special member-only events throughout the year.
                </p>
                <Link href="contact" className="theme-btn">
                  Learn About Membership <i className="far fa-arrow-alt-right" />
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
