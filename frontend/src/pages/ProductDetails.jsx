import React from 'react'
import '../scss/styles/productdetails.scss'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetails = () => {
  // const { id } = useParams();
  // const [product, setProduct] = useState(null);
  // const [selectedColor, setSelectedColor] = useState('');
  // const [selectedSize, setSelectedSize] = useState('');

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await axios.get(`/api/products/${id}`);
  //       setProduct(response.data);

  //       if (response.data.colors && response.data.colors.length > 0) {
  //         setSelectedColor(response.data.colors[0].name);
  //       }
  //       if (response.data.sizes && response.data.sizes.length > 0) {
  //         setSelectedSize(response.data.sizes[0]);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching product:', error);

  //     }
  //   };
  //   fetchProduct();
  // }, [id]);

  // const handleColorChange = (color) => {
  //   setSelectedColor(color);
  // };

  // const handleSizeChange = (size) => {
  //   setSelectedSize(size);
  // };

  // const addToCart = () => {

  //   console.log(`Added ${product.title} to cart with color ${selectedColor} and size ${selectedSize}`);
  // };
  // if (!product) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div>
      <Navbar/>
    <div className="single-product">
      <div className="product-image">
        <img src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' alt='image' />
      </div>
      <div className="product-details">
        <h2>Nike Air</h2>
        <p>By flattening the products in this way, each variant will be displayed as a separate row in the DataGrid, ensuring that all variants are shown correctly without duplication or missing entries.</p>
        <p>Price: $98</p>
        <div className="color-options">
          <span>Colors:</span>
          {/* {product.colors.map((color, index) => (
            <button
              key={index}
              className={`color-option ${selectedColor === color.name ? 'active' : ''}`}
              style={{ backgroundColor: color.indicator }}
              onClick={() => handleColorChange(color.name)}
            >

            </button>
          ))} */}
        </div>
        <div className="size-options">
          <span>Sizes:</span>
          {/* {product.sizes.map((size, index) => (
            <button
              key={index}
              className={`size-option ${selectedSize === size ? 'active' : ''}`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </button>
          ))} */}
        </div>
        <button className="add-to-cart" >
          Add to Cart
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};


export default ProductDetails
