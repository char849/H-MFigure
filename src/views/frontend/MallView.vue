<template>
  <div class="container-fulid box-bg09">
    <VueLoading :active="isLoading" :z-index="1060"
     class="text-center" />
    <div class="container mt-6 mt-md-7 mb-6 mb-md-5" v-if="cartData.carts.length > 0">
    <ul class="row justify-content-center list-unstyled py-3 px-3" data-aos="fade-down">
      <li class="col-md-4">
        <div
          class="bg-danger p-3 badge rounded-pill fs-3 w-100 mb-2 bg-secondary text-white"
        >
          1. 填寫資料
        </div>
      </li>
      <li class="col-md-4">
        <div class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-info text-muted">
          2. 課程結帳
        </div>
      </li>
      <li class="col-md-4">
        <div class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-info text-muted">
          3. 付款完成
        </div>
      </li>
    </ul>
    <div class="col-12 text-dark mt-1 mt-md-4" data-aos="fade-down">
      <div class="mx-auto text-center OBJECTS">
        <div class="fw-bold title mb-0">預約課程清單</div>
        <span class="text-info fs-4">Course Reservation List</span>
      </div>
    </div>
    <!-- 購物車列表 -->
    <div class="row justify-content-center order mx-1" data-aos="fade-up">
      <div class="col-12 col-md-8">
        <div class="col-12">
          <div class="text-end">
            <button
              class="btn btn-outline-danger rounded-pill my-2 my-md-3 my-xl-5 ps-6 pe-5 py-3 mb-4"
              type="button"
              @click="deleteAllCarts"
              :disabled="cartData.carts.length === 0"
            >
              清空預約課程
            </button>
          </div>
          <table class="table align-middle">
              <thead>
                <tr>
                  <th></th>
                  <th>課程名稱</th>
                  <th style="width: 130px">上課人數</th>
                  <th></th>
                  <th class="text-center">總價</th>
                </tr>
              </thead>
              <tbody>
                <!-- 購物車列表，判斷購物車資料有沒有存在 -->
                <template v-if="cartData.carts">
                  <tr v-for="item in cartData.carts" :key="item.id">
                    <td>
                      <!--  刪除的方法帶入id,removeCartItem(item.id) -->
                      <button
                        type="button"
                        id="btn01"
                        class="btn btn-outline-danger btn-sm"
                        @click="removeCartItem(item.id)"
                        :disabled="isLoadingItem === item.id"
                      >
                        <i class="bi bi-x fs-5"></i>
                      </button>
                    </td>

                    <td>
                      <!-- 資料格式包在下一層 product 中，所以要再加一層 product  -->
                      {{ item.product.title }}
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <div class="input-group my-3">
                          <!-- <input min="1" type="number" class="form-control" /> -->
                          <!-- 用select的型式規定使用者輸入的資料格式，數量5個，
                           當前值 item.qty 跟 num 1-5的值一樣的話就選那個值
                           :key="`${num}-${item.id}`"這種寫法可以確保是唯一值 -->
                          <select
                            class="form-select"
                            v-model="item.qty"
                            @change="updateCartItem(item)"
                            :disabled="isLoadingItem === item.id"
                          >
                            <option
                              :value="num"
                              v-for="num in 5"
                              :key="`${num}-${item.id}`"
                            >
                              {{ num }}
                            </option>
                          </select>
                          <span class="input-group-text" id="basic-addon2">{{
                            item.product.unit
                          }}</span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="text-end">
                      NT ${{ $filters.currency(item.total) }}
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" class="text-end">總計</td>
                  <td class="text-end">NT ${{ $filters.currency(cartData.total) }}</td>
                </tr>
              </tfoot>
            </table>
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-center mt-5 mt-md-7">
            <VeeForm
              ref="formRef"
              class="col-12"
              v-slot="{ errors }"
              @submit="createOrder"
            >
              <div class="mb-3">
                <div
                  class="mt-2 mb-4 fs-3 ms-1 fw-medium text-dark text-center"
                >
                  <i class="bi bi-feather fs-1 me-2"></i> 請填寫個人資料
                </div>
                <label for="email" class="form-label">Email</label>
                <VeeField
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="form.user.email"
                ></VeeField>
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="name" class="form-label">同學姓名</label>
                <VeeField
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
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
                  class="form-control"
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

              <div class="mb-3">
                <label for="address" class="form-label">同學地址</label>
                <VeeField
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="form.user.address"
                ></VeeField>
                <ErrorMessage
                  name="地址"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea
                  name=""
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="10"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="text-end mb-0 mb-md-5">
                <button
                  type="submit"
                  class="btn btn-danger rounded-pill my-2 my-md-3 my-xl-4 ps-6 pe-5 py-3"
                  :disabled="
                    Object.keys(errors).length > 0 ||
                    cartData.carts.length === 0
                  "
                >
                  確定預約
                </button>
              </div>
            </VeeForm>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center mb-7 mb-md-9 pt-7 pt-md-9" v-else>
    <h2 class="text-info">返回模型課程</h2>
    <p class="display-3 text-info my-4 mb-md-6">預約課程列表目前尚無課程!!!</p>
    <RouterLink to="/products" class="fs-5 btn btn-danger rounded-5 py-3 px-5">
      課程介紹 !
    </RouterLink>
  </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const { VITE_API, VITE_PATH } = import.meta.env;
const formRef = ref(null);

const cartData = ref({ carts: [] });
const orderId = ref('');
const form = ref({
  user: {
    name: '',
    email: '',
    tel: '',
    address: '',
  },
  message: '',
});

const router = useRouter();
const isLoading = ref(false);
const isLoadingItem = ref('');

const isPhone = (value) => {
  const phoneNumber = /(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/;
  return phoneNumber.test(value) ? true : '需要正確的電話號碼';
};

const getCarts = () => {
  isLoading.value = true;
  axios
    .get(`${VITE_API}api/${VITE_PATH}/cart`)
    .then((res) => {
      cartData.value = res.data.data;
      isLoading.value = false;
    })
    .catch((err) => {
      isLoading.value = false;
      alert(err.response.data.message);
    });
};
const removeCartItem = (id) => {
  isLoadingItem.value = id;
  isLoading.value = true;
  axios
    .delete(`${VITE_API}/api/${VITE_PATH}/cart/${id}`)
    .then(() => {
      isLoading.value = false;
      getCarts();
      // 讀取完後，清空id
      isLoadingItem.value = '';
      Swal.fire('己移除單一預約課程');
    })
    .catch((err) => {
      isLoading.value = false;
      alert(err.response.data.message);
    });
};
const deleteAllCarts = () => {
  isLoading.value = true;
  axios
    .delete(`${VITE_API}/api/${VITE_PATH}/carts`)
    .then(() => {
      isLoading.value = false;
      getCarts();
      Swal.fire('己清空所有預約課程');
    })
    .catch((err) => {
      isLoading.value = false;
      alert(err.response.data.message);
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
      isLoading.value = false;
      getCarts();
      isLoadingItem.value = '';
      Swal.fire('己更改預約人數');
    })
    .catch((err) => {
      isLoading.value = false;
      alert(err.response.data.message);
    });
};
const createOrder = () => {
  isLoading.value = true;
  const order = form.value;
  axios
    .post(`${VITE_API}api/${VITE_PATH}/order`, { data: order })
    .then((res) => {
      orderId.value = res.data.orderId;
      router.push(`/order/${orderId.value}`);
      Swal.fire('己成功預約課程');
      formRef.value.resetForm();
      isLoading.value = false;
      getCarts();
    })
    .catch((err) => {
      isLoading.value = false;
      alert(err.response.data.message);
    });
};

onMounted(() => {
  getCarts();
});
</script>
