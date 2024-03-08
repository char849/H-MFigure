<script setup>
import axios from 'axios';

// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

import { ref, onMounted } from 'vue';

import DelOrderModal from '@/components/admin/DelOrderModal.vue';
import OrderModal from '@/components/admin/OrderModal.vue';
import Pagination from '@/components/PaginationComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
const orderModalRef = ref(null);
const delModalRef = ref(null);
// const currentPage = ref();

const orders = ref({});
const isNew = ref(false);
const pagination = ref({});
const isLoading = ref(false);
const tempOrder = ref({});

const openOrdersModal = (item) => {
  tempOrder.value = { ...item };
  isNew.value = false;
  orderModalRef.value.openModal();
};

const openDelOrderModal = (item) => {
  tempOrder.value = { ...item };
  delModalRef.value.openModal();
};
// eslint-disable-next-line no-shadow
const getOrders = (page = 1) => {
  const url = `${VITE_API}api/${VITE_PATH}/admin/orders?page=${page}`;
  isLoading.value = true;
  axios.get(url).then((res) => {
    orders.value = res.data.orders;
    isLoading.value = false;
    pagination.value = res.data.pagination;
  }).catch((error) => {
    isLoading.value = false;
    Swal.fire(error.response);
  });
};

onMounted(() => {
  getOrders();
});

</script>

<template>
  <VueLoading :active="isLoading" :z-index="1060" />
  <div class="container mt-8">
    <table class="table">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in orders" :key="item.id">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in item.products" :key="product.id">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div>
              <label class="form-check-label" :for="`${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-dark btn-sm"
                type="button"
                @click="openOrdersModal(item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelOrderModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  </div>
  <OrderModal
    :order="tempOrder"
    ref="orderModalRef"
  />
  <DelOrderModal
    :item="tempOrder"
    ref="delModalRef"
    @del-item="getOrders"
  />
  <!-- 分頁元件 -->
  <Pagination :pages="pagination" @emit-pages="getOrders" />
</template>
