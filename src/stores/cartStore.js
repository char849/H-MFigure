import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ref, reactive, onMounted } from 'vue';

const { VITE_API, VITE_PATH } = import.meta.env;

const useCounterStore = defineStore('cartStore', () => {
  const isLoading = ref(false);
  const cart = reactive([]);
  const finalTotal = ref(0);
  const total = ref(0);
  const cartsLength = ref(0);
  const isLoadingItem = ref('');

  const getCart = () => {
    isLoading.value = true;
    axios.get(`${VITE_API}api/${VITE_PATH}/cart`)
      .then((res) => {
        cart.splice(0);
        cart.push(...res.data.data.carts);
        finalTotal.value = res.data.data.final_total;
        total.value = res.data.data.total;
        cartsLength.value = cart.length;
        isLoading.value = false;
      })
      .catch((error) => {
        Swal.fire('pinia cart:', error);
        isLoading.value = false;
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

  const removeCartItem = (id) => {
    isLoadingItem.value = id;
    isLoading.value = true;
    axios
      .delete(`${VITE_API}/api/${VITE_PATH}/cart/${id}`)
      .then(() => {
        isLoading.value = false;
        getCart();
        // 讀取完後，清空id
        isLoadingItem.value = '';
        Swal.fire('己取消單一預約課程');
      })
      .catch((err) => {
        isLoading.value = false;
        Swal.fire(err.response.data.message);
      });
  };
  const deleteAllCarts = () => {
    isLoading.value = true;
    axios
      .delete(`${VITE_API}/api/${VITE_PATH}/carts`)
      .then(() => {
        isLoading.value = false;
        getCart();
        Swal.fire('己取消所有預約課程');
      })
      .catch((err) => {
        isLoading.value = false;
        Swal.fire(err.response.data.message);
      });
  };
  const confirmDeleteAllCarts = () => {
    Swal.fire({
      title: '確認清空預約課程',
      text: '您確定要清空所有預約課程嗎？',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '是的，清空',
      cancelButtonText: '取消',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAllCarts();
      }
    });
  };
  const updateCartItem = (item) => {
    const data = {
      product_id: item.product_id, // 要用 product_id, 不能用id, 新增相同產品到購物車時需累加項目
      qty: item.qty,
    };
    isLoading.value = true;
    isLoadingItem.value = item.id;
    axios
      .put(`${VITE_API}/api/${VITE_PATH}/cart/${item.id}`, { data })
      .then(() => {
        getCart();
        isLoading.value = false;
        isLoadingItem.value = '';
        Swal.fire('己更改預約人數');
      })
      .catch((err) => {
        isLoading.value = false;
        Swal.fire(err.response.data.message);
      });
  };
  const clearCartLength = () => {
    cartsLength.value = 0;
  };
  onMounted(() => {
    getCart();
  });

  return {
    cart,
    finalTotal,
    cartsLength,
    total,
    getCart,
    addToCart,
    removeCartItem,
    deleteAllCarts,
    confirmDeleteAllCarts,
    updateCartItem,
    clearCartLength,
  };
});

export default useCounterStore;
