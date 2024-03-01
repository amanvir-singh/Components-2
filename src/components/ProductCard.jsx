
export default function ProductCard({product}) {
  const handleMouseOver = (price) => {
    console.log(price);}
    const handleAddToCart = ()=> {
      alert(`You added ${product.name}`);
    }
    
  return (
    <div onMouseOver={() => handleMouseOver(product.price)}>
      <br></br>
      <img src={product.imageUrl}/>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div>{product.price}</div>
      {product.isInStock == false && <p>Unavailable</p>}
      <button onClick={handleAddToCart}>Add to Cart</button><br></br>
    </div>
  );
}
