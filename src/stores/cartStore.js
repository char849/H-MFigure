// import { defineStore } from 'pinia';
import axios from 'axios';
import { reactive, ref } from 'vue';

const { VITE_API, VITE_PATH } = import.meta.env;

export function useCartStore() {
  const cart = reactive([]);
  const finalTotal = ref(0);
  const total = ref(0);
  const cartsLength = ref(0);

  const getCart = () => {
    axios.get(`${VITE_API}api/${VITE_PATH}/cart`)
      .then((res) => {
        // cart.value = res.data.data.carts;
        cart.splice(0);
        cart.push(...res.data.data.carts);
        finalTotal.value = res.data.data.final_total;
        total.value = res.data.data.total;
        cartsLength.value = cart.length;
        console.log('pina cart', cart);
        console.log('pina cart', cart.length);
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
    cartsLength,
  };
}

export function useCartStoreComposition() {
  const {
    cart, finalTotal, total, getCart, cartsLength,
  } = useCartStore();

  return {
    cart,
    finalTotal,
    total,
    getCart,
    cartsLength,
  };
}
