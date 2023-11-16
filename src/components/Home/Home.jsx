import React, { useState, useEffect } from 'react';
import { getAllProduct } from '../ApiServices/Api';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProduct();
        setProducts(data);
        console.log(data)
      } catch (error) {
        console.log("Error fetching Products:", error);
      }
    }
    fetchProducts();
  }, [setProducts]);
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          {products.map((obj, index, price, image) => (
            <div key={index} className="col-12 col-sm-4 col-md-3 col-lg-3">
              <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="product">
                  <img src={obj.image} alt="alternative" />
                  <h2 className='product-name'>{obj.title}</h2>
                  <p>
                    <span className='price'>${obj.price}</span>
                  </p>
                  <button className='product-button'>Product Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;