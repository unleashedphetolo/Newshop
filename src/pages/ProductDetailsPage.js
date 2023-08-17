import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ShopContext from '../context/shop/shopContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { getProducts, products } = useContext(ShopContext);

  useEffect(() => {
    getProducts();
  }, []);

  const product = products.find(product => product.id === id);

  if (!product) {
    return <div>Loading...</div>;
  }
console.log(id)
  // Filter other products of the same category
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== id);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />

      {/* Display other product details */}
      <p>{product.description}</p>
      {/* Render other product information here */}

      {/* Display related products */}
      <h3>Related Products</h3>
      <div className="related-products">
        {relatedProducts.map(relatedProduct => (
          <div key={relatedProduct.id}>
            <img src={relatedProduct.image} alt={relatedProduct.title} />
            <p>{relatedProduct.title}</p>
            {/* Render other related product information */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
