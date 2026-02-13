import WellFoodLayout from "@/layout/WellFoodLayout";
import PageBanner from "@/components/PageBanner";

const MenuPizza = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle="Pizza Menu" />
      
      {/* Pizza Menu Section */}
      <section className="food-menu-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-5">Our Pizza Menu</span>
            <h2>Authentic Italian Pizzas</h2>
          </div>
          
          <div className="row">
            {/* Margherita Pizza */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/pm-food1.webp" alt="Margherita Pizza" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Margherita Pizza</h5>
                  <p>Fresh mozzarella, tomato sauce, basil leaves</p>
                  <span className="price">Rs. 450</span>
                </div>
              </div>
            </div>

            {/* Pepperoni Pizza */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/pm-food2.webp" alt="Pepperoni Pizza" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Pepperoni Pizza</h5>
                  <p>Classic pepperoni, mozzarella, tomato sauce</p>
                  <span className="price">Rs. 550</span>
                </div>
              </div>
            </div>

            {/* Quattro Stagioni */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/pm-food3.webp" alt="Quattro Stagioni" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Quattro Stagioni</h5>
                  <p>Four seasons pizza with artichokes, mushrooms, ham, olives</p>
                  <span className="price">Rs. 650</span>
                </div>
              </div>
            </div>

            {/* BBQ Chicken Pizza */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/pm-food4.webp" alt="BBQ Chicken" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>BBQ Chicken Pizza</h5>
                  <p>Grilled chicken, BBQ sauce, red onions, cilantro</p>
                  <span className="price">Rs. 600</span>
                </div>
              </div>
            </div>

            {/* Vegetarian Deluxe */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/pm-food5.webp" alt="Vegetarian Deluxe" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Vegetarian Deluxe</h5>
                  <p>Bell peppers, mushrooms, onions, olives, tomatoes</p>
                  <span className="price">Rs. 500</span>
                </div>
              </div>
            </div>

            {/* Meat Lovers */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/pm-food6.webp" alt="Meat Lovers" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Meat Lovers</h5>
                  <p>Pepperoni, sausage, ham, bacon, beef</p>
                  <span className="price">Rs. 750</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};

export default MenuPizza;