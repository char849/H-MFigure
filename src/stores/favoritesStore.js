import { ref } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export function useFavoritesStore() {
  const favoriteList = ref([]);

  return {
    favoriteList,
  };
}
