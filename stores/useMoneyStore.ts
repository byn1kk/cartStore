import { create } from "zustand";
import { СurrencyType } from "./models/СurrencyType";

interface IMoneyStore {
  dollars: number;
  coins: number;
  addDollar: (quantity: number) => void;
  addCoin: (quantity: number) => void;
  payment: (type: СurrencyType, price: number) => void;
}

export const useMoneyStore = create<IMoneyStore>((set) => ({
  dollars: 0,
  coins: 0,
  addDollar: (quantity: number) => {
    set((state) => ({
      dollars: +quantity + state.dollars,
    }));
  },
  addCoin: (quantity: number) => {
    set((state) => ({
      dollars: state.dollars - quantity,
      coins: +quantity + state.coins,
    }));
  },
  payment: (type: СurrencyType, price: number) => {
    set((state) => ({
      dollars:
        type === СurrencyType.Dollar ? state.dollars - price : state.dollars,
      coins: type === СurrencyType.Coin ? state.coins - price : state.coins,
    }));
  },
}));
