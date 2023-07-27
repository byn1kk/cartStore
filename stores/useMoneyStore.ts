import { create } from "zustand";

interface IMoneyStore {
  dollars: number;
  coins: number;
  addDollar: (quantity: number) => void;
  addCoin: (quantity: number) => void;
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
}));
