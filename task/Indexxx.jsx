import React from 'react'
import { useState } from 'react';
import './styles.css'


const Indexxx = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>

            {/* Navbar */}
            <nav>
                <div className="nav-container">
                    <h1 className="logo">KG Cakes</h1>

                    <div className="nav-links desktop-menu">
                        <a href="#home">Home</a>
                        <a href="#menu">Menu</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <button className="mobile-btn" onClick={() => setOpen(!open)}>
                        {open ? "✖" : "☰"}
                    </button>
                </div>

                {open && (
                    <div className="nav-links mobile-menu">
                        <a href="#home">Home</a>
                        <a href="#menu">Menu</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <h2 className="hero-title">Delicious Cakes, Freshly Baked</h2>
                <p className="hero-sub">
                    Celebrate your special moments with our handcrafted cakes made with
                    love and premium ingredients.
                </p>
                <button className="btn-main">Order Now</button>
            </section>

            {/* Featured Cakes */}
            <section id="menu">
                <h3 className="section-title">Popular Cakes</h3>

                <div className="cake-grid">
                    {["Chocolate Cake", "Strawberry Delight", "Vanilla Classic"].map(
                        (cake, i) => (
                            <div key={i} className="cake-card">
                                <div className="cake-img"></div>
                                <h4 className="cake-title">{cake}</h4>
                                <p>A delicious handmade premium cake for every celebration.</p>
                                <button className="btn-main" style={{ marginTop: "10px" }}>
                                    Buy Now
                                </button>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <h3 className="section-title">About KG Cakes</h3>
                <p>
                    At KG Cakes, we believe in delivering happiness through freshly baked
                    cakes using the finest ingredients.
                </p>
            </section>

            {/* Footer */}
            <footer id="contact">
                <h4>Contact Us</h4>
                <p>Email: info@kgcakes.com</p>
                <p>Phone: +91 9876543210</p>
                <p>© 2025 KG Cakes. All rights reserved.</p>
            </footer>
        </div>
    );

}

export default Indexxx
