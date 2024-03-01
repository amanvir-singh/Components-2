import ProductCard from "./ProductCard";

export default function ProductCardContainer({products}) {
  
  return (
    <>
      <h1>Discover Your Favorites</h1>
      {products.map((product) => <ProductCard key={product.name} product={product} /> )}
    </>
  );
}

