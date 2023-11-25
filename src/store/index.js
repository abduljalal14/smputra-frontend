import { defineStore } from 'pinia';

export const useCategory = defineStore({
  id: 'loggedInUser',
  state: () => ({ categories: "Sebelum Test" }),
  getters: {},
  // Di dalam definisi action di store
actions: {
    setCategories: (newCategories) => {
      console.log("Action setCategories dipanggil");
      this.setCategories(newCategories);
    },
  },
  // Di dalam definisi mutation di store
  // Di dalam definisi mutation di store
mutations: {
    setCategories: (state, newCategories) => {
      console.log("Mutation setCategories dipanggil");
      state.categories = newCategories;
    },
  },
  
});
