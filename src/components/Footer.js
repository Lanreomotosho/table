import React from "react";
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served
                        with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> Oluyole Extension, Ibadan, Oyo State.</li>
                        <li>Phone: <br/> +2348142699290</li>
                        <li>Email: <br/> omotoshoolanrewaju@gmail.com</li>
                    </ul>
                </div>
            </section>

        </footer>
    )
}

export default Footer;