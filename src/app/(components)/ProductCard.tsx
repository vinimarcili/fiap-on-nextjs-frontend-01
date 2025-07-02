import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold">{product.title}</h3>
      <p className="text-lg mt-2">R$ {product.price.toFixed(2)}</p>
      <div className="mt-4">
        {/* O componente interativo é importado e usado aqui */}
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
}