import { create } from 'zustand';

interface UserState {
  name: string;
  xp: number;
  login: (name: string, xp: number) => void;
  addXp: (amount: number) => void;
}

export const useUserStore = create<UserState>(set => ({
  name: 'Usuário Teste',
  xp: 0,
  login: (name, xp) => set({ name, xp }),
  addXp: amount => set(state => ({ xp: state.xp + amount })),
}));
