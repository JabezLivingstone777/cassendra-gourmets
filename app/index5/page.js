import WellFoodLayout from "@/layout/WellFoodLayout";
import PageBanner from "@/components/PageBanner";

const Index5 = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle="Juice & Drinks" />
      
      {/* Drinks Menu Section */}
      <section className="food-menu-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-5">Refreshing Beverages</span>
            <h2>Fresh Juices & Premium Drinks</h2>
          </div>
          
          <div className="row">
            <div className="col-lg-6">
              <h3 className="mb-4">Fresh Fruit Juices</h3>
              
              {/* Orange Juice */}
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/dishes/dish1.png" alt="Orange Juice" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Fresh Orange Juice</h5>
                  <p>100% pure orange juice, freshly squeezed</p>
                  <span className="price">Rs. 120</span>
                </div>
              </div>

              {/* Apple Juice */}
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/dishes/dish2.png" alt="Apple Juice" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Fresh Apple Juice</h5>
                  <p>Sweet and crisp apple juice</p>
                  <span className="price">Rs. 110</span>
                </div>
              </div>

              {/* Mango Juice */}
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/dishes/dish3.png" alt="Mango Juice" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Alphonso Mango Juice</h5>
                  <p>Rich and creamy mango juice from premium mangoes</p>
                  <span className="price">Rs. 150</span>
                </div>
              </div>

              {/* Mixed Fruit Juice */}
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/dishes/dish4.png" alt="Mixed Fruit Juice" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Mixed Fruit Juice</h5>
                  <p>Blend of seasonal fruits</p>
                  <span className="price">Rs. 140</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="mb-4">Premium Beverages</h3>
              
              {/* Fresh Lime Soda */}
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/dishes/dish5.png" alt="Fresh Lime Soda" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Fresh Lime Soda</h5>
                  <p>Refreshing lime with soda and mint</p>
                  <span className="price">Rs. 80</span>
                </div>
              </div>

              {/* Iced Coffee */}
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/dishes/dish6.png" alt="Iced Coffee" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Iced Coffee</h5>
                  <p>Cold brew coffee with ice and cream</p>
                  <span className="price">Rs. 160</span>
                </div>
              </div>

              {/* Masala Chai */}
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/dishes/dish7.png" alt="Masala Chai" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Special Masala Chai</h5>
                  <p>Traditional Indian spiced tea</p>
                  <span className="price">Rs. 60</span>
                </div>
              </div>

              {/* Smoothies */}
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/dishes/dish8.png" alt="Smoothies" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Fruit Smoothies</h5>
                  <p>Thick fruit smoothies with yogurt</p>
                  <span className="price">Rs. 180</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};

export default Index5;