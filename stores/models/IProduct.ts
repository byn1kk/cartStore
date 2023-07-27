export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface IProductByCart extends IProduct {
  count: number;
}
