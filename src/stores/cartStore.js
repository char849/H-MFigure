// import { defineStore } from 'pinia';
import axios from 'axios';
import { reactive, ref } from 'vue';

const { VITE_API, VITE_PATH } = import.meta.env;

export function useCartStore() {
  const cart = reactive([]);
  const finalTotal = ref(0);
  const total = ref(0);

  const getCart = () => {
    axios.get(`${VITE_API}api/${VITE_PATH}/cart`)
      .then((res) => {
        cart.value = res.data.data.carts;
        cart.push(...res.data.data.carts);
        finalTotal.value = res.data.data.final_total;
        total.value = res.data.data.total;
        console.log('pina cart', cart.value);
      })
      .catch((error) => {
        console.error('Error fetching cart:', error);
      });
  };

  const addToCart = (id) => {
    const data = {
      product_id: id,
      qty: 1,
    };
    axios.post(`${VITE_API}api/${VITE_PATH}/cart`, { data });
    getCart();
  };

  return {
    cart,
    finalTotal,
    total,
    getCart,
    addToCart,
  };
}

export function useCartStoreComposition() {
  const {
    cart, finalTotal, total, getCart,
  } = useCartStore();

  return {
    cart,
    finalTotal,
    total,
    getCart,
  };
}
