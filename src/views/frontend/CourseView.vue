<template>
  <section class="box-bg01">
    <div class="container-fulid">
      <div class="container">
        <div class="row">
          <div
            class="col-12 text-dark mt-3 mt-xl-6 mt-md-4"
            data-aos="fade-down"
          >
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
                <div
                  class="bg-secondary p-4 p-md-5 price rounded-3"
                  data-aos="fade-left"
                  data-aos-delay="400"
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
                        v-model.number="qty"
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
                      @click.prevent="cartStore.addToCart(product.id, qty)"
                    >
                      加入預約清單
                      <img
                        src="/img/arrow-right-long.svg"
                        class="ps-3"
                        alt="加入預約清單"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <img
        src="/img/Object02.svg"
        class="box-bg02 pb-3"
        alt="Background Image"
      />
    </div>
  </section>
  <section class="position-relative box-bg03">
    <div class="container">
      <div class="row">
        <div class="col-12 text-dark mt-3 mt-xl-6 mt-md-4">
          <div class="mx-auto text-center OBJECTS">
            <div class="fw-bold mb-0 title">猜您也有興趣</div>
            <span class="text-info fs-4">Guess you're also interested</span>
          </div>
        </div>
        <div
          class="row g-5 class04 pb-md-4 pb-lg-4 pb-xl-4 mx-auto justify-content-center"
          data-aos="fade-up"
        >
          <template v-for="(product, index) in filterProducts" :key="product.id">
            <div
              v-if="index < 3"
              class="col-12 col-xl-4 col-lg-5 mx-2 mx-xl-0 mx-lg-0 mx-md-0"
            >
              <div class="card02 rounded-5 shadow bg-white position-relative">
                <div class="cardTo" role="button" @click="getProduct(product.id)">
                  <img
                    :src="product.imageUrl"
                    class="rounded-top-5 w-100 object-fit-cover"
                    height="250"
                    alt="課程圖片"
                  />
                </div>
                <div class="card-body position-relative">
                  <div
                    class="rounded-pill bg-secondary fs-6
                     px-3 py-1 text-white position-absolute category"
                  >
                    {{ product.category }}
                  </div>
                  <h4 class="card-title pt-5 px-4">【 {{ product.title }} 】</h4>
                  <!-- Favorite icon -->
                  <div
                    class="card_Favorite position-absolute"
                    @click="setFavorite(product.id)"
                  >
                    <span v-if="favoriteList.includes(product.id)">
                      <i class="bi bi-heart-fill fs-4 text-danger"></i
                    ></span>
                    <span v-else>
                      <i class="bi bi-heart fs-4 text-danger"></i
                    ></span>
                  </div>
                  <div
                    class="fs-5 card-text text-info px-5 pt-2"
                    v-if="product.price === product.origin_price"
                  >
                    {{ product.price }} 元
                  </div>
                  <div v-else class="mt-3 d-flex c_font">
                    <del class="ms-5 card-text text-info pt-2">
                      原價 ${{ product.origin_price }} 元</del
                    >
                    <p
                      class="card-text text-dark ms-3 ms-xl-5 ms-lg-5 ms-md-9 pt-2"
                    >
                      特價 ${{ product.price }} 元
                    </p>
                  </div>
                  <div class="pb-7 pb-md-5 pb-lg-5 pb-xl-5 pt-2 pt-md-6 d-flex">
                    <div class="classBtn04 position-absolute">
                      <button
                        @click="handleRefresh(product.id)"
                        type="button"
                        class="btn btn-danger rounded-pill ps-6 pe-4 py-2 w-100"
                      >
                        課程介紹
                        <img
                          src="/img/arrow-right-long.svg"
                          class="ps-3 pb-1"
                          alt="課程介紹"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-start">
      <img src="/img/Object04.svg" class="box-bg04 mb-0 mb-md-3" alt="Background Image" />
    </div>
    <div
      class="position-absolute bg_opacity top-0 start-0 w-100 h-100 z-n1"
    ></div>
  </section>
</template>

<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import useCartStore from '@/stores/cartStore';
import {
  ref, onMounted, computed, watchEffect,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';

const cartStore = useCartStore();
const { VITE_API, VITE_PATH } = import.meta.env;
const route = useRoute();
const router = useRouter();
const { id } = route.params;
const product = ref({});
const products = ref([]);
const qty = ref(1);

const isLoading = ref(false);
const category = ref('');
const favoriteList = ref([]);

const filterProducts = computed(() => products.value.filter(
  (item) => category.value === '' || item.category === category.value,
));
const getProducts = () => {
  isLoading.value = true;
  axios.get(`${VITE_API}api/${VITE_PATH}/products/all`).then((res) => {
    // 把產品列表存起來，準備呈現在畫面
    products.value = res.data.products;
    isLoading.value = false;
  });
};
const getProduct = () => {
  isLoading.value = true;
  axios.get(`${VITE_API}api/${VITE_PATH}/product/${id}`).then((res) => {
    product.value = res.data.product;
    category.value = res.data.product.category;
    isLoading.value = false;
    router.push(`/product/${product.value.id}`);
  }).catch((err) => {
    Swal.fire('Error fetching product data:', err);
    isLoading.value = false;
  });
};
const getFavorite = () => {
  const favoriteListStr = localStorage.getItem('homeFavorite');
  if (favoriteListStr) {
    favoriteList.value = JSON.parse(favoriteListStr);
  }
};
const setFavorite = (productId) => {
  // 查看是否已经包含在我的最爱列表中
  const index = favoriteList.value.indexOf(productId);
  if (index !== -1) {
    // 如果已经在列表中，则移除
    favoriteList.value.splice(index, 1);
    Swal.fire('已移除我的最爱');
  } else {
    // 否则添加到列表中
    favoriteList.value.push(productId);
    Swal.fire('已添加到我的最爱');
  }
  // 更新本地存储中的我的最爱列表
  localStorage.setItem('homeFavorite', JSON.stringify(favoriteList.value));
};

const handleRefresh = (productId) => {
  axios.get(`${VITE_API}api/${VITE_PATH}/product/${productId}`).then((res) => {
    product.value = res.data.product;
    category.value = res.data.product.category;
    isLoading.value = false;
    router.push(`/product/${product.value.id}`);
  }).catch((err) => {
    Swal.fire('Error fetching product data:', err);
    isLoading.value = false;
  });
};

onMounted(() => {
  getProduct();
  getFavorite();
});
watchEffect(() => {
  getProducts();
});
</script>
