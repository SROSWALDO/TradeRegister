import create from 'zustand';

const useStore = create((set) => ({
    registers: [],
    setRegisters: (registers) => set({ registers })

}));

export default useStore;