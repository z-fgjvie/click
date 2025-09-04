import { create } from "zustand";

export const useReservaStore = create((set) => ({
  reserva: null,

  setReserva: (data) => set({ reserva: data }),

  clearReserva: () => set({ reserva: null }),
}));
