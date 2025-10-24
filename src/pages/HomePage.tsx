import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <header className="hero">
                <h1>Welcome to Our Store</h1>
                <p>Discover amazing products at great prices</p>
                <Link to="/products" className="cta-button">
                    Shop Now
                </Link>
            </header>

            <section className="features">
                <div className="feature">
                    <h3>Quality Products</h3>
                    <p>Carefully curated selection</p>
                </div>
                <div className="feature">
                    <h3>Fast Shipping</h3>
                    <p>Get your order quickly</p>
                </div>
                <div className="feature">
                    <h3>Secure Payment</h3>
                    <p>Shop with confidence</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;