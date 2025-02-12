import { create } from "zustand";

const useCounterStore = create((set) => ({
  number: 0,
  increaseNumber: () => set((state) => ({ number: state.number + 1 })),
  decreaseNumber: () => set((state) => ({ number: state.number - 1 })),
}));

export default useCounterStore;
