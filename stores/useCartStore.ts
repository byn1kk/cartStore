import { create } from "zustand";
import { IProductByCart } from "./models/IProduct";

interface ICartStore {
  products: IProductByCart[];
  addProduct: (product: IProductByCart) => void;
  removeProduct: (id: number) => void;
  setCountProduct: (productId: number, count: number) => void;
}

export const useCartStore = create<ICartStore>((set) => ({
  products: [],
  addProduct: (product: IProductByCart) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeProduct: (id: number) =>
    set((state) => ({
      products: state.products.filter((x) => x.id !== id),
    })),
  setCountProduct: (productId: number, count: number) =>
    set((state) => ({
      products: state.products.map((product) => {
        if (product.id === productId) {
          return { ...product, count };
        }
        return product;
      }),
    })),
}));
