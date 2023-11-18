import { useEffect, useState } from 'react';
import './ProductDetails.css'
import { getProductId } from '../ApiServices/Api';
import { Link, useParams } from 'react-router-dom';

function Productdetails() {
    const { id } = useParams();
    const [productdetails, Setproductdetails] = useState({});

const fetchProductDetails = async () => {
    const [data] = await getProductId(id); // If data is an array, take the first item
    Setproductdetails(data);
  
};

    useEffect(() => {
        const fetchProductDetails = async () => {
            const data = await getProductId(id)
            Setproductdetails(data)
        }
        fetchProductDetails(id);
    }, [id])

    const handleBynow=()=>{
        window.confirm("This Product Out of stock")
    }
    return (
        <div className='product-details-container'>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="imge loading" className='product-image' />
            <div className="product-info">
                <h1 className="product-title">Heigh Quality Product</h1>
                <p className='description'>This Realy Use full for Your life</p>
                <p className='product-price'>$20</p>
                <button className='Bynow-button'>Bynow</button>
                <Link to='/'>
                    <button onClick={handleBynow} className='back-to-home'>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}
export default Productdetails;
