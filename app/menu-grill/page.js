import WellFoodLayout from "@/layout/WellFoodLayout";
import PageBanner from "@/components/PageBanner";

const MenuGrill = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle="Grill Menu" />
      
      {/* Grill Menu Section */}
      <section className="food-menu-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-5">Our Grill Menu</span>
            <h2>Perfectly Grilled Specialties</h2>
          </div>
          
          <div className="row">
            {/* Grilled Steak */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/gm-food1.png" alt="Grilled Steak" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Premium Grilled Steak</h5>
                  <p>Tender beef steak grilled to perfection with herbs</p>
                  <span className="price">Rs. 1,200</span>
                </div>
              </div>
            </div>

            {/* Grilled Chicken */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/gm-food2.png" alt="Grilled Chicken" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Herb Grilled Chicken</h5>
                  <p>Marinated chicken breast with aromatic herbs</p>
                  <span className="price">Rs. 800</span>
                </div>
              </div>
            </div>

            {/* Grilled Salmon */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/gm-food3.png" alt="Grilled Salmon" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Grilled Salmon Fillet</h5>
                  <p>Fresh Atlantic salmon with lemon and dill</p>
                  <span className="price">Rs. 950</span>
                </div>
              </div>
            </div>

            {/* Grilled Lamb */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/gm-food4.png" alt="Grilled Lamb" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Grilled Lamb Chops</h5>
                  <p>Tender lamb chops with rosemary and garlic</p>
                  <span className="price">Rs. 1,100</span>
                </div>
              </div>
            </div>

            {/* Grilled Vegetables */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-2s">
                <div className="food-image">
                  <img src="assets/images/food/gm-food5.png" alt="Grilled Vegetables" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h5>Grilled Vegetable Platter</h5>
                  <p>Seasonal vegetables grilled with olive oil and herbs</p>
                  <span className="price">Rs. 450</span>
                </div>
              </div>
            </div>

            {/* Grilled Prawns */}
            <div className="col-xl-6">
              <div className="food-menu-item wow fadeInUp delay-0-4s">
                <div className="food-image">
                  <img src="assets/images/food/gm-food6.png" alt="Grilled Prawns" />
                </div>
                <div className="food-content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>Grilled King Prawns</h5>
                  <p>Jumbo prawns grilled with garlic butter</p>
                  <span className="price">Rs. 850</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};

export default MenuGrill;