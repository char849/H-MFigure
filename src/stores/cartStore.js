// import { defineStore } from 'pinia';
import axios from 'axios';

// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

import { ref } from 'vue';
import { defineStore } from 'pinia';

const { VITE_API, VITE_PATH } = import.meta.env;

const useCounterStore = defineStore('cartStore', () => {
  const carts = ref([]);
  const finalTotal = ref(0);
  const total = ref(0);
  const cartsLength = ref(0);
  const isLoading = ref(false);

  const getCart = () => {
    axios.get(`${VITE_API}api/${VITE_PATH}/cart`)
      .then((res) => {
        // cart.value.splice(0);
        // cart.value.push(...res.data.data.carts);
        carts.value = res.data.data.carts;
        finalTotal.value = res.data.data.final_total;
        total.value = res.data.data.total;
        cartsLength.value = carts.value.length;
        console.log('pinia cart', carts.value);
      })
      .catch((error) => {
        Swal.fire('Error fetching cart:', error);
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
    carts,
    finalTotal,
    total,
    getCart,
    addToCart,
  };
});

export default useCounterStore;
