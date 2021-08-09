import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';
import { ADD_PRODUCT } from '../utils/mutations';

function AddProduct(props) {
  const [productState, setProductState] = useState({ name: '', description: '', image: '', quantity: '', price: '', category: ''});
  const [addProduct] = useMutation(ADD_PRODUCT);
  const { data } = useQuery(QUERY_CATEGORIES);
  // const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    console.log(productState);
    event.preventDefault();

    await addProduct({
      variables: {
        name: productState.name,
        description: productState.description,
        image: productState.image,
        quantity: parseInt(productState.quantity),
        price: parseFloat(productState.price),
        category: productState.category || data.categories[0]._id
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductState({
      ...productState,
      [name]: value,
    });
  };

  const detailContainer = "container my-1 detail";
  const formFields = "flex-row space-between my-2 form-fields";

  return (
    <div className={detailContainer}>
      <Link to="/shop">← Back to Shop</Link>

      <h2>Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        {(!setProductState && !handleFormSubmit) ?
          <p id="product-fail">Adding Product Failed</p>:
          <p id="product-success">New Product Added!</p>
        }
        <div className={formFields}>
          <label htmlFor="productName">Name:</label>
          <input
            name="name"
            id="productName"
            onChange={handleChange}
            required
          />
        </div>
        <div className={formFields}>
          <label htmlFor="productDescription">Description:</label>
          <input
            name="description"
            id="productDescription"
            onChange={handleChange}
            required
          />
        </div>
        <div className={formFields}>
          <label htmlFor="productImageName">Image:</label>
          <input
            name="image"
            id="productImageName"
            onChange={handleChange}
            required
          />
        </div>
        <div className={formFields}>
          <label htmlFor="productQuantity">Quantity:</label>
          <input
            name="quantity"
            id="productQuantity"
            onChange={handleChange}
            required
          />
        </div>
        <div className={formFields}>
          <label htmlFor="productPrice">Price:</label>
          <input
            name="price"
            id="productPrice"
            onChange={handleChange}
            required
          />
        </div>
        <div className={formFields}>
          <label htmlFor="productCategory">Category:</label>
          <select name="category" id="productCategory" onChange={handleChange}>
            {data && data.categories.map( category => <option key={category._id} value={category._id}>{category.name}</option>)}
          </select>
        </div>
        {/* <div className="flex-row space-between my-2">
          <label htmlFor="productCategory">Category:</label>
          <input
            name="productCategory"
            type="productCategory"
            id="productCategory"
            onChange={handleChange}
          />
        </div> */}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
