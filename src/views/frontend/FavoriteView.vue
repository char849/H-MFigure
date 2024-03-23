<template>
  <section class="position-relative box-bg05 mb-7">
    <VueLoading :active="isLoading" :z-index="1060" class="text-center" />
    <div class="OBJECTS05" v-if="filterProducts.length > 0">
      <div class="container">
        <div class="row">
          <div
            class="col-12 text-dark mt-xl-7 mt-lg-7 mt-md-7 ein_center"
            data-aos="fade-down"
          >
            <div
              class="fw-bold title mt-5 mb-2 d-none d-md-block d-lg-block d-xl-block"
            >
              課程收藏
              <span class="text-info fw-normal fs-5"
                >保存自己感興趣或有意向學習的課程</span
              >
            </div>
            <div
              class="fw-bold title mt-7 mb-2 d-block d-md-none d-xl-none d-lg-none"
            >
              課程收藏
              <div class="text-info fw-normal fs-5 d-md-none">
                保存自己感興趣或有意向學習的課程
              </div>
            </div>
            <span class="text-info fs-4">Course Collection</span>
          </div>
          <div
            class="row g-5 pb-5 pb-md-4 pb-lg-4 pb-xl-7 justify-content-center m-0"
            data-aos="fade-up"
          >
            <template v-for="item in filterProducts" :key="item.id">
              <div
                class="col-12 col-xl-4 col-lg-5 mx-2 mx-xl-0 mx-lg-0 mx-md-0"
              >
                <div class="card02 rounded-5 shadow bg-white">
                  <img
                    :src="item.imageUrl"
                    class="rounded-top-5 w-100 object-fit-cover"
                    height="250"
                    alt="課程圖片"
                  />
                  <div class="card-body position-relative">
                    <div
                      class="rounded-pill bg-secondary fs-6 px-3 py-1
                       text-white position-absolute category"
                    >
                      {{ item.category }}
                    </div>
                    <h4 class="card-title pt-5 px-4">【 {{ item.title }} 】</h4>
                    <!-- Favorite icon -->
                    <div
                      class="card_Favorite position-absolute"
                      @click="setFavorite(item.id)"
                    >
                      <span v-if="favoriteList.includes(item.id)"
                        ><i class="bi bi-heart-fill fs-4 text-danger"></i
                      ></span>
                      <span v-else
                        ><i class="bi bi-heart fs-4 text-danger"></i
                      ></span>
                    </div>
                    <div
                      class="fs-5 card-text text-info px-5 pt-2"
                      v-if="item.price === item.origin_price"
                    >
                      {{ $filters.currency(item.price) }} 元
                    </div>
                    <div v-else class="mt-3 d-flex c_font">
                      <del class="ms-5 card-text text-info pt-2">
                        原價 ${{ $filters.currency(item.origin_price) }} 元</del
                      >
                      <p
                        class="card-text text-dark ms-3 ms-xl-5 ms-lg-5 ms-md-9 pt-2"
                      >
                        特價 ${{ $filters.currency(item.price) }} 元
                      </p>
                    </div>
                    <div
                      class="pb-7 pb-md-5 pb-lg-5 pb-xl-5 pt-2 pt-md-6 d-flex"
                    >
                      <div class="classBtn04 position-absolute">
                        <RouterLink
                          :to="`/product/${item.id}`"
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
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mb-7 mb-md-9 pt-7 pt-md-9" v-else>
      <h2 class="text-info">沒有我的收藏</h2>
      <p class="display-3 text-info my-4 mb-md-6">前往預約課程列表!!!</p>
      <RouterLink
        to="/products"
        class="fs-5 btn btn-danger rounded-5 py-3 px-5"
      >
        課程介紹 !!
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const isLoading = ref(false);
const { VITE_API, VITE_PATH } = import.meta.env;
const products = ref([]);
const favoriteList = ref([]);
const filterProducts = computed(() => products.value.filter(
  (item) => favoriteList.value.includes(item.id),
));
const getProducts = () => {
  isLoading.value = true;
  axios
    .get(`${VITE_API}api/${VITE_PATH}/products/all`)
    .then((res) => {
      products.value = res.data.products;
      isLoading.value = false;
    })
    .catch((err) => {
      isLoading.value = false;
      Swal.fire(err.response.data.message);
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
  } else {
    favoriteList.value.push(id);
  }
  Swal.fire('己移除收藏清單');
  localStorage.setItem('homeFavorite', JSON.stringify(favoriteList.value));
  getFavorite();
};
onMounted(() => {
  getProducts();
  getFavorite();
});
</script>
