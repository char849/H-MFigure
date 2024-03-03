<template>
  <div class="container-fulid box-bg09">
    <template v-if="order.is_paid">
      <div class="container mt-5 mt-md-7 mb-5">
        <ul class="row justify-content-center list-unstyled py-0 py-md-3 px-3">
          <li class="col-md-4">
            <div
              class="bg-info p-3 badge rounded-pill fs-3 w-100 mb-2 bg-secondary text-dark"
            >
              1. 填寫資料
            </div>
          </li>
          <li class="col-md-4">
            <div
              class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-info text-dark"
            >
              2. 課程結帳
            </div>
          </li>
          <li class="col-md-4">
            <div
              class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-danger text-white"
            >
              3. 付款完成
            </div>
          </li>
        </ul>
        <div class="col-12 text-dark mt-1 mt-md-4">
          <div class="mx-auto text-center OBJECTS04">
            <div class="fw-bold title mb-0">課程己完成付款</div>
            <span class="text-info fs-4">Complete Payment for Course</span>
          </div>
        </div>
        <div class="row justify-content-center order mx-1">
          <div class="col-12 col-md-8">
            <div class="col-12">
              <h3 class="mb-3 text-success">訂單課程清單</h3>
              <table class="table">
                <thead class=" border-bottom">
                  <th>課程名稱</th>
                  <th>報名人數</th>
                  <th class="text-center d-none d-md-block">總價</th>
                </thead>
                <tbody>
                  <tr
                    v-for="item in order.products"
                    :key="item"
                    class="align-middle"
                  >
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        :alt="item.product.title"
                        style="width: 100px"
                        class="rounded-3"
                      />
                    </td>
                    <td>
                      <p class="mb-2 mb-md-0">{{ item.product.title }}</p>
                      <p class="h6">數量 : {{ item.qty }}</p>
                      <p class="d-table-cell d-lg-none">
                        NT ${{
                          $filters.currency(item.product.price * item.qty)
                        }}
                      </p>
                    </td>
                    <td class="text-center d-none d-lg-table-cell">
                      NT ${{ $filters.currency(item.product.price * item.qty) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-12 mb-6">
              <h3 class="text-success">上課資訊</h3>
              <table class="table border">
                <tbody>
                  <tr>
                    <td colspan="2" class="text-danger fw-bold">
                      <i class="bi bi-bell-fill"></i>
                      感謝同學的報名，上課時間及地點再請留意Email訊息。
                    </td>
                  </tr>
                  <tr>
                    <th style="width: 100px" class="ps-3">姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th style="width: 100px" class="ps-3">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">下單時間</th>
                    <td>{{ $filters.date(order.create_at) }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">付款狀態</th>
                    <td>
                      <strong v-if="order.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-danger">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th class="ps-3">總金額</th>
                    <td>
                      NT ${{ $filters.currency(order.total) }}
                    </td>
                  </tr>
                  <tr>
                    <th class="text-danger align-middle ps-3">訂單成立</th>

                    <td class="py-3">
                      <button
                        type="button"
                        class="btn btn-danger rounded-pill w-50 py-2"
                        @click="goShopping"
                      >
                        繼續看課程
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="container mt-5 mt-md-7 mb-5">
        <ul class="row justify-content-center list-unstyled py-0 py-md-3 px-3">
          <li class="col-md-4">
            <div
              class="bg-info p-3 badge rounded-pill fs-3 w-100 mb-2 bg-secondary text-dark"
            >
              1. 填寫資料
            </div>
          </li>
          <li class="col-md-4">
            <div
              class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-danger text-white"
            >
              2. 課程結帳
            </div>
          </li>
          <li class="col-md-4">
            <div
              class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-info text-dark"
            >
              3. 付款完成
            </div>
          </li>
        </ul>
        <div class="col-12 text-dark mt-1 mt-md-4">
          <div class="mx-auto text-center OBJECTS04">
            <div class="fw-bold title mb-0">實體課程下訂</div>
            <span class="text-info fs-4">Place an order for the course</span>
          </div>
        </div>
        <div class="row justify-content-center order mx-1">
          <div class="col-12 col-md-8">
            <div class="col-12">
              <h3 class="mb-3 text-success">訂單課程清單</h3>
              <table class="table">
                <thead class=" border-bottom">
                  <th>課程名稱</th>
                  <th>報名人數</th>
                  <th class="text-center d-none d-md-block">總價</th>
                </thead>
                <tbody>
                  <tr
                    v-for="item in order.products"
                    :key="item"
                    class="align-middle"
                  >
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        :alt="item.product.title"
                        style="width: 100px"
                        class="rounded-3"
                      />
                    </td>
                    <td>
                      <p class="mb-2 mb-md-0">{{ item.product.title }}</p>
                      <p class="h6">人數 : {{ item.qty }}</p>
                      <p class="d-table-cell d-lg-none">
                        NT ${{
                          $filters.currency(item.product.price * item.qty)
                        }}
                      </p>
                    </td>
                    <td class="text-center d-none d-lg-table-cell">
                      NT ${{ $filters.currency(item.product.price * item.qty) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-12 mb-6">
              <h3 class="text-success">上課資訊</h3>
              <table class="table border">
                <tbody>
                  <tr>
                    <th style="width: 200px" class="ps-3">姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th style="width: 100px" class="ps-3">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">下單時間</th>
                    <td>{{ $filters.date(order.create_at) }}</td>
                  </tr>
                  <tr>
                    <th class="ps-3">付款狀態</th>
                    <td>
                      <strong v-if="order.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-danger fw-bold">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th class="ps-3">總金額</th>
                    <td>
                      NT ${{ $filters.currency(order.total) }}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="text-center py-3">
                      <button
                        v-if="!order.is_paid"
                        type="button"
                        class="btn btn-danger rounded-pill w-50 py-2"
                        @click="pay(orderId)"
                      >
                        確認付款去
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { VITE_API, VITE_PATH } = import.meta.env;
const route = useRoute();
const router = useRouter();
const orderId = ref(null);
// const is_paid = ref(false);

const order = ref({
  user: {},
});

const getOrder = () => {
  orderId.value = route.params.id;
  axios
    .get(`${VITE_API}api/${VITE_PATH}/order/${orderId.value}`)
    .then((res) => {
      if (res.data.success) {
        // eslint-disable-next-line no-shadow
        order.value = res.data.order;
        console.log(order.value);
      } else {
        console.log(res.data.message, '', 'success');
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};
const pay = (id) => {
  axios
    .post(`${VITE_API}api/${VITE_PATH}/pay/${id}`)
    .then(() => {
      getOrder(id);
    })
    .catch((err) => {
      console.log(err);
    });
};

const goShopping = () => {
  router.push('/products');
};

onMounted(() => {
  getOrder();
});
</script>
