"use client";
import { wellfoodUtility } from "@/utility";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div
        className="form-back-drop"
        onClick={() =>
          document
            .querySelector("body")
            .classList.remove("side-content-visible")
        }
      />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div
            className="cross-icon"
            onClick={() =>
              document
                .querySelector("body")
                .classList.remove("side-content-visible")
            }
          >
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document
                  .querySelector("body")
                  .classList.remove("side-content-visible");
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn style-two">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <Link href="contact">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="contact">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="contact">
              <i className="fab fa-instagram" />
            </Link>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};

const SearchBtn = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  let domNode = useClickOutside(() => {
    setToggleSearch(false);
  });
  return (
    <div className="nav-search py-10" ref={domNode}>
      <button
        className="far fa-search"
        onClick={() => setToggleSearch(!toggleSearch)}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setToggleSearch(false);
        }}
        className={toggleSearch ? "" : "hide"}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </div>
  );
};

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <header className="main-header white-menu menu-absolute d-block d-xl-none">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            {/* Top bar: Logo + Hamburger only */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              {/* Logo */}
              <Link href="/">
                <img
                  src="/assets/images/logos/logodark.webp"
                  alt="Cassandra's Gourmet"
                  title="Logo"
                  style={{ height: '55px', width: 'auto', display: 'block' }}
                />
              </Link>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setToggle(!toggle)}
                style={{
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.6)',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Toggle navigation"
              >
                <span style={{ display: 'block', width: '22px', height: '2px', background: 'white', borderRadius: '2px' }} />
                <span style={{ display: 'block', width: '22px', height: '2px', background: 'white', borderRadius: '2px' }} />
                <span style={{ display: 'block', width: '22px', height: '2px', background: 'white', borderRadius: '2px' }} />
              </button>
            </div>

            {/* Collapsible Dropdown Menu */}
            {toggle && (
              <div style={{
                background: 'rgba(20, 50, 30, 0.98)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                padding: '8px 0 16px',
              }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/menu-restaurant', label: 'Menu' },
                    { href: '/gallery', label: 'Gallery' },
                    { href: '/blog', label: 'Blog' },
                    { href: '/about', label: 'About' },
                    { href: '/contact', label: 'Contact' },
                  ].map((item) => (
                    <li key={item.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      <Link
                        href={item.href}
                        onClick={() => setToggle(false)}
                        style={{
                          display: 'block',
                          padding: '13px 24px',
                          color: 'white',
                          fontSize: '15px',
                          fontWeight: '500',
                          letterSpacing: '0.5px',
                          textDecoration: 'none',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Social Icons inside menu */}
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 24px 4px',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  marginTop: '8px',
                }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', textDecoration: 'none' }}>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/cassandras_gourmet?igsh=dzN5c3ZmY2Fmd24z" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', textDecoration: 'none' }}>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', textDecoration: 'none' }}>
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="bg-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
    </Fragment>
  );
};

const Header = () => {
  useEffect(() => {
    wellfoodUtility.fixedHeader();
  }, []);

  return (
    <Fragment>
      <header className="main-header white-menu menu-absolute d-none d-xl-block">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/assets/images/logos/logodark.webp"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-5 ps-xxl-4 clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header py-10">
                    <div className="mobile-logo">
                      <Link href="/">
                        <img
                          src="/assets/images/logos/logodark.webp"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="dropdown">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="menu-restaurant">Menu</Link>
                      </li>
                      <li className="dropdown">
                        <a href="gallery">Gallery</a>
                        {/* <ul>
                          <li>
                            <Link href="about">About Us</Link>
                          </li>
                          <li>
                            <Link href="history">Our History</Link>
                            </li>
                            <li>
                            <Link href="faq">faqs</Link>
                          </li>
                          <li className="dropdown">
                            <a href="#">chefs</a>
                            <ul>
                              <li>
                                <Link href="chefs">Our chefs</Link>
                              </li>
                              <li>
                                <Link href="chef-details">chef Details</Link>
                              </li>
                            </ul>
                            <div className="dropdown-btn">
                              <span className="far fa-angle-down" />
                            </div>
                          </li>
                          <li>
                            <Link href="gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link href="careers">Careers</Link>
                          </li>
                          <li>
                            <Link href="supper-club">Supper Club</Link>
                          </li>
                          <li>
                            <Link href="partner-with-us">Partner With Us</Link>
                          </li>
                         </ul> */}
                        <div className="dropdown-btn" style={{ display: 'none' }}>
                          <span className="far fa-angle-down" />
                        </div>
                      </li>
                      <li className="dropdown">
                        <Link href="blog">blog</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="about">about</Link>
                      </li>
                      <li>
                        <Link href="contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              <div className="header-number">
                <i className="far fa-phone" />
                Call : <a href="callto:+88012345688">+91 9866142982</a>
              </div>
              {/* Nav Search */}
              <div style={{ display: 'none' }}>
                <SearchBtn />
              </div>
              {/* Menu Button */}
              <div className="menu-btns">
                <Link href="cart" className="cart-btn" style={{ color: 'white', marginRight: '20px', marginLeft: '20px', display: 'none' }}>
                  <i className="far fa-shopping-cart" /><span>2</span>
                </Link>
                <Link href="contact" className="theme-btn" style={{ display: 'none' }}>
                  Book now <i className="far fa-arrow-alt-right" />
                </Link>
                {/* Social Media Icons */}
                <div className="social-style-one" style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: '20px' }}>
                  <a href="#" style={{ color: 'white', fontSize: '18px' }}>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" style={{ color: 'white', fontSize: '18px' }}>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" style={{ color: 'white', fontSize: '18px' }}>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" style={{ color: 'white', fontSize: '18px' }}>
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
                {/* menu sidbar */}
                <div className="menu-sidebar" style={{ display: 'none' }}>
                  <button
                    className="bg-transparent"
                    onClick={() =>
                      document
                        .querySelector("body")
                        .classList.add("side-content-visible")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <MobileMenu />
      <Sidebar />
    </Fragment>
  );
};
export default Header;
