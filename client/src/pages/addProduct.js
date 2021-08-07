import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
import { ADD_PRODUCT } from '../utils/mutations';

function AddProduct(props) {
  const [productState, setProductState] = useState({ name: '', description: '', image: '', quantity: '', price: '', category: ''});
  const [addProduct] = useMutation(ADD_PRODUCT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // const mutationResponse = await addProduct({
     await addProduct({
      variables: {
        name: productState.name,
        description: productState.description,
        image: productState.image,
        quantity: productState.quantity,
        price: productState.price,
        category: productState.category
      },
    });
    // const token = mutationResponse.data.addUser.token;
    // Auth.login(token);
    // const product = mutationResponse.data.addProduct;
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductState({
      ...productState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/shop">← Back to Shop</Link>

      <h2>Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="productName">Name:</label>
          <input
            name="productName"
            type="productName"
            id="productName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="productDescription">Description:</label>
          <input
            name="productDescription"
            type="productDescription"
            id="productDescription"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="productImageName">Image:</label>
          <input
            name="productImageName"
            type="productImageName"
            id="productImageName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="productQuantity">Quantity:</label>
          <input
            name="productQuantity"
            type="productQuantity"
            id="productQuantity"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="productPrice">Price:</label>
          <input
            name="productPrice"
            type="productPrice"
            id="productPrice"
            onChange={handleChange}
          />
        </div>
        {/* <div className="flex-row space-between my-2">
          <label htmlFor="productCategory">Category:</label>
          <select name="productCategory" type="productCategory" id="productCategory" onChange={handleChange}>
              <option value="610bcb63731d274308fdfb30">Coffee</option>
              <option value="610bcb63731d274308fdfb31">Supplies</option>
           </select>
        </div> */}
        <div className="flex-row space-between my-2">
          <label htmlFor="productCategory">Category:</label>
          <input
            name="productCategory"
            type="productCategory"
            id="productCategory"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
