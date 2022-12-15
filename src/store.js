import create from 'zustand';

export const useStore = create((set) => ({
  model: null,
  name: '',
  modelDisplayName: ''
}))