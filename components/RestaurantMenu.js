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
        title: "Chocolates & Rum",
        icon: "",
        event: "food-tab1",
        items: [
          {
            id: 1,
            title: "Rum Ball (Per Piece)",
            price: "45",
            desc: "Rich chocolate rum ball",
            img: "/assets/images/webp/chocolates/_DSC4309-medium.webp",
          },
          {
            id: 2,
            title: "Rum Balls (Box of 6)",
            price: "260",
            desc: "Box of 6 delicious rum balls",
            img: "/assets/images/webp/chocolates/_DSC4344-medium.webp",
          },
          {
            id: 3,
            title: "Chocolate Liquor (10-12 Pieces)",
            price: "300",
            desc: "Assorted chocolate liquor pieces",
            img: "/assets/images/webp/chocolates/_DSC4309-medium.webp",
          },
          {
            id: 4,
            title: "Chocolate Liquor (Approx. 250g)",
            price: "650",
            desc: "Premium chocolate liquor collection",
            img: "/assets/images/webp/chocolates/_DSC4344-medium.webp",
          },
          {
            id: 5,
            title: "Chocolate Liquor (Approx. 500g)",
            price: "1000",
            desc: "Large premium chocolate liquor collection",
            img: "/assets/images/webp/chocolates/_DSC4309-medium.webp",
          },
          {
            id: 6,
            title: "Assorted Chocolates - Pouch of 6",
            price: "80",
            desc: "Variety of handcrafted chocolates",
            img: "/assets/images/webp/chocolates/_DSC4344-medium.webp",
          },
          {
            id: 7,
            title: "Assorted Chocolates - Pouch of 9",
            price: "120",
            desc: "Delightful assortment of chocolates",
            img: "/assets/images/webp/chocolates/_DSC4309-medium.webp",
          },
          {
            id: 8,
            title: "Assorted Chocolates - Box of 12",
            price: "250",
            desc: "Premium chocolate gift box",
            img: "/assets/images/webp/chocolates/_DSC4344-medium.webp",
          },
        ],
      },
      {
        id: 2,
        title: "Desserts & Sweets",
        icon: "flaticon-cake-slice",
        event: "food-tab2",
        items: [
          {
            id: 1,
            title: "Caramel Custard (per portion)",
            price: "70",
            desc: "Silky custard topped with golden caramel",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 2,
            title: "Date Pudding with Toffee Sauce",
            price: "100",
            desc: "Moist date sponge with rich toffee sauce",
            img: "/assets/images/webp/cakes/DSC09650-medium.webp",
          },
          {
            id: 3,
            title: "Trifle Pudding",
            price: "60",
            desc: "Layered dessert with cake, custard, and cream",
            img: "/assets/images/webp/cakes/DSC09674-medium.webp",
          },
          {
            id: 4,
            title: "Serradura",
            price: "50",
            desc: "Portuguese sawdust pudding",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 5,
            title: "Cake Pops (each)",
            price: "10",
            desc: "Bite-sized frosted cake pops",
            img: "/assets/images/webp/chocolates/_DSC4309-medium.webp",
          },
          {
            id: 6,
            title: "Truffles (10 per box)",
            price: "300",
            desc: "Rich chocolate truffles",
            img: "/assets/images/webp/chocolates/_DSC4344-medium.webp",
          },
          {
            id: 7,
            title: "Cheesecake (per kg)",
            price: "1750",
            desc: "Chocolate/Mango/Nutella flavors",
            img: "/assets/images/webp/cakes/DSC09650-medium.webp",
          },
          {
            id: 8,
            title: "Mousse (per slice)",
            price: "200",
            desc: "Chocolate/Mango/Nutella mousse",
            img: "/assets/images/webp/cakes/DSC09674-medium.webp",
          },
        ],
      },
      {
        id: 3,
        title: "Cupcakes & Bakes",
        icon: "",
        event: "food-tab3",
        items: [
          {
            id: 1,
            title: "Mini Cupcakes (per piece)",
            price: "20",
            desc: "Available in multiple flavors",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 2,
            title: "Medium Cupcakes (per piece)",
            price: "40",
            desc: "Available in multiple flavors",
            img: "/assets/images/webp/cakes/DSC09650-medium.webp",
          },
          {
            id: 3,
            title: "Plain Brownie",
            price: "110",
            desc: "Classic chocolate brownie",
            img: "/assets/images/webp/cakes/DSC09674-medium.webp",
          },
          {
            id: 4,
            title: "Brownie Variations",
            price: "135",
            desc: "Special flavored brownies",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 5,
            title: "Blondies",
            price: "120",
            desc: "Vanilla blonde brownies",
            img: "/assets/images/webp/cakes/DSC09650-medium.webp",
          },
          {
            id: 6,
            title: "Fudge (15 Pieces)",
            price: "400",
            desc: "Rich chocolate fudge",
            img: "/assets/images/webp/chocolates/_DSC4344-medium.webp",
          },
        ],
      },
      {
        id: 4,
        title: "Cookies",
        icon: "flaticon-bread",
        event: "food-tab4",
        items: [
          {
            id: 1,
            title: "Choco Chip Cookie",
            price: "18",
            desc: "Classic chocolate chip cookie",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 2,
            title: "Oat & Raisin Cookie",
            price: "15",
            desc: "Healthy oat and raisin cookie",
            img: "/assets/images/webp/cakes/DSC09650-medium.webp",
          },
          {
            id: 3,
            title: "Nankhatai",
            price: "18",
            desc: "Traditional Indian shortbread",
            img: "/assets/images/webp/cakes/DSC09674-medium.webp",
          },
          {
            id: 4,
            title: "Peanut Butter Cookie",
            price: "18",
            desc: "Rich peanut butter cookie",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 5,
            title: "Shortbread Cookie",
            price: "18",
            desc: "Buttery shortbread cookie",
            img: "/assets/images/webp/cakes/DSC09650-medium.webp",
          },
          {
            id: 6,
            title: "Sugar Cookie",
            price: "15",
            desc: "Sweet and simple sugar cookie",
            img: "/assets/images/webp/cakes/DSC09674-medium.webp",
          },
        ],
      },
      {
        id: 5,
        title: "Breads & Pizza",
        icon: "flaticon-bread",
        event: "food-tab5",
        items: [
          {
            id: 1,
            title: "Korean Cheese Bun (Small)",
            price: "80",
            desc: "Soft bun filled with melted cheese",
            img: "/assets/images/webp/buns/_DSC4259-medium.webp",
          },
          {
            id: 2,
            title: "Korean Cheese Bun (Regular)",
            price: "200",
            desc: "Fluffy cheese bun with Korean spice",
            img: "/assets/images/webp/buns/_DSC4274-medium.webp",
          },
          {
            id: 3,
            title: "Korean Cheese Bun (Large)",
            price: "250",
            desc: "Extra large fluffy cheese bun",
            img: "/assets/images/webp/buns/_DSC4281-medium.webp",
          },
          {
            id: 4,
            title: "Garlic Bread (4 Nos)",
            price: "100",
            desc: "Crispy bread topped with garlic butter",
            img: "/assets/images/webp/buns/_DSC4259-medium.webp",
          },
          {
            id: 5,
            title: "Margherita Pizza",
            price: "160",
            desc: "Classic cheese pizza with fresh herbs",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 6,
            title: "Veg Pizza",
            price: "190",
            desc: "Loaded veggie toppings on cheese base",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 7,
            title: "Chicken Pizza",
            price: "240",
            desc: "Juicy chicken toppings on cheese base",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 8,
            title: "Veg Burger",
            price: "190",
            desc: "Juicy veg patty on a cheese base",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 9,
            title: "Chicken Burger",
            price: "325",
            desc: "Juicy chicken patty stuffed with cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
        ],
      },
      {
        id: 6,
        title: "Croissants",
        icon: "flaticon-croissant",
        event: "food-tab6",
        items: [
          {
            id: 1,
            title: "Butter Croissant",
            price: "125",
            desc: "Flaky golden croissant with buttery layers",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 2,
            title: "Chocolate Croissant",
            price: "250",
            desc: "Flaky croissant filled with rich chocolate",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 3,
            title: "Chicken Ham & Cheese Croissant",
            price: "275",
            desc: "Savory croissant with ham, chicken and cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 4,
            title: "Coleslaw Croissant",
            price: "175",
            desc: "Creamy coleslaw in flaky croissant",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
        ],
      },
      {
        id: 7,
        title: "Puffs & Momos",
        icon: "flaticon-croissant",
        event: "food-tab7",
        items: [
          {
            id: 1,
            title: "Paneer Puff",
            price: "60",
            desc: "Spiced paneer filling in flaky pastry",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 2,
            title: "Chicken Puff",
            price: "60",
            desc: "Seasoned chicken filling in flaky pastry",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 3,
            title: "Egg & Cheese Puff",
            price: "60",
            desc: "Combination of egg with melted cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 4,
            title: "Double Egg Puff",
            price: "60",
            desc: "Double egg in flaky pastry",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 5,
            title: "Veg Puff",
            price: "40",
            desc: "Crisp layers stuffed with savory veggie mix",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 6,
            title: "Veg Momos (6 Pieces)",
            price: "65",
            desc: "Soft steamed momos with veggie filling",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 7,
            title: "Chicken Momos (6 Pieces)",
            price: "75",
            desc: "Soft steamed momos with chicken filling",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
        ],
      },
      {
        id: 8,
        title: "Sandwiches",
        icon: "flaticon-sandwich",
        event: "food-tab8",
        items: [
          {
            id: 1,
            title: "Chicken Sandwich",
            price: "90",
            desc: "Grilled chicken stuffed between soft bread",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 2,
            title: "Coleslaw Sandwich",
            price: "60",
            desc: "Creamy, crunchy coleslaw in every bite",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 3,
            title: "Chicken with Cheese Sandwich",
            price: "100",
            desc: "Juicy chicken topped with melted cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 4,
            title: "Egg with Cheese Sandwich",
            price: "75",
            desc: "Fluffy egg paired with gooey cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 5,
            title: "Chutney Veg/Cheese Sandwich",
            price: "55",
            desc: "Spicy chutney with fresh veggies or cheese",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
        ],
      },
      {
        id: 9,
        title: "Tarts",
        icon: "flaticon-cake-slice",
        event: "food-tab9",
        items: [
          {
            id: 1,
            title: "Lemon Tart",
            price: "90",
            desc: "Tangy lemon in a crisp tart shell",
            img: "/assets/images/webp/cakes/DSC09535-medium.webp",
          },
          {
            id: 2,
            title: "Salted Caramel Tart",
            price: "110",
            desc: "Sweet and salty caramel tart",
            img: "/assets/images/webp/cakes/DSC09650-medium.webp",
          },
          {
            id: 3,
            title: "Chocolate Tart",
            price: "115",
            desc: "Smooth chocolate in a buttery base",
            img: "/assets/images/webp/chocolates/_DSC4309-medium.webp",
          },
          {
            id: 4,
            title: "Hazelnut Chocolate Praline Tart",
            price: "125",
            desc: "Rich chocolate with crunchy hazelnut",
            img: "/assets/images/webp/chocolates/_DSC4344-medium.webp",
          },
          {
            id: 5,
            title: "Veg Tart",
            price: "110",
            desc: "Savory vegetable tart",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 6,
            title: "Chicken & Mushroom Tart",
            price: "140",
            desc: "Chicken with mushrooms in flaky crust",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 7,
            title: "Spicy Chicken Tart",
            price: "150",
            desc: "Spiced chicken in crisp tart shell",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 8,
            title: "Paneer Tart",
            price: "90",
            desc: "Spiced paneer in tart shell",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
        ],
      },
      {
        id: 10,
        title: "Quiches & Bakes",
        icon: "flaticon-cake-slice",
        event: "food-tab10",
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
            price: "80",
            desc: "Classic savory egg quiche in crisp shell",
            img: "/assets/images/webp/savories/_DSC4326-medium.webp",
          },
          {
            id: 5,
            title: "Baked Vegetable",
            price: "300",
            desc: "Wholesome mix of veggies baked to perfection",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 6,
            title: "Spinach & Corn",
            price: "300",
            desc: "Creamy spinach and sweet corn casserole",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
        ],
      },
      {
        id: 11,
        title: "Pasta",
        icon: "flaticon-noodles",
        event: "food-tab11",
        items: [
          {
            id: 1,
            title: "Veg Pasta",
            price: "275",
            desc: "Tender pasta tossed in creamy sauce",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
          },
          {
            id: 2,
            title: "Chicken Pasta",
            price: "325",
            desc: "Juicy chicken in rich pasta",
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
            price: "350",
            desc: "Hearty spaghetti served with meatballs",
            img: "/assets/images/webp/platters/_DSC4385-medium.webp",
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
          <img src="/assets/images/shapes/chicken-menu1.webp" alt="Shape" />
        </div>
        <div className="shape two">
          <img src="/assets/images/shapes/chicken-menu2.webp" alt="Shape" />
        </div>
      </div>
    </section>
  );
};
export default RestaurantMenu;
