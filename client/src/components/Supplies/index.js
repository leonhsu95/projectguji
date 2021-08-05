import React from 'react';


const ssclass = `supplies-section-container wrapper`;

function Supplies(){
    return (
        <div id="supplies-section">
        <h2 className="wrapper">Our Supplies</h2>
        <p className="wrapper">Selection of Fragrant Aromatic supplies from around the World</p>
        <div className={ssclass}> 
            <div className="supplies-section-picture">
                <p>Picture</p>
            </div>
            <div className="supplies-section-text">
                <p>Some Promo Text</p>
                <button id="supplies-section-button">View Selection</button>
            </div>
        </div>
            
        </div>          
    )
}

export default Supplies;