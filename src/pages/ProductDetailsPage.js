import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ShopContext from '../context/shop/shopContext'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const { getProduct,getProducts, product, products,loading } = useContext(ShopContext)

  useEffect(() => {
    getProduct(id)
    getProducts()
  }, [])

console.log(products);


  // const product = products.find((product) => product.id === id)

  // if (!product) {
  //   return <div>Loading...</div>
  // }
  // console.log(product.title)
  // Filter other products of the same category
  // const relatedProducts = products.filter(
  //   (p) => p.category === product.category && p.id !== id
  // )
if(loading && !product)  return <div>Loading...</div>
  return (
    <div>
      <h2>{product?.title}</h2>
      <img src={product?.image} alt={product?.title} />

      {/* Display other product details */}
      <p>{product?.description}</p>
      {/* Render other product information here */}

      {/* Display related products */}
      <h3>Related Products</h3>
      <div className='related-products'>
        {products?.map((Products) => (
          <div key={Products.id}>
            <img src={product?.image } alt={products?.title} />
            <p>{Products?.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDetailsPage
