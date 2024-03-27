import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ref, reactive, onMounted } from 'vue';

const { VITE_API, VITE_PATH } = import.meta.env;

const useCartStore = defineStore('cartStore', () => {
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
  const addToCart = (id, qty = 1) => {
    // // 檢查購物車中是否已經有相同品項
    // const existingItem = cart.value.cart.find(
    //   (item) => item.product_id === id,
    // );

    // // 如果購物車中已有相同品項，且總數加上新增數量超過 5，則不進行累加
    // if (existingItem && existingItem.qty + qty > 5) {
    //   Swal.fire('上課人數最多不得超過5位');
    //   return;
    // }
    const data = {
      product_id: id,
      qty,
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
      product_id: item.product_id,
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

export default useCartStore;
