import { defineStore } from 'pinia';

interface Users {
  id?: string | any;
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    id: null,
    isLoggedIn: false,
  }),
  actions: {
    login(user: Users) {
      this.id = user.id;
      this.isLoggedIn = true;
    },
    logout(user: Users) {
      this.id = null;
      this.isLoggedIn = false;
    },
  },
});
