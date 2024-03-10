<template>
  <section class="box-bg01">
    <div class="container">
      <div class="row">
        <div class="col-12 text-dark mt-3 mt-xl-6 mt-md-4" data-aos="fade-down">
          <div class="mx-auto text-center OBJECTS">
            <div class="fw-bold title mb-0">課程介紹</div>
            <span class="text-info fs-4">Course Introduction</span>
          </div>
        </div>
        <VueLoading :active="isLoading" :z-index="1060" class="text-center" />
        <div class="row g-6 class03 mx-auto">
          <div class="col-12 col-lg-6" data-aos="fade-left">
            <div class="d-flex flex-column">
              <img
                class="img-fluid w-100 align-self-end rounded-5"
                :src="product.imageUrl"
              />
              <div class="bg-secondary p-4 p-md-5 price rounded-3"
              data-aos="fade-left" data-aos-delay="400"
               >
                <div class="fs_class text-primary mb-1">
                  特價 ${{ product.price }}
                </div>
                <del class="fs-4 mb-0">原價 ${{ product.origin_price }}</del>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6" data-aos="fade-right">
            <p
              class="d-inline-block bg-secondary text-primary py-1 px-4 rounded-5"
            >
              {{ product.category }}
            </p>
            <h1 class="text-dark mb-4">{{ product.title }}</h1>
            <p class="fs-5 fw-bold">課程內容</p>
            <p>{{ product.content }}</p>
            <p class="fs-5 fw-bold">注意事項</p>
            <p class="mb-4">{{ product.description }}</p>
            <div class="row g-4">
              <div class="col-md-6">
                <p class="fs-5 fw-bold">課程資訊</p>
                <p class="mb-0">課程難度：{{ product.level }}</p>
                <p class="mb-0">課程時間：{{ product.time }}</p>
                <p class="mb-0">課程時數：{{ product.hr }}</p>
              </div>
              <div class="col-md-6">
                <p class="fs-5 fw-bold text-primary">.</p>
                <p class="mb-0">上課人數：{{ product.people }}</p>
                <p class="mb-0">一週天數：{{ product.week }}</p>
                <p class="mb-0">上課地點：{{ product.location }}</p>
              </div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="input-group my-2">
                    <span
                      class="fs-6 bg-danger text-white px-4 py-2 rounded-start"
                      >人數</span
                    ><select
                      id=""
                      class="form-select w-25 me-1 ps-5"
                      v-model="qty"
                    >
                      <option
                        :value="num"
                        v-for="num in 5"
                        :key="`${num}-${id}`"
                      >
                        {{ num }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <button
                    type="button"
                    class="btn btn-danger rounded-pill ps-6 pe-5 py-3 orderBtn my-3 my-md-0"
                    @click.prevent="addToCart(product.id, qty)"
                  >
                    加入預約清單
                    <img
                      src="/img/arrow-right-long.svg"
                      class="ps-3"
                      alt="arrow-right"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end my-5" data-aos="fade-right">
      <img src="/img/Object07.svg" class="box-bg08 pb-6" alt="Object08" />
    </div>
  </section>
</template>

<script setup>
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { VITE_API, VITE_PATH } = import.meta.env;
const route = useRoute();
const { id } = route.params;

const product = ref({});
const qty = ref(1);
const isLoading = ref(false);

const getProduct = () => {
  isLoading.value = true;
  axios.get(`${VITE_API}api/${VITE_PATH}/product/${id}`).then((res) => {
    // 將遠端資料取回
    isLoading.value = false;
    product.value = res.data.product;
  });
};

const addToCart = (productId, quantity) => {
  // 加入購物車的資料格式
  const data = {
    product_id: productId,
    qty: quantity,
  };
  isLoading.value = true;
  axios
    .post(`${VITE_API}api/${VITE_PATH}/cart`, { data }) // 將資料格式帶入
    .then(() => {
      isLoading.value = false;
      Swal.fire('己加入預約清單');
    });
};

onMounted(() => {
  getProduct();
});

</script>
