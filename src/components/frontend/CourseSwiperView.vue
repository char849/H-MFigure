<template>
  <section class="position-relative box-bg03 pb-m">
    <div class="container">
      <div class="row">
        <div class="col-12 text-dark mt-4 mt-xl-9">
          <div class="mx-auto text-center OBJECTS">
            <div class="fw-bold mb-0 title">猜您也有興趣</div>
            <span class="text-info fs-4">Guess you're also interested</span>
          </div>
        </div>
      </div>
      <div
        class="row g-5 pb-5 pb-md-4 pb-lg-4 pb-xl-4 mx-auto
         justify-content-center justify-content-md-start"
        data-aos="fade-up"
      >
      <template v-if="products.length > 0">
        <Swiper
          :pagination="pagination"
          :slidesPerView="2"
          :breakpoints="{
          '1366': {
          slidesPerView: 4,
          spaceBetween: 10,
          }
          }"
          :modules="modules"
        >
          <SwiperSlide v-for="product in filterProducts" :key="product.id">
          <div class="col-12 col-xl-4 col-lg-5 mx-2 mx-xl-0 mx-lg-0 mx-md-0">
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
                  class="rounded-pill bg-secondary fs-6 px-3
                   py-1 text-white position-absolute category"
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
                    <RouterLink
                      :to="`/product/${product.id}`"
                      type="button"
                      class="btn btn-danger rounded-pill ps-6 pe-4 py-2 w-100"
                    >
                      課程介紹
                      <img
                        src="/img/arrow-right-long.svg"
                        class="ps-3 pb-1"
                        alt="課程介紹"
                      />
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </template>
      </div>
    </div>
    <div class="d-flex justify-content-start">
      <img
        src="/img/Object04.svg"
        class="box-bg04 pb-6"
        alt="Background Image"
      />
    </div>
    <div
      class="position-absolute bg-success top-0 start-0 w-100 h-100 opacity-25 z-n1"
    ></div>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import axios from 'axios';
import Swal from 'sweetalert2';
import {
  ref, onMounted, computed, defineProps,
} from 'vue';

const { category } = defineProps({
  category: String,
});
const { VITE_API, VITE_PATH } = import.meta.env;
const isLoading = ref(false);
const products = ref({});
const favoriteList = ref([]);

const modules = [Autoplay, Navigation, Pagination];

const filterProducts = computed(() => products.value.filter((item) => category.value === '' || item.category === category.value));
const getProducts = () => {
  isLoading.value = true;
  axios
    .get(
      `${VITE_API}api/${VITE_PATH}/products/all`,
    )
    .then((res) => {
      // 把產品列表存起來，準備呈現在畫面
      products.value = res.data.products;
      isLoading.value = false;
    });
};
const getFavorite = () => {
  const favoriteListStr = localStorage.getItem('homeFavorite');
  if (favoriteListStr) {
    favoriteList.value = JSON.parse(favoriteListStr);
  }
};
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
onMounted(() => {
  getProducts();
});
</script>

<style>
.swiper-container {
  max-width: 600px !important; /* 設定 container 的最大寬度 */
  margin-left: auto !important;
  margin-right: auto !important;
}
.swiper-slide {
  width: auto !important; /* 讓圖片保持原始大小 */
  margin: 0 auto !important; /* 讓圖片水平置中 */
}
.swiper-slide img {
  max-width: 100% !important; /* 圖片最大寬度為 container 的寬度 */
  height: auto !important; /* 保持圖片的原始高寬比 */
}
</style>
