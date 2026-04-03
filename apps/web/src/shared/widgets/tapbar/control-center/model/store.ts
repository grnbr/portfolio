import { create } from 'zustand';

type ControlCenterStore = {
  handleCloseMenu: () => void;
  handleToggleMenu: () => void;
  isMenuOpen: boolean;
};

export const useControlCenterStore = create<ControlCenterStore>((set) => ({
  handleCloseMenu: () => set({ isMenuOpen: false }),
  handleToggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  isMenuOpen: false,
}));
