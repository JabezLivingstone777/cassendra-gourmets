import WellFoodLayout from "@/layout/WellFoodLayout";
import PageBanner from "@/components/PageBanner";

const MenuSeaFood = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle="Seafood Menu" />
      
      {/* Seafood Menu Section */}
      <section className="food-menu-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-5">Our Seafood Menu</span>
            <h2>Fresh Ocean Delicacies</h2>
          </div>
          
          <div className="row">
            {/* Grilled Fish */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/seafood-menu1.webp" alt="Grilled Fish" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Grilled Sea Bass</h5>
                  <p>Fresh sea bass grilled with lemon and herbs</p>
                  <span className="price">Rs. 850</span>
                </div>
              </div>
            </div>

            {/* Lobster Thermidor */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/seafood-menu2.webp" alt="Lobster Thermidor" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Lobster Thermidor</h5>
                  <p>Classic French lobster dish with creamy sauce</p>
                  <span className="price">Rs. 1,500</span>
                </div>
              </div>
            </div>

            {/* Prawns Curry */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/seafood-menu3.webp" alt="Prawns Curry" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Coconut Prawns Curry</h5>
                  <p>Spicy prawns cooked in rich coconut curry</p>
                  <span className="price">Rs. 750</span>
                </div>
              </div>
            </div>

            {/* Fish & Chips */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/seafood-menu4.webp" alt="Fish & Chips" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Classic Fish & Chips</h5>
                  <p>Beer-battered fish with crispy golden chips</p>
                  <span className="price">Rs. 650</span>
                </div>
              </div>
            </div>

            {/* Crab Cakes */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/seafood-menu5.webp" alt="Crab Cakes" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Maryland Crab Cakes</h5>
                  <p>Pan-seared crab cakes with remoulade sauce</p>
                  <span className="price">Rs. 950</span>
                </div>
              </div>
            </div>

            {/* Seafood Paella */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/seafood-menu6.webp" alt="Seafood Paella" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Seafood Paella</h5>
                  <p>Spanish rice dish with mixed seafood and saffron</p>
                  <span className="price">Rs. 1,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};

export default MenuSeaFood;