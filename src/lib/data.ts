export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

// Simulando um banco de dados em memória
export let products: Product[] = [
  { id: 1, name: 'Smartphone X', price: 2999.99, imageUrl: '/images/smartphone.jpg' },
  { id: 2, name: 'Notebook Pro', price: 7499.00, imageUrl: '/images/notebook.jpg' },
  { id: 3, name: 'Fone de Ouvido BT', price: 499.50, imageUrl: '/images/headphone.jpg' },
  { id: 4, name: 'Smartwatch 2', price: 1299.00, imageUrl: '/images/smartwatch.jpg' },
];