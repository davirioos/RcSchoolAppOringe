import { create } from 'zustand';

interface UserState {
  name: string;
  xp: number;
  life: number;
  login: (name: string, xp: number) => void;
  addXp: (amount: number) => void;
  decreaseLife: () => void;
}

export const useUserStore = create<UserState>(set => ({
  name: 'Usuário Teste',
  xp: 0,
  life: 100,
  login: (name, xp) => set({ name, xp }),
  addXp: amount => set(state => ({ xp: state.xp + amount })),
  decreaseLife: () => set(state => ({ life: state.life - 1 })),
}));
