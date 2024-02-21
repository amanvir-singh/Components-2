export default function ProductCard({product}) {
  return (
    <>

      <img src={product.imageURL}/>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">{product.price}</div>
      {product.isInStock == false && <p>Unavailable</p>}
      <button>Add to Cart</button>
    </>
  );
}
