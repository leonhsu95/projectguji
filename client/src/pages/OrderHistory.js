import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { AnimationWrapper } from 'react-hover-animation';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  const detailContainer = "container my-1 detail form-register";
  const itemsClass= "card px-1 py-1 order-item";
  return (
    <>
      <div className={detailContainer}>
        <Link className="link-return" to="/shop">← Back to Shop</Link>

        {user ? (
          <>
            <h2>
              Order History for <br></br>{user.firstName} {user.lastName}
            </h2>
            <div id="orders-container">
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString('en-AU')}
                </h3>
                <div id="order-item-container">
                
                  {order.products.map(({ _id, image, name, price }, index) => (
                    
                    <div key={index} className={itemsClass}>
                      <AnimationWrapper className="animation-hover">
                      <Link class="shop-items" to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>$ {parseInt(price).toFixed(2)}</span>
                      </div>
                      </AnimationWrapper>
                    </div>
                   
                  ))}
                 
                </div>
              </div>
            ))}</div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
