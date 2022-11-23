export interface ProductsProps {
  products: IProduct[];
}
export interface ProductProps {
  product: IProduct;
}
export interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: string;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
export type FirebaseProductType = {
  [x: string]: any;
  product: [string, { product: IProduct; userId: string }];
};
