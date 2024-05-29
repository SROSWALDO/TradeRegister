import create from 'zustand';

const useStore = create((set) => ({
    registers: [],
    users: [],
    setRegisters: (registers) => set({ registers }),
    setUsers: (users) => set({ users }),

}));

export default useStore;