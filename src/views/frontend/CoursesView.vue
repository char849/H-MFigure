<template>
  <section class="position-relative box-bgFive mb-7">
    <div class="OBJECTS_Five">
      <div class="container">
        <div class="row">
          <div class="col-12 text-dark mt-xl-7 mt-lg-7 mt-md-7 ein_center" data-aos="fade-down">
            <div
              class="fw-bold title mt-5 mb-2 d-none d-md-block d-lg-block d-xl-block"
            >
              模型課程
              <span class="text-info fw-normal fs-5"
                >從選擇材料到創建精美模型的所有步驟</span
              >
            </div>
            <div
              class="fw-bold title mt-5 mt-md-7 mb-2 d-block d-md-none d-xl-none d-lg-none"
            >
              模型課程
              <div class="text-info fw-normal fs-5 d-md-none">
                從選擇材料到創建精美模型的所有步驟
              </div>
            </div>
            <span class="text-info fs-4">Model Course</span>
          </div>
          <ul
            class="col-12 mt-4 mt-xl-0 mt-lg-0 mt-md-5 nav
             nav-pills d-inline-flex justify-content-center
              justify-content-xl-end justify-content-lg-end justify-content-md-center"
              data-aos="fade-down"
          >
            <li
              ><RouterLink
                class="btn btn-danger rounded-pill mx-2 px-5 py-2 mt-3 mt-xl-0 mt-lg-0
                 mt-md-0 my-md-4"
                to="/products"
                :class="{ 'active': $route.query.category === undefined }"
                >全部課程</RouterLink
              >
            </li>
            <li v-for="item in categories" :key="item">
              <RouterLink
                class="btn btn-danger rounded-pill mx-2 px-5 py-2 mt-3 mt-xl-0 mt-lg-0 mt-md-0"
                :to="`/products?category=${item}&page=${currentPage}`"
                :class="{ 'active': item === $route.query.category }"
                >{{ item }}</RouterLink
              >
            </li>
          </ul>
          <VueLoading :active="isLoading" :z-index="1060" class="text-center" />
          <div class="row g-5 pb-5 pb-md-4 pb-lg-4 pb-xl-4 mx-auto courses-conter"
           data-aos="fade-up">
            <template v-for="product in products" :key="product.id">
              <div
                class="col-12 col-xl-4 col-lg-5 mx-2 mx-xl-0 mx-lg-0 mx-md-0"
              >
              <div class="card02 rounded-5 shadow bg-white position-relative cardTo"
                role="button"
                @click="getProduct(product.id)">
                <div
                >
                  <img
                    :src="product.imageUrl"
                    class="rounded-top-5 w-100 object-fit-cover"
                    height="250"
                    alt="課程圖片" />
                </div>
                  <div class="card-body position-relative">
                    <div
                      class="rounded-pill bg-secondary fs-6
                       px-3 py-1 text-white position-absolute category"
                    >
                      {{ product.category }}
                    </div>
                    <h4 class="card-title pt-5 px-4">
                      【 {{ product.title }} 】
                    </h4>
                    <!-- Favorite icon -->
                      <button type="button"
                      class="card_Favorite rise-shake position-absolute"
                      @click.stop="setFavorite(product.id)"
                      >
                      <span class="" v-if="favoriteList.includes(product.id)"
                        >
                        <i class="bi bi-heart-fill fs-4 text-danger"
                         ></i
                      ></span>
                      <span v-else>
                        <i class="bi bi-heart fs-4 text-danger"
                       ></i></span>
                      </button>
                    <div
                      class="fs-5 card-text text-info px-5 pt-2"
                      v-if="product.price === product.origin_price"
                    >
                      {{ product.price }} 元
                    </div>
                    <div v-else class="mt-3 d-flex c_font">
                      <del class="ms-5 card-text text-info pt-2">
                        原價 ${{ $filters.currency(product.origin_price) }} 元</del
                      >
                      <p class="card-text text-dark ms-3 ms-xl-5 ms-lg-5 ms-md-9 pt-2">
                        特價 ${{ $filters.currency(product.price) }} 元
                      </p>
                    </div>
                    <div class="pb-7 pb-md-5 pb-lg-5 pb-xl-5 pt-2 pt-md-6 d-flex">
                      <div class="classBtnFour position-absolute">
                          <RouterLink
                         :to="`/product/${product.id}`"
                          type="button"
                          class="btn btn-danger rounded-pill ps-6 pe-4 py-2 w-100"
                        >
                          課程介紹
                          <img
                            src="/img/arrow-right-long.svg"
                            class="ps-3 pb-1"
                            alt="課程介紹"/>
                        </RouterLink>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
            </template>
          </div>
          <!-- 分頁元件 -->
          <PaginationComponent :pages="pagination" @emit-pages="getProducts" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PaginationComponent from '@/components/PaginationComponent.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  ref, watchEffect, onMounted,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { VITE_API, VITE_PATH } = import.meta.env;
const route = useRoute();
const router = useRouter();
const products = ref([]);
const product = ref([]);
const categories = ref(['熱門', '昆蟲類', '動物科', '甲殼類']);
const favoriteList = ref([]);
const pagination = ref({});
const isLoading = ref(false);
const currentPage = ref(1);
// eslint-disable-next-line
const getProducts = (currentPage = 1) => {
  // route：取得當前 URL 的訊息，像是 path
  const { category = '' } = route.query;
  isLoading.value = true;
  axios
    .get(`${VITE_API}api/${VITE_PATH}/products?category=${category}&page=${currentPage}`)
    .then((res) => {
      products.value = res.data.products;
      pagination.value = res.data.pagination;
      isLoading.value = false;
    })
    .catch((err) => {
      Swal.fire(err.response.data.message);
    });
};
const getProduct = (id) => {
  axios
    .get(
      `${VITE_API}api/${VITE_PATH}/product/${id}`,
    )
    .then((res) => {
      // 將遠端資料取回
      product.value = res.data.product;
      // router：操作路由的方法，像是跳轉（push)
      router.push(`/product/${id}`);
    });
};
// 取得 Favorite 將 string 轉成 array
const getFavorite = () => {
  const favoriteListStr = localStorage.getItem('homeFavorite');
  if (favoriteListStr) {
    favoriteList.value = JSON.parse(favoriteListStr);
  }
};
// 存入 localStorage 將 array 轉成 string
const setFavorite = (id) => {
  // 查資料裡面，有沒有這個ID
  if (favoriteList.value.includes(id)) {
    const index = favoriteList.value.findIndex((item) => item === id);
    favoriteList.value.splice(index, 1);
    Swal.fire('己移除收藏清單');
  } else {
    favoriteList.value.push(id);
    Swal.fire('己加入收藏清單');
  }
  localStorage.setItem('homeFavorite', JSON.stringify(favoriteList.value));
  getFavorite();
};
// 初始化
onMounted(() => {
  getFavorite();
});
watchEffect(() => {
  getProducts();
});
</script>
