"use client";
import TestimonialSlider from "@/components/TestimonialSlider";
import WellFoodLayout from "@/layout/WellFoodLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";

const page = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  // Menu data from RestaurantMenu
  const menuData = [
    {
      category: "chocolates",
      title: "Chocolates & Rum",
      items: [
        { id: 1, title: "Rum Balls (Per Piece)", price: "45", img: "/assets/images/webp/productgallery/_DSC4535-thumbnail-removebg-preview.webp" },
        { id: 2, title: "Rum Balls (Box of 6)", price: "260", img: "/assets/images/webp/productgallery/shopping__1_-removebg-preview.webp" },
        { id: 3, title: "Chocolate Liquors 10P", price: "300", img: "/assets/images/webp/productgallery/liquorChoco-1.webp" },
        { id: 4, title: "Assorted Chocolates 12P", price: "250", img: "/assets/images/webp/productgallery/assortedChoco-1.webp" },
      ]
    },
    {
      category: "desserts",
      title: "Desserts & Sweets",
      items: [
        { id: 1, title: "Caramel Custard", price: "70", img: "/assets/images/webp/productgallery/caramelCustard.webp", badge: "Popular" },
        { id: 2, title: "Date Pudding Toffee Sauce", price: "100", img: "/assets/images/webp/productgallery/datePudding.webp" },
        { id: 3, title: "Trifle Pudding", price: "60", img: "/assets/images/webp/productgallery/triflePudding.webp" },
        { id: 4, title: "Cheesecake (per kg)", price: "1750", img: "/assets/images/webp/productgallery/cheesecake.webp" },
      ]
    },
    {
      category: "cupcakes",
      title: "Cupcakes & Bakes",
      items: [
        { id: 1, title: "Mini Cupcakes", price: "20", img: "/assets/images/webp/productgallery/miniCupcake.webp" },
        { id: 2, title: "Medium Cupcakes", price: "40", img: "/assets/images/webp/productgallery/mediumCupcakes.webp" },
        { id: 3, title: "Plain Brownie", price: "110", img: "/assets/images/webp/productgallery/plainBrownie.webp" },
        { id: 4, title: "Blondies", price: "120", img: "/assets/images/webp/productgallery/blondies.webp" },
      ]
    },
    {
      category: "cookies",
      title: "Cookies",
      items: [
        { id: 1, title: "Choco Chip Cookie", price: "18", img: "/assets/images/webp/productgallery/ChocoChipCookie.webp" },
        { id: 2, title: "Oat & Raisin Cookie", price: "15", img: "/assets/images/webp/productgallery/oatCookie.webp" },
        { id: 3, title: "Peanut Butter Cookie", price: "18", img: "/assets/images/webp/productgallery/peanutCookie.webp" },
        { id: 4, title: "Shortbread Cookie", price: "18", img: "/assets/images/webp/productgallery/shortBreadCookie.webp" },
      ]
    },
    {
      category: "breads",
      title: "Breads & Pizza",
      items: [
        { id: 1, title: "Korean Cheese Bun (Small)", price: "80", img: "/assets/images/webp/productgallery/KRCBun.webp", badge: "Specialty" },
        { id: 2, title: "Korean Cheese Bun (Rg)", price: "200", img: "/assets/images/webp/productgallery/KLCBun.webp" },
        { id: 3, title: "Margherita Pizza", price: "160", img: "/assets/images/webp/productgallery/margheritaPizza.webp" },
        { id: 4, title: "Veg Burger", price: "190", img: "/assets/images/webp/productgallery/vegBurger.webp" },
      ]
    },
    {
      category: "croissants",
      title: "Croissants",
      items: [
        { id: 1, title: "Butter Croissant", price: "125", img: "/assets/images/webp/productgallery/butterCroissant.webp" },
        { id: 2, title: "Chocolate Croissant", price: "250", img: "/assets/images/webp/productgallery/chocoCroissant.webp" },
        { id: 3, title: "Chicken Cheese Croissant", price: "275", img: "/assets/images/webp/productgallery/chickenCroissant.webp" },
        { id: 4, title: "Coleslaw Croissant", price: "175", img: "/assets/images/webp/productgallery/coleslawCroissant.webp" },
      ]
    },
    {
      category: "puffs",
      title: "Puffs & Momos",
      items: [
        { id: 1, title: "Chicken Puff", price: "60", img: "/assets/images/webp/productgallery/chickenPuff.webp" },
        { id: 2, title: "Paneer Puff", price: "60", img: "/assets/images/webp/productgallery/paneerPuff.webp" },
        { id: 3, title: "Egg Puff ", price: "65", img: "/assets/images/webp/productgallery/eggpuff.webp" },
        { id: 4, title: "Veg Puff", price: "65", img: "/assets/images/webp/productgallery/vegPuff.webp" },
        { id: 5, title: "Veg Momos (6 Pieces)", price: "65", img: "/assets/images/webp/productgallery/vegmomos.webp" },
        { id: 6, title: "Chicken Momos (6 Pieces)", price: "75", img: "/assets/images/webp/productgallery/chickenmomos.webp" },
      ]
    },
    {
      category: "sandwiches",
      title: "Sandwiches",
      items: [
        { id: 1, title: "Chicken Sandwich", price: "90", img: "/assets/images/webp/productgallery/chickenSandwich.webp" },
        { id: 2, title: "Coleslaw Sandwich", price: "60", img: "/assets/images/webp/productgallery/coleslawSandwich.webp" },
        { id: 3, title: "Chicken Cheese Sandwich", price: "100", img: "/assets/images/webp/productgallery/cheesesandwich.webp" },
        { id: 4, title: "Egg with Cheese Sandwich", price: "75", img: "/assets/images/webp/productgallery/eggsandwich.webp" },
      ]
    },
    {
      category: "tarts",
      title: "Tarts",
      items: [
        { id: 1, title: "Chocolate Tart", price: "115", img: "/assets/images/webp/productgallery/chocoTart.webp" },
        { id: 2, title: "Lemon Tart", price: "90", img: "/assets/images/webp/productgallery/lemonTart.webp" },
        { id: 3, title: "Salted Caramel Tart", price: "110", img: "/assets/images/webp/productgallery/caramelTart.webp" },
        { id: 4, title: "Chicken & Mushroom Tart", price: "140", img: "/assets/images/webp/productgallery/chickenTart.webp" },
      ]
    },
    {
      category: "quiches",
      title: "Quiches & Bakes",
      items: [
        { id: 1, title: "Mushroom & Cheese Quiche", price: "115", img: "/assets/images/webp/productgallery/mushroomQuiche.webp" },
        { id: 2, title: "Bacon Mushroom  Quiche", price: "125", img: "/assets/images/webp/productgallery/baconmushroomQuiche.webp" },
        { id: 3, title: "Chicken Quiche", price: "125", img: "/assets/images/webp/productgallery/chickenQuiche.webp" },
        { id: 4, title: "Plain Quiche", price: "125", img: "/assets/images/webp/productgallery/plainQuiche.webp" },
        { id: 5, title: "Baked Vegetable", price: "300", img: "/assets/images/webp/productgallery/bakedVegetables.webp" },
        { id: 6, title: "Spinach & Corn", price: "300", img: "/assets/images/webp/productgallery/SpinachCorn.webp" },
      ]
    },
    {
      category: "pasta",
      title: "Pasta",
      items: [
        { id: 1, title: "Veg Pasta", price: "275", img: "/assets/images/webp/productgallery/vegPasta.webp" },
        { id: 2, title: "Chicken Pasta", price: "325", img: "/assets/images/webp/productgallery/chickenPasta.webp" },
        { id: 3, title: "Veg Lasagna", price: "325", img: "/assets/images/webp/productgallery/vegLasagna.webp" },
        { id: 4, title: "Spaghetti with Meat Balls", price: "350", img: "/assets/images/webp/productgallery/vegetableBalls.webp" },
      ]
    }
  ];

  // Get filtered items
  const getFilteredItems = () => {
    if (activeFilter === "*") {
      // Return all items from all categories
      return menuData.flatMap(cat =>
        cat.items.map(item => ({ ...item, category: cat.category }))
      );
    }
    // Return items from selected category
    const category = menuData.find(cat => cat.category === activeFilter.replace('.', ''));
    return category ? category.items.map(item => ({ ...item, category: category.category })) : [];
  };

  const filteredItems = getFilteredItems();

  return (
    <WellFoodLayout footer={1}>
      {" "}
      {/* Hero Area Start */}
      <section
        className="hero-area-five bgs-cover pt-185 rpt-145 pb-250 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/hero-five.webp)",
        }}
      >
        <div className="container">
          <div
            className="hero-content-four style-two py-60 rpt-0 text-center text-white"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <span className="sub-title">Good Homebased Bakery, Confectionery & Savories</span>
            <h1>Cassandra's Gourmet</h1>
            <p style={{ fontSize: '14px', paddingLeft: '20px', paddingRight: '20px' }}>
              Where every creation is made with love from my hearth to your heart.
              Homemade, fresh, and customized to your taste - because good food brings joy.
            </p>
            {/* <Link href="shop" className="theme-btn mt-25">
              Book now <i className="far fa-arrow-alt-right" />
            </Link> */}
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape1.webp" alt="Hero Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape2.webp" alt="Hero Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/hero-shape5.webp" alt="Hero Shape" />
          </div>
          <div
            className="hero-left"
            data-aos="zoom-in"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="/assets/images/webp/Hero/Cake – 1.webp"
              alt="Korean Buns"
            />
          </div>
          <div
            className="hero-right"
            data-aos="zoom-in"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="/assets/images/webp/Hero/Cake1.webp"
              alt="Artisan Chocolates"
            />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Food Category Area start */}
      <section className="category-area rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular food category</span>
                <h2>Explore Our Homemade Specialties</h2>
              </div>
            </div>
          </div>
          <Slider {...sliderProps.fcTwoActive} className="fc-two-active">
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="icon">
                <img src="/assets/images/webp/special/rumballs.webp" alt="Icon" />
              </div>
              <h5>Rumballs</h5>
              <Link href="/menu-restaurant?tab=food-tab1" className="btn">
                Specialty
              </Link>
            </div>
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="icon">
                <img src="/assets/images/webp/special/chocoLiquor.webp" alt="Icon" />
              </div>
              <h5>Chocolate liquor</h5>
              <Link href="/menu-restaurant?tab=food-tab1" className="btn">
                Handcrafted
              </Link>
            </div>
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              {/* <div className="icon">
                <img src="assets/images/shapes/fc-icon3.png" alt="Icon" />
              </div>
              <h5>Assorted chocolates</h5>
              <Link href="menu-restaurant" className="btn">
                Made to Order
              </Link>
            </div>
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            > */}
              <div className="icon">
                <img src="/assets/images/webp/special/brownies.webp" alt="Icon" />
              </div>
              <h5>Brownies</h5>
              <Link href="/menu-restaurant?tab=food-tab3" className="btn">
                Fresh Baked
              </Link>
            </div>
            <div
              className="fc-two-item"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="icon">
                <img src="/assets/images/webp/special/cookies.webp" alt="Icon" />
              </div>
              <h5>Cookies</h5>
              <Link href="/menu-restaurant?tab=food-tab4" className="btn">
                Homemade
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/fudge.webp" alt="Icon" />
              </div>
              <h5>Fudge</h5>
              <Link href="/menu-restaurant?tab=food-tab3" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/desserts.webp" alt="Icon" />
              </div>
              <h5>Desserts</h5>
              <Link href="/menu-restaurant?tab=food-tab2" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/cupcakes.webp" alt="Icon" />
              </div>
              <h5>Cupcakes</h5>
              <Link href="/menu-restaurant?tab=food-tab3" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/quiches.webp" alt="Icon" />
              </div>
              <h5>Quiches</h5>
              <Link href="/menu-restaurant?tab=food-tab10" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/pasta.webp" alt="Icon" />
              </div>
              <h5>Pasta</h5>
              <Link href="/menu-restaurant?tab=food-tab11" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/breads.webp" alt="Icon" />
              </div>
              <h5>Breads</h5>
              <Link href="/menu-restaurant?tab=food-tab5" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/croissants.webp" alt="Icon" />
              </div>
              <h5>Croissants</h5>
              <Link href="/menu-restaurant?tab=food-tab6" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/puffs.webp" alt="Icon" />
              </div>
              <h5>Puffs</h5>
              <Link href="/menu-restaurant?tab=food-tab7" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/momos.webp" alt="Icon" />
              </div>
              <h5>Momos</h5>
              <Link href="/menu-restaurant?tab=food-tab7" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/sandwich.webp" alt="Icon" />
              </div>
              <h5>Sandwiches</h5>
              <Link href="/menu-restaurant?tab=food-tab8" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/vegbakes.webp" alt="Icon" />
              </div>
              <h5>Veg Bakes</h5>
              <Link href="/menu-restaurant?tab=food-tab10" className="btn">
                View Items
              </Link>
            </div>
            <div className="fc-two-item">
              <div className="icon">
                <img src="/assets/images/webp/special/tarts.webp" alt="Icon" />
              </div>
              <h5>Tarts</h5>
              <Link href="/menu-restaurant?tab=food-tab9" className="btn">
                View Items
              </Link>
            </div>
          </Slider>
        </div>
      </section>
      {/* Food Category Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-120 rpt-95 rel z-1">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/heading1.webp" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/heading2.webp" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* About Us Area start */}
      <section className="about-us-area pt-100 rpt-80 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="about-image-five mb-30 rmb-55">
                <img src="assets/images/about/about-five.webp" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-us-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">About Cassandra's Gourmet</span>
                  <h2>Baking from My Hearth, Cooking from My Heart</h2>
                </div>
                <p>
                  My journey began at age 10, learning the art of baking from my Mom.
                  30 years ago, I started making chocolates when sugar-free options weren't easily available -
                  my parents were diabetic, and Mom was a chocoholic. What started as a necessity became my passion.
                </p>
                <p>
                  After 20 years as an HR Professional, I quit to follow my true calling - baking from home.
                  I love the comfort of home, so I continue to do my baking & cooking from my hearth.
                  My greatest joy comes from seeing people enjoying my food. I love to eat and feed others.
                </p>
                <div className="about-btn-author pt-5 mb-45">
                  <Link href="about" className="theme-btn style-two">
                    learn more us <i className="far fa-arrow-alt-right" />
                  </Link>
                  <Link href="about" className="read-more">
                    Explore popular menu{" "}
                    <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-high-quality" />
                      </div>
                      <h5>
                        <Link href="menu-burger">Homemade & Fresh</Link>
                      </h5>
                      <p>
                        Made only to order - no premade dishes. Fresh ingredients, carefully chosen.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-chef" />
                      </div>
                      <h5>
                        <Link href="menu-burger">Generational Recipes</Link>
                      </h5>
                      <p>
                        Some recipes handed down through 2 generations, made with love.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Section Devider Area start */}
      <div className="section-devider d-flex">
        <img
          className="w-100"
          src="assets/images/shapes/wave-shape1.png"
          alt="Wave Shape"
        />
      </div>
      {/* Section Devider Us Area end */}
      {/* Filtarabe Food Area start */}
      <section className="pood-filter-area bgc-lighter pt-30 rpt-80 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-50">
                <span className="sub-title mb-5">product gallery</span>
                <h2>explore latest product gallery</h2>
              </div>
            </div>
          </div>
          <ul
            className="nav product-filter-nav filter-btns-one justify-content-center mb-40"
            role="tablist"
          >
            <li
              className={activeFilter === "*" ? "active" : ""}
              onClick={() => setActiveFilter("*")}
              style={{ cursor: "pointer" }}
            >
              Show All
            </li>
            <li
              className={activeFilter === "chocolates" ? "active" : ""}
              onClick={() => setActiveFilter("chocolates")}
              style={{ cursor: "pointer" }}
            >
              Chocolates & Rum
            </li>
            <li
              className={activeFilter === "desserts" ? "active" : ""}
              onClick={() => setActiveFilter("desserts")}
              style={{ cursor: "pointer" }}
            >
              Desserts & Sweets
            </li>
            <li
              className={activeFilter === "cupcakes" ? "active" : ""}
              onClick={() => setActiveFilter("cupcakes")}
              style={{ cursor: "pointer" }}
            >
              Cupcakes & Bakes
            </li>
            <li
              className={activeFilter === "cookies" ? "active" : ""}
              onClick={() => setActiveFilter("cookies")}
              style={{ cursor: "pointer" }}
            >
              Cookies
            </li>
            <li
              className={activeFilter === "breads" ? "active" : ""}
              onClick={() => setActiveFilter("breads")}
              style={{ cursor: "pointer" }}
            >
              Breads & Pizza
            </li>
            <li
              className={activeFilter === "croissants" ? "active" : ""}
              onClick={() => setActiveFilter("croissants")}
              style={{ cursor: "pointer" }}
            >
              Croissants
            </li>
            <li
              className={activeFilter === "puffs" ? "active" : ""}
              onClick={() => setActiveFilter("puffs")}
              style={{ cursor: "pointer" }}
            >
              Puffs & Momos
            </li>
            <li
              className={activeFilter === "sandwiches" ? "active" : ""}
              onClick={() => setActiveFilter("sandwiches")}
              style={{ cursor: "pointer" }}
            >
              Sandwiches
            </li>
            <li
              className={activeFilter === "tarts" ? "active" : ""}
              onClick={() => setActiveFilter("tarts")}
              style={{ cursor: "pointer" }}
            >
              Tarts
            </li>
            <li
              className={activeFilter === "quiches" ? "active" : ""}
              onClick={() => setActiveFilter("quiches")}
              style={{ cursor: "pointer" }}
            >
              Quiches & Bakes
            </li>
            <li
              className={activeFilter === "pasta" ? "active" : ""}
              onClick={() => setActiveFilter("pasta")}
              style={{ cursor: "pointer" }}
            >
              Pasta
            </li>
          </ul>
          <div className="row product-filter-active">
            {filteredItems.map((item) => (
              <div key={`${item.category}-${item.id}`} className={`col-xl-3 col-lg-4 col-sm-6 item ${item.category}`}>
                <div className="product-item-two">
                  <div className="image">
                    <img src={item.img} alt={item.title} />
                    {item.badge && <span className="pizza-badge">{item.badge}</span>}
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <span>{item.title}</span>
                    </h5>
                    <span className="price">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Filtarabe Food Area end */}
      {/* Category Banner area start */}
      <div className="category-banner-area-five">
        <div className="container-fluid">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
            <div
              className="col"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="category-banner-item style-three gradient-two"
                style={{
                  backgroundImage:
                    "url(/assets/images/webp/productgallery/left.webp)",
                }}
              >
                <span className="quality">Quality Food</span>
                <h2>Cake Quite Sweet, Made with Love</h2>
                <Link href="shop" className="theme-btn style-two">
                  Shop now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="category-banner-item style-four"
                style={{
                  backgroundImage:
                    "url(/assets/images/webp/productgallery/middle.webp)",
                }}
              >


              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="category-banner-item style-three gradient-three"
                style={{
                  backgroundImage:
                    "url(/assets/images/webp/productgallery/right.webp)",
                }}
              >
                <span className="quality">Quality Food</span>
                <h2>Fresh Pizza</h2>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Banner area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-65 rel z-1">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/heading1.webp" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/heading2.webp" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Popular Menu Area start */}
      <section className="popular-area pt-110 rpt-85 pb-130 rpb-100 rel z-1" style={{ paddingBottom: 'px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="popular-menu-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">Popular Menu</span>
                  <h2>We Provide Exclusive Food Explore Popular Food</h2>
                </div>
                <img src="/assets/images/webp/home/best.webp" alt="Food Menu" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="food-menu-five"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="/assets/images/webp/home/browine.webp"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Brownie</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">Rs.₹110</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="/assets/images/webp/home/pizza.webp"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Margherita Pizza</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">Rs.₹160</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="/assets/images/webp/home/cake.webp"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Mini Cupcakes</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">Rs.₹20</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="/assets/images/webp/home/burger.webp"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Chicken Burger</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">Rs. ₹325</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
                <div className="food-menu-item style-two">
                  <div className="image">
                    <img
                      src="/assets/images/webp/home/dessert.webp"
                      alt="Food Menu"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <span className="title">Trifle Pudding</span>{" "}
                      <span className="dots" />{" "}
                      <span className="price">Rs. ₹60</span>
                    </h5>
                    <p>Diverse menu features array of delectable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Menu Area end */}
      {/* Customer Testimonials Area (old inline section — hidden, replaced by TestimonialSlider component)
      <section className="testimonials-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      </section>
      */}
      {/* Section Devider Area start */}
      <div className="section-devider d-flex">
        <img
          className="w-100"
          src="assets/images/shapes/wave-shape2.png"
          alt="Wave Shape"
        />
      </div>
      {/* Section Devider Us Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-five-area bgc-dark-green pt-20 rpt-50 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="why-choose-five-content text-white rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">Why Choose Us</span>
                  <h2>Quality, Tradition & Customization in Every Bite</h2>
                </div>
                <p>
                  At Cassandra's Gourmet, we maintain separate kitchens for Veg & Non-Veg preparations.
                  Every ingredient is hand-picked & carefully chosen. We make them the way I make for my children -
                  with love, care, and attention to detail. Every order is customized to your taste.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="why-choose-five-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/webp/home/Food.webp"
                  alt="Why Choose Us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Features Area start */}
      <section className="features-five-area bgc-dark-green">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-image-part style-four"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="/assets/images/webp/home/food2.webp"
                  alt="Features"
                />
                <div
                  className="quality-food"
                  style={{
                    backgroundImage: "url(assets/images/shapes/about-star.png)",
                  }}
                >
                  <span className="for-border" />
                  <span className="text">
                    quality <br />
                    food
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="features-five-wrap mt-70 rmt-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="featured-item-two">
                  <div className="icon">
                    <i className="flaticon-broccoli" />
                  </div>
                  <div className="content">
                    <h4>100% Homemade</h4>
                    <p>
                      Everything is homemade from scratch with carefully hand-picked ingredients.
                      Made with the same care and love as I would for my own family.
                    </p>
                  </div>
                </div>
                <div className="featured-item-two">
                  <div className="icon">
                    <i className="flaticon-broccoli" />
                  </div>
                  <div className="content">
                    <h4>Fresh & Customized</h4>
                    <p>
                      Made only to order - no premade dishes. Every creation is fresh and
                      customized to your taste preferences.
                    </p>
                  </div>
                </div>
                <div className="featured-item-two">
                  <div className="icon">
                    <i className="flaticon-broccoli" />
                  </div>
                  <div className="content">
                    <h4>Made to Order</h4>
                    <p>
                      Each dish is prepared fresh when you order. We don't believe in pre-made items -
                      your food is made specially for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-dark-green pt-120 rpt-60 rel z-1">
        <span className="marquee-wrap white-text">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/heading1.webp" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/heading2.webp" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Gallery Area start */}
      <div className="gallery-area bgc-dark-green py-100 rpy-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="/assets/images/webp/home/Adobe Express - file (1).webp"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-4 order-md-0 col-md-7">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="/assets/images/webp/home/Adobe Express - file (2).webp"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="/assets/images/webp/home/Adobe Express - file (3).webp"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="/assets/images/webp/home/Adobe Express - file (4).webp"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="/assets/images/webp/home/Adobe Express - file (5).webp"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="gallery-item-four"
                data-aos="fade-up"
                data-aos-delay={250}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="/assets/images/webp/home/Adobe Express - file (6).webp"
                  alt="Gallery Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Area end */}
      {/* Testimonials Two Area start */}
      <TestimonialSlider />
      {/* Testimonials Two Area end */}
      {/* Blog Area start */}
      {/* <section className="blog-area-five bg-light pt-130 rpt-100 pb-95 rpb-65 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">latest news &amp; blog</span>
                <h2>get every single updates latest</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="date">Mar 25</span>
                  <img src="assets/images/blog/blog-three1.webp" alt="Blog" />
                </div>
                <div className="content">
                  <a href="#" className="tag">
                    <i className="far fa-tag" /> Organic Juice
                  </a>
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring to ways They Wonders Food
                      Restaurant
                    </Link>
                  </h4>
                  <ul className="blog-meta-two style-two">
                    <li>
                      <i className="far fa-user" />
                      <a href="#">David Mick</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <a href="#">comments (2)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="date">Mar 25</span>
                  <img src="assets/images/blog/blog-three2.webp" alt="Blog" />
                </div>
                <div className="content">
                  <a href="#" className="tag">
                    <i className="far fa-tag" /> Organic Juice
                  </a>
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring to ways They Wonders Food
                      Restaurant
                    </Link>
                  </h4>
                  <ul className="blog-meta-two style-two">
                    <li>
                      <i className="far fa-user" />
                      <a href="#">David Mick</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <a href="#">comments (2)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item-two"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="date">Mar 25</span>
                  <img src="assets/images/blog/blog-three3.webp" alt="Blog" />
                </div>
                <div className="content">
                  <a href="#" className="tag">
                    <i className="far fa-tag" /> Organic Juice
                  </a>
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring to ways They Wonders Food
                      Restaurant
                    </Link>
                  </h4>
                  <ul className="blog-meta-two style-two">
                    <li>
                      <i className="far fa-user" />
                      <a href="#">David Mick</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <a href="#">comments (2)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Blog Area end */}
      {/* Client Area start */}
      <div className="client-area bg-light rel z-1">
        <div className="container">
          <div className="client-wrap-two py-80">
            <Slider {...sliderProps.clientActive} className="client-active">
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client1.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client2.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client3.webp"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client4.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client5.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client6.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client1.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client2.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client3.webp"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client4.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client5.png"
                  alt="Client Logo"
                />
              </a>
              <a href="#" className="client-item">
                <img
                  src="assets/images/clients/client6.png"
                  alt="Client Logo"
                />
              </a>
            </Slider>
          </div>
        </div>
      </div>
      {/* Client Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-dark-green pt-120 rpt-60 rel z-2">
        <span className="marquee-wrap white-text">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/heading1.webp" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/heading2.webp" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Newsletter Area start */}
      {/* <section className="newsletter-area bgc-dark-green pt-75 rel z-1">
        <div className="container">
          <div className="newsletter-wrap">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div
                  className="section-title text-white rmb-25"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title mb-5">join our newsletter</span>
                  <h2>subscribe follow newsletter to get more updates</h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div
                  className="newsletter-form-wrap"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6>Hurry up to join us to get more offer.</h6>
                  <form className="newsletter-form style-two mt-15" action="#">
                    <label htmlFor="news-email">
                      <i className="fas fa-envelope" />
                    </label>
                    <input
                      id="news-email"
                      type="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <button className="theme-btn style-two" type="submit">
                      Subscribe <i className="far fa-arrow-alt-right" />
                    </button>
                  </form>
                  <div className="check-field mt-15">
                    <input id="update-news" type="checkbox" />
                    <label htmlFor="update-news">
                      Get 15 days update news &amp; latest offer
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Newsletter Area end */}
    </WellFoodLayout>
  );
};
export default page;
