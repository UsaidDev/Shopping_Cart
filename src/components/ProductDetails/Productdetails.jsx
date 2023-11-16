import React from 'react'
import './productdetails.css'
function productdetails() {
    return (
        <div className='product-details-container'>
            <img src="" alt="imge" className='product-image' />

            <div className="product-info">
                <h1 className="product-title">Sample</h1>
                <p className='description'>Description</p>
                <p className='price'>Price</p>
                <button className='Bynow'>Bynow</button>
                <button className='back-to-home'>Back to Home</button>
            </div>
        </div>
    )
}
export default productdetails;
