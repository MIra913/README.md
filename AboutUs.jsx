about_us_content = """import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2>About e-plantShopping</h2>
            <p>We are dedicated to providing a wide variety of plants for your home and garden.</p>
            <p>Our mission is to make plant shopping easy, fun, and sustainable.</p>
        </div>
    );
};

export default AboutUs;
"""
with open(f"{project_name}/AboutUs.jsx", "w") as f:
    f.write(about_us_content)
