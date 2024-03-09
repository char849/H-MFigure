import { defineStore } from 'pinia';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import { ref, reactive } from 'vue';

const { VITE_API, VITE_PATH } = import.meta.env;

const useCounterStore = defineStore('cartStore', () => {
  // const carts = reactive([]);
  // const finalTotal = ref(0);
  // const total = ref(0);
  const isLoading = ref(false);
  const cart = reactive([]);
  const finalTotal = ref(0);
  const total = ref(0);
  const cartsLength = ref(0);

  const getCart = () => {
    axios.get(`${VITE_API}api/${VITE_PATH}/cart`)
      .then((res) => {
        // carts.value = res.data.data.carts;
        // finalTotal.value = res.data.data.final_total;
        // total.value = res.data.data.total;
        // console.log('pinia cart', carts.value);
        cart.splice(0);
        cart.push(...res.data.data.carts);
        finalTotal.value = res.data.data.final_total;
        total.value = res.data.data.total;
        cartsLength.value = cart.length;
      })
      .catch((error) => {
        Swal.fire('pinia cart:', error);
      });
  };
  const addToCart = (id) => {
    const data = {
      product_id: id,
      qty: 1,
    };
    isLoading.value = true;
    axios.post(`${VITE_API}api/${VITE_PATH}/cart`, { data })
      .then(() => {
        isLoading.value = false;
        getCart();
        Swal.fire('己加入預約清單');
      });
  };

  return {
    cart,
    finalTotal,
    total,
    getCart,
    addToCart,
  };
});

export default useCounterStore;
