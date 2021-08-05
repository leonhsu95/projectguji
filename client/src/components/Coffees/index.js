import React from 'react';

function Coffees(){
    return (
        <div id="coffee-section">
            <h2 className="wrapper">Our Coffees</h2>
            <p className="wrapper">Selection of Fragrant Aromatic Coffee from around the World</p>
            <div className="coffee-section-container"> 
                <section className="coffee-section-item">
                    <p>Coffee</p>
                </section>
                <section className="coffee-section-item">
                    <p>Coffee</p>
                </section>
            </div>
            <button id="coffee-section-button">View Selection</button>
        </div> 
    )
}

export default Coffees;