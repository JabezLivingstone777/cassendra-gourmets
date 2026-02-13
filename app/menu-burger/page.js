import WellFoodLayout from "@/layout/WellFoodLayout";
import PageBanner from "@/components/PageBanner";

const MenuBurger = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle="Burger Menu" />
      
      {/* Burger Menu Section */}
      <section className="food-menu-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-5">Our Burger Menu</span>
            <h2>Gourmet Burgers & More</h2>
          </div>
          
          <div className="row">
            {/* Classic Burger */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/burger-menu1.webp" alt="Classic Burger" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Classic Beef Burger</h5>
                  <p>100% beef patty, lettuce, tomato, onion, pickle</p>
                  <span className="price">Rs. 350</span>
                </div>
              </div>
            </div>

            {/* Cheese Burger */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/burger-menu2.webp" alt="Cheese Burger" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Double Cheese Burger</h5>
                  <p>Beef patty with double cheese, lettuce, special sauce</p>
                  <span className="price">Rs. 420</span>
                </div>
              </div>
            </div>

            {/* Chicken Burger */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/burger-menu3.webp" alt="Chicken Burger" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Grilled Chicken Burger</h5>
                  <p>Tender grilled chicken breast with mayo and vegetables</p>
                  <span className="price">Rs. 380</span>
                </div>
              </div>
            </div>

            {/* Veggie Burger */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/burger-menu4.webp" alt="Veggie Burger" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Garden Veggie Burger</h5>
                  <p>Plant-based patty with fresh vegetables and avocado</p>
                  <span className="price">Rs. 320</span>
                </div>
              </div>
            </div>

            {/* BBQ Bacon Burger */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/burger-menu5.webp" alt="BBQ Bacon Burger" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>BBQ Bacon Burger</h5>
                  <p>Beef patty with crispy bacon, BBQ sauce, onion rings</p>
                  <span className="price">Rs. 480</span>
                </div>
              </div>
            </div>

            {/* Mushroom Swiss Burger */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/burger-menu6.webp" alt="Mushroom Swiss" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Mushroom Swiss Burger</h5>
                  <p>Beef patty with sautéed mushrooms and Swiss cheese</p>
                  <span className="price">Rs. 450</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};

export default MenuBurger;