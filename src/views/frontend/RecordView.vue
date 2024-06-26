<template>
  <section>
    <div class="container-fulid box-bgTen pb-7 pb-md-9">
      <div class="container">
      <div class="row">
        <div class="col-12 text-dark mt-3 mt-md-6" data-aos="fade-down">
          <div class="mx-auto text-center OBJECTS">
            <div class="fw-bold title mb-0">交易記錄查詢</div>
            <span class="text-info fs-4">Transaction History Inquiry</span>
          </div>
        </div>
        <div
          class="row classFive justify-content-center mx-auto"
          data-aos="fade-up"
        >
          <div class="col-12 col-md-8 mb-6 mb-xl-0">
            <div class="d-flex justify-content-center mt-0 mt-md-4">
              <VeeForm class="col-12" v-slot="{ errors }" @submit="getOrders">
                <div class="mb-3">
                  <label for="name" class="form-label">同學姓名</label>
                  <VeeField
                    id="name"
                    name="姓名"
                    type="text"
                    class="form-control py-3"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    placeholder="請輸入姓名"
                    :rules="isName"
                    v-model="form.user.name"
                  ></VeeField>
                  <ErrorMessage
                    name="姓名"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </div>

                <div class="mb-3">
                  <label for="tel" class="form-label">同學電話</label>
                  <VeeField
                    id="tel"
                    name="電話"
                    type="tel"
                    class="form-control py-3"
                    :class="{ 'is-invalid': errors['電話'] }"
                    placeholder="請輸入電話"
                    :rules="isPhone"
                    v-model="form.user.tel"
                  ></VeeField>
                  <ErrorMessage
                    name="電話"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="text-end mb-0 mb-md-5">
                  <button
                    type="submit"
                    class="btn btn-danger rounded-pill my-2 my-md-3 my-xl-4 ps-6 pe-5 py-3"
                  >
                    訂單查詢
                  </button>
                </div>
              </VeeForm>
            </div>
          </div>
          <VueLoading :active="isLoading" :z-index="1060" class="text-center" />
          <div class="col-12 col-md-8 mt-md-3">
            <div
              v-if="!isLoading && filterOrders.length === 0"
              class="mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center"
              data-aos="fade-up"
            >
              <i class="bi bi-journal-check"></i>
              請輸入訂購時的姓名、電話進行查詢交易記錄
            </div>
            <div v-else-if="filterOrders.length > 0" data-aos="fade-up">
              <div class="mt-2 fs-3 mb-5 ms-1 fw-medium text-dark text-center">
                <i class="bi bi-journal-bookmark-fill"></i> 您的課程交易記錄
              </div>
              <div class="text-right my-3 text-danger">
                共 {{ filterOrders.length }} 筆記錄
              </div>
              <div
                v-for="(order, index) in filterOrders"
                :key="index"
                class="mb-3 overflow-x-auto"
              >
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class="px-4 py-3">訂單編號</th>
                      <th scope="col" class="px-4 py-3">訂單姓名</th>
                      <th scope="col" class="px-4 py-3">訂單日期</th>
                      <th scope="col" class="px-4 py-3">訂單總額</th>
                      <th scope="col" class="px-4 py-3 text-nowrap">付款狀態</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="text-dark px-4 py-4
                      text-nowrap">{{ order.id }}</th>
                      <td class="text-dark px-4 py-4">
                        {{ order.user.name }}
                      </td>
                      <td class="text-dark px-4 py-4">
                        {{ $filters.date(order.paid_date) }}
                      </td>
                      <td class="text-dark px-4 py-4 text-nowrap">
                        NT ${{ $filters.currency(order.total) }}
                      </td>
                      <td class="text-dark px-4 py-4 text-nowrap">
                        {{ order.is_paid ? "已付款" : "未付款" }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
import Swal from 'sweetalert2';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const { VITE_API, VITE_PATH } = import.meta.env;
const orders = ref({});
const filterOrders = ref({});
const isLoading = ref(false);
const form = ref({
  user: {
    name: '',
    tel: '',
  },
  message: '',
});
const isPhone = (value) => {
  const phoneNumber = /(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/;
  return phoneNumber.test(value) ? true : '需要正確的電話號碼';
};
const isName = (value) => {
  const userName = /^[\u4E00-\u9FA5]{2,4}$/;
  return userName.test(value) ? true : '請輸入有效的中文姓名';
};
const getOrders = () => {
  isLoading.value = true;
  axios
    .get(`${VITE_API}/api/${VITE_PATH}/orders`)
    .then((res) => {
      orders.value = res.data.orders;
      filterOrders.value = orders.value.filter(
        (item) => item.user.name === form.value.user.name
          && item.user.tel === form.value.user.tel,
      );
      isLoading.value = false;
    })
    .catch((err) => {
      isLoading.value = false;
      Swal.fire('error', err.response.data.message);
    });
};
onMounted(() => {
  getOrders();
});
</script>
