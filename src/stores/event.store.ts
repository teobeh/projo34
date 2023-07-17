import { defineStore } from 'pinia';

export const useEventStore = defineStore('event', {
  persist: true,
  state: () => ({
    type: "Match de improvisación",
    name: '',
  }),
});
