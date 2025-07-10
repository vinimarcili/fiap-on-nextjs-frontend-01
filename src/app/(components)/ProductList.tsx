import { ProductCard } from "./ProductCard";

export interface Product {
  id: number;
  title: string;
  price: number;
}
async function getProducts(): Promise<{ products: Product[] }> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/products`, {
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