<template>
  <section class="box-bg01">
    <div class="container">
      <div class="row">
        <div class="col-12 text-dark mt-3 mt-md-6" data-aos="fade-down">
          <div class="mx-auto text-center OBJECTS">
            <div class="fw-bold title mb-0">交易記錄查詢</div>
            <span class="text-info fs-4">Transaction History Inquiry</span>
          </div>
        </div>
        <div
          class="row class justify-content-center mx-auto"
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
                    rules="required"
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
          <div class="col-12 col-md-8 mb-6 mb-xl-0 mt-md-3">
            <div
            v-if="!isLoading && filterOrders.length === 0"
              class="mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center"
              data-aos="fade-up"
            >
            <i class="bi bi-journal-check"></i> 請輸入訂購時的姓名、電話進行查詢交易記錄
            </div>
            <!-- <div
              v-else-if="isLoading && filterOrders.length === 0"
              class="mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center"
              data-aos="fade-up"
            >
              <i class="bi bi-journal-x"></i> 正在載入交易記錄...
            </div> -->
            <div v-else-if="filterOrders.length > 0" data-aos="fade-up">
              <div class="mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center">
                <i class="bi bi-journal-bookmark-fill"></i> 您的課程交易記錄
              </div>
              <div class="text-right my-3 text-danger">
                共 {{ filterOrders.length }} 筆記錄
              </div>
              <div
                v-for="(order, index) in filterOrders"
                :key="index"
                class="mb-3"
              >
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">訂單編號</th>
                      <th scope="col">訂單姓名</th>
                      <th scope="col">訂單日期</th>
                      <th scope="col">訂單總額</th>
                      <th scope="col">付款狀態</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="text-dark">{{ order.id }}</th>
                      <td class="text-dark">
                        {{ order.user.name }}
                      </td>
                      <td class="text-dark">
                        {{ $filters.date(order.paid_date) }}
                      </td>
                      <td class="text-dark">
                        NT ${{ $filters.currency(order.total) }}
                      </td>
                      <td class="text-dark">
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
    <div class="d-flex justify-content-end my-md-5" data-aos="fade-right">
      <img src="/img/Object07.svg" class="box-bg08 pb-6 d-none d-md-block" alt="Object08" />
    </div>
  </section>
</template>
<script setup>
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

const getOrders = () => {
  isLoading.value = true;
  axios
    .get(`${VITE_API}/api/${VITE_PATH}/orders`)
    .then((res) => {
      isLoading.value = false;
      orders.value = res.data.orders;
      filterOrders.value = orders.value.filter(
        (item) => item.user.name === form.value.user.name
          && item.user.tel === form.value.user.tel,
      );
      console.log(res.data.orders);
    })
    .catch((err) => {
      isLoading.value = false;
      console.log('error', err.response.data.message);
    });
};

// onMounted(() => {
//   const storedForm = localStorage.getItem('form');
//   if (storedForm) {
//     form.value = JSON.parse(storedForm);
//     getOrders();
//   }
// });
onMounted(() => {
  getOrders();
});
</script>
