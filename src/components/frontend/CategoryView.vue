<template>
  <div v-for="(item, index) in filterProducts" :key="item.id">
    <div
      v-if="index < 3"
      class="col-12 col-xl-4 col-lg-5 mx-2 mx-xl-0 mx-lg-0 mx-md-0"
      data-aos="fade-up"
    >
      <div class="card02 rounded-5 shadow bg-white position-relative">
        <div class="cardTo" role="button" @click="getProduct(item.id)">
          <img
            :src="item.imageUrl"
            class="rounded-top-5 w-100 object-fit-cover"
            height="250"
            alt="課程圖片"
          />
        </div>
        <div class="card-body position-relative">
          <div
            class="rounded-pill bg-secondary fs-6 px-3 py-1 text-white position-absolute category"
          >
            {{ item.category }}
          </div>
          <h4 class="card-title pt-5 px-4">【 {{ item.title }} 】</h4>
          <!-- Favorite icon -->
          <div
            class="card_Favorite position-absolute"
            @click="setFavorite(item.id)"
          >
            <span v-if="favoriteList.includes(item.id)">
              <i class="bi bi-heart-fill fs-4 text-danger"></i
            ></span>
            <span v-else> <i class="bi bi-heart fs-4 text-danger"></i></span>
          </div>
          <div
            class="fs-5 card-text text-info px-5 pt-2"
            v-if="item.price === item.origin_price"
          >
            {{ item.price }} 元
          </div>
          <div v-else class="mt-3 d-flex c_font">
            <del class="ms-5 card-text text-info pt-2">
              原價 ${{ item.origin_price }} 元</del
            >
            <p class="card-text text-dark ms-3 ms-xl-5 ms-lg-5 ms-md-9 pt-2">
              特價 ${{ item.price }} 元
            </p>
          </div>
          <div class="pb-7 pb-md-5 pb-lg-5 pb-xl-5 pt-2 pt-md-6 d-flex">
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
  </div>
</template>

<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  ref, computed, onMounted, watchEffect,
} from 'vue';
import { useRouter } from 'vue-router';

const { VITE_API, VITE_PATH } = import.meta.env;
const { category } = defineProps({
  category: {
    type: String,
    default: '',
  },
});
const router = useRouter();
const products = ref([]);
const product = ref([]);
const isLoading = ref(false);
const favoriteList = ref([]);
const getProducts = () => {
  isLoading.value = true;
  axios.get(`${VITE_API}api/${VITE_PATH}/products/all`).then((res) => {
    // 把產品列表存起來，準備呈現在畫面
    products.value = res.data.products;
    isLoading.value = false;
  });
};
const getProduct = (id) => {
  axios.get(`${VITE_API}api/${VITE_PATH}/product/${id}`).then((res) => {
    // 將遠端資料取回
    product.value = res.data.product;
    router.push(`/product/${id}`);
  });
};
const filterProducts = computed(() => {
  console.log('Category:', category.value);
  console.log('Products:', products.value);
  return products.value.filter(
    (item) => category.value === '' || item.category === category.value,
  );
});
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
  getFavorite();
});
watchEffect(() => {
  getProducts();
});
</script>
