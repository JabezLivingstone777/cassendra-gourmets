import WellFoodLayout from "@/layout/WellFoodLayout";
import PageBanner from "@/components/PageBanner";

const MenuChicken = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle="Chicken Menu" />
      
      {/* Chicken Menu Section */}
      <section className="food-menu-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-5">Our Chicken Menu</span>
            <h2>Succulent Chicken Dishes</h2>
          </div>
          
          <div className="row">
            {/* Butter Chicken */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/chicken-menu1.png" alt="Butter Chicken" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Butter Chicken</h5>
                  <p>Creamy tomato-based curry with tender chicken</p>
                  <span className="price">Rs. 550</span>
                </div>
              </div>
            </div>

            {/* Chicken Tikka Masala */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/chicken-menu2.png" alt="Chicken Tikka Masala" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Chicken Tikka Masala</h5>
                  <p>Grilled chicken in rich spiced tomato sauce</p>
                  <span className="price">Rs. 600</span>
                </div>
              </div>
            </div>

            {/* Tandoori Chicken */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/chicken-menu3.png" alt="Tandoori Chicken" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Tandoori Chicken</h5>
                  <p>Clay oven roasted chicken with authentic spices</p>
                  <span className="price">Rs. 650</span>
                </div>
              </div>
            </div>

            {/* Chicken Biryani */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/chicken-menu4.png" alt="Chicken Biryani" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Hyderabadi Chicken Biryani</h5>
                  <p>Fragrant basmati rice with spiced chicken</p>
                  <span className="price">Rs. 480</span>
                </div>
              </div>
            </div>

            {/* Chicken Curry */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/chicken-menu5.png" alt="Chicken Curry" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Home Style Chicken Curry</h5>
                  <p>Traditional chicken curry with onions and spices</p>
                  <span className="price">Rs. 450</span>
                </div>
              </div>
            </div>

            {/* Chicken Korma */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/chicken-menu6.png" alt="Chicken Korma" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Chicken Korma</h5>
                  <p>Mild chicken curry with yogurt and cashews</p>
                  <span className="price">Rs. 520</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};

export default MenuChicken;