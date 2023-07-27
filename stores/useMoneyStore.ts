import { create } from "zustand";
import { PaymentType } from "./models/IPayment";

interface IMoneyStore {
  dollars: number;
  coins: number;
  addDollar: (quantity: number) => void;
  addCoin: (quantity: number) => void;
  payment: (type: PaymentType, price: number) => void;
}

export const useMoneyStore = create<IMoneyStore>((set) => ({
  dollars: 0,
  coins: 0,
  addDollar: (quantity: number) =>
    set((state) => ({
      dollars: +quantity + state.dollars,
    })),
  addCoin: (quantity: number) =>
    set((state) => ({
      dollars: state.dollars - quantity,
      coins: +quantity + state.coins,
    })),
  payment: (type: PaymentType, price: number) => {
    set((state) => ({
      dollars:
        type === PaymentType.Dollar ? state.dollars - price : state.dollars,
      coins: type === PaymentType.Coin ? state.coins - price : state.coins,
    }));
  },
}));
