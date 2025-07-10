import { ProductCard } from "./ProductCard";

export interface Product {
  id: number;
  title: string;
  price: number;
}
async function getProducts(): Promise<{ products: Product[] }> {
  const res = await fetch('http://localhost:3000/api/products', {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return {
    products: await res.json(),
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