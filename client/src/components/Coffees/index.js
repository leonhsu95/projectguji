import React from 'react';
import { Link } from 'react-router-dom';

function Coffees(){
    return (
        <div id="coffee-section">
            <h2 className="wrapper">Our Coffees</h2>
            <p className="wrapper">Selection of Fragrant Aromatic Coffees from around the World</p>
            <div className="coffee-section-container"> 
                <section className="coffee-section-item">
                    <p>Coffee</p>
                </section>
                <section className="coffee-section-item">
                    <p>Coffee</p>
                </section>
                <section className="coffee-section-item">
                    <p>Coffee</p>
                </section>
                <section className="coffee-section-item">
                    <p>Coffee</p>
                </section>
                <section className="coffee-section-item">
                    <p>Coffee</p>
                </section>
            </div>
            <Link to="/shop">
                <button id="coffee-section-button">View Selection</button>
            </Link>
        </div> 
    )
}

export default Coffees;