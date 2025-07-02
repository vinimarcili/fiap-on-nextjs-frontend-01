import { ProductCard } from "./ProductCard";

export interface Product {
  id: number;
  title: string;
  price: number;
}
async function getProducts(): Promise<{ products: Product[] }> {
  // Simula uma busca de dados lenta
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    products: [
      { id: 1, title: "Produto A", price: 29.99 },
      { id: 2, title: "Produto B", price: 49.99 },
      { id: 3, title: "Produto C", price: 19.99 },
    ]
  };
}

export const ProductsList = async () => {
  const { products } = await getProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}