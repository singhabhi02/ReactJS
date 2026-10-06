import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 3499,
  },
  {
    id: 3,
    name: "Wireless Mouse",
    price: 1499,
  },
];

function ProductList() {
  return (
    <div>
      <h2>Products</h2>

      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


export default ProductList;