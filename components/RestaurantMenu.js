"use client";
import { Nav, Tab } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <div className="food-menu-item style-two">
      <div className="image">
        <img src={item.img} alt="Food Menu" />
      </div>
      <div className="content">
        <h5>
          <span className="title">{item.title}</span> <span className="dots" />{" "}
          <span className="price">₹{item.price}</span>
        </h5>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

const RestaurantMenu = ({ menus }) => {
  const items = menus
    ? menus
    : [
      {
        id: 1,
        title: "Breads & Buns",
        icon: "flaticon-bread",
        event: "food-tab1",
        items: [
          {
            id: 1,
            title: "Korean Cheese Bun - Small",
            price: "80",
            desc: "Soft bun filled with melted cheese",
            img: "/assets/images/webp/buns/_DSC4259-medium.webp",
          },
          {
            id: 2,
            title: "Korean Cheese Bun - Regular",
            price: "200",
            desc: "Fluffy cheese bun with Korean spice",
            img: "/assets/images/webp/buns/_DSC4274-medium.webp",
          },
          {
            id: 3,
            title: "Korean Cheese Bun - Large",
            price: "350",
            desc: "Extra large fluffy cheese bun in a larger serving",
            img: "/assets/images/webp/buns/_DSC4281-medium.webp",
          },
          {
            id: 4,
            title: "Garlic Bread - Half",
            price: "60",
            desc: "Crispy bread topped with garlic butter",
            img: "/assets/images/webp/buns/_DSC4259-medium.webp",
          },
          {
            id: 5,
            title: "Margherita Pizza",
            price: "180",
            desc: "Classic cheese pizza with fresh herbs",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 6,
            title: "Veg Pizza",
            price: "210",
            desc: "Loaded veggie toppings on cheese base",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 7,
            title: "Veg Burger",
            price: "120",
            desc: "Juicy veg patty on a cheese base",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 8,
            title: "Chicken Burger",
            price: "125",
            desc: "Juicy chicken patty stuffed with cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
        ],
      },
      {
        id: 2,
        title: "Puffs & Savories",
        icon: "flaticon-croissant",
        event: "food-tab2",
        items: [
          {
            id: 1,
            title: "Paneer Puff",
            price: "80",
            desc: "Spiced paneer filling in a flaky pastry",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 2,
            title: "Chicken Puff",
            price: "80",
            desc: "Seasoned chicken filling in a flaky pastry",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 3,
            title: "Egg & Cheese Puff",
            price: "80",
            desc: "Combination of egg with melted cheese inside",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 4,
            title: "Double Egg Puff",
            price: "80",
            desc: "Double layered double egg",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 5,
            title: "Veg Puff",
            price: "40",
            desc: "Crisp layers stuffed with a savory veggie mix",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 6,
            title: "Veg Momos (6 pcs)",
            price: "85",
            desc: "Soft & fluffy stuffed with a savory veggie mix",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 7,
            title: "Chicken Momos (6 pcs)",
            price: "95",
            desc: "Soft & fluffy stuffed with a savory chicken mix",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
        ],
      },
      {
        id: 3,
        title: "Sandwiches & Croissants",
        icon: "flaticon-sandwich",
        event: "food-tab3",
        items: [
          {
            id: 1,
            title: "Chicken Mayo Sandwich",
            price: "95",
            desc: "Grilled chicken stuffed between soft bread",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 2,
            title: "Coleslaw Sandwich",
            price: "95",
            desc: "Creamy, crunchy coleslaw in every bite",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 3,
            title: "Chicken with Cheese Sandwich",
            price: "105",
            desc: "Juicy chicken topped with melted cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 4,
            title: "Egg with Cheese Sandwich",
            price: "85",
            desc: "Fluffy egg paired with gooey cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 5,
            title: "Butter Croissant",
            price: "75",
            desc: "Flaky golden croissant with buttery layers",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 6,
            title: "Plain Croissant",
            price: "50",
            desc: "Flaky croissant filled with rich chocolate",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 7,
            title: "Chicken Ham & Cheese Croissant",
            price: "75",
            desc: "Savory croissant with ham, chicken and cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 8,
            title: "Nutella Croissant",
            price: "75",
            desc: "Buttery croissant stuffed with creamy nutella",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
        ],
      },
      {
        id: 4,
        title: "Quiches & Tarts",
        icon: "flaticon-cake-slice",
        event: "food-tab4",
        items: [
          {
            id: 1,
            title: "Mushroom & Cheese Quiche",
            price: "115",
            desc: "Savory mushrooms baked with creamy cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 2,
            title: "Bacon Mushroom Cheese Quiche",
            price: "125",
            desc: "Smoky bacon with mushrooms and cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 3,
            title: "Chicken Quiche",
            price: "85",
            desc: "Seasoned chicken in a golden crust",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 4,
            title: "Plain Quiche",
            price: "60",
            desc: "Classic savory egg quiche in a crisp shell",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 5,
            title: "Lemon Tart",
            price: "80",
            desc: "Tangy lemon in a crisp tart shell",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 6,
            title: "Salted Caramel Tart",
            price: "110",
            desc: "Sweet and salty caramel tart",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 7,
            title: "Chocolate Tart",
            price: "110",
            desc: "Smooth chocolate in a buttery base",
            img: "/assets/images/webp/chocolates/_DSC4309-medium.webp",
          },
          {
            id: 8,
            title: "Hazelnut Chocolate Praline Tart",
            price: "125",
            desc: "Rich chocolate with crunchy hazelnut",
            img: "/assets/images/webp/chocolates/_DSC4344-medium.webp",
          },
        ],
      },
      {
        id: 5,
        title: "Pasta & Bakes",
        icon: "flaticon-noodles",
        event: "food-tab5",
        items: [
          {
            id: 1,
            title: "Veg Pasta",
            price: "275",
            desc: "Tender pasta tossed in creamy pesto",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 2,
            title: "Chicken Pasta",
            price: "325",
            desc: "Juicy chicken in rich pasta mix",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 3,
            title: "Veg Lasagna",
            price: "325",
            desc: "Layered pasta with veggies and cheese",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 4,
            title: "Chicken Lasagna",
            price: "400",
            desc: "Cheesy layers with juicy chicken",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 5,
            title: "Spaghetti with Vegetable Balls",
            price: "300",
            desc: "Classic spaghetti topped with veggie balls",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 6,
            title: "Spaghetti with Meat Balls",
            price: "360",
            desc: "Hearty spaghetti served with meatballs",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 7,
            title: "Baked Vegetable",
            price: "300",
            desc: "Wholesome mix of veggies baked to perfection",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 8,
            title: "Spinach & Corn",
            price: "300",
            desc: "Creamy spinach and sweet corn in a casserole",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
        ],
      },
      {
        id: 6,
        title: "Desserts",
        icon: "flaticon-cupcake",
        event: "food-tab6",
        items: [
          {
            id: 1,
            title: "Caramel Custard per portion",
            price: "70",
            desc: "Silky custard topped with golden caramel",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 2,
            title: "Date Pudding with Toffee Sauce",
            price: "100",
            desc: "Moist date sponge bathed with rich toffee sauce",
            img: "/assets/images/webp/cakes/DSC09650-medium.webp",
          },
          {
            id: 3,
            title: "Trifle Pudding",
            price: "80",
            desc: "Layered dessert with cake, custard, and cream",
            img: "/assets/images/webp/cakes/DSC09674-medium.webp",
          },
          {
            id: 4,
            title: "Seviyana",
            price: "35",
            desc: "Traditional Mughlai dessert with khus khus and rose",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 5,
            title: "Cake Pops - each",
            price: "35",
            desc: "Bite-sized frosted chocolate & strawberry",
            img: "/assets/images/webp/chocolates/_DSC4309-medium.webp",
          },
          {
            id: 6,
            title: "Mini Cupcakes per piece",
            price: "30",
            desc: "Bite-sized frosted cupcakes in assorted flavors",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 7,
            title: "Medium Cupcakes per piece",
            price: "40",
            desc: "Soft frosted cupcakes in assorted flavors",
            img: "/assets/images/webp/cakes/DSC09650-medium.webp",
          },
          {
            id: 8,
            title: "Cheesecake - Chocolate Mango Nutella",
            price: "750",
            desc: "Creamy cheesecake in irresistible flavors",
            img: "/assets/images/webp/cakes/DSC09674-medium.webp",
          },
        ],
      },
    ];

  return (
    <section className="restaurant-menu-area pb-100 rpb-70 rel z-1">
      <div className="container container-1050">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">Our Complete Menu</span>
              <h2>
                Homemade Delights from Cassandra's Gourmet Kitchen
              </h2>
            </div>
          </div>
        </div>
        <Tab.Container defaultActiveKey={"food-tab1"}>
          <Nav
            as={"ul"}
            className="nav food-menu-tab mb-40"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            {items.map((menu) => (
              <Nav.Item as={"li"} key={menu.id}>
                <Nav.Link
                  as={"button"}
                  className="nav-link"
                  eventKey={menu.event}
                >
                  <i className={menu.icon} />
                  <span>{menu.title}</span>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content className="food-menu-tab-content tab-content">
            {items.map((menu) => (
              <Tab.Pane
                className="tab-pane fade"
                eventKey={menu.event}
                key={menu.id}
              >
                <div className="row gap-90">
                  <div
                    className="col-lg-6 pb-30"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    {menu.items.map((item, i) => i < 4 && <Item item={item} key={item.id} />)}
                  </div>
                  <div
                    className="col-lg-6 pb-30"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    {" "}
                    {menu.items.map(
                      (item, i) => i >= 4 && <Item item={item} key={item.id} />
                    )}
                  </div>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
      <div className="testimonials-shapes">
        <div className="shape one">
          <img src="/assets/images/shapes/chicken-menu1.png" alt="Shape" />
        </div>
        <div className="shape two">
          <img src="/assets/images/shapes/chicken-menu2.png" alt="Shape" />
        </div>
      </div>
    </section>
  );
};
export default RestaurantMenu;
