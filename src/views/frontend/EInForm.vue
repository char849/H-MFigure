<template>
  <div class="OBJECTS05">
    <div class="container-fulid box-bg10 pb-7 pb-md-9">
      <div class="container">
      <div class="row">
        <div
          class="col-12 text-dark mt-xl-7 mt-lg-7 mt-md-7"
          data-aos="fade-down"
        >
          <div
            class="fw-bold title mt-5 mb-2 d-none d-md-block d-lg-block d-xl-block"
          >
            展覽資訊
            <span class="text-info fw-normal fs-5"
              >踏入藝術的奇幻世界，展覽資訊一手掌握</span
            >
          </div>
          <div
            class="fw-bold title mt-7 mb-2 d-block d-md-none d-xl-none d-lg-none"
          >
            展覽資訊
            <div class="text-info fw-normal fs-5 d-md-none">
              踏入藝術的奇幻世界，展覽資訊一手掌握
            </div>
          </div>
          <span class="text-info fs-4">Exhibition Information</span>
        </div>
        <VueLoading :active="isLoading" :z-index="1060" class="text-center" />
        <div class="row g-5" data-aos="fade-up">
          <template v-for="article in articles" :key="article.id">
            <div class="col-12 col-xl-4 col-lg-4 mx-3 mx-xl-0 mx-lg-0 mx-md-3">
              <div class="card02 rounded-5 shadow bg-white h-100">
                <img
                  :src="article.image"
                  class="rounded-top-5 w-100 object-fit-cover"
                  alt="展覽資訊"
                  height="280"
                />
                <div class="card-body position-relative">
                  <h4 class="card-title pt-5 px-3 px-md-4">【{{ article.title }}】</h4>
                  <p class="card-text text-dark px-4 px-md-5 pt-3 ein_w">
                    {{ article.description }}
                  </p>
                  <div class="pb-6 pb-md-5 pb-lg-5 pb-xl-5 pt-2">
                    <span class="fs-6 fs-lg-5 fs-xl-5 fs-md-5 text-secondary"
                      ><img
                        src="/img/calendar.svg"
                        alt="Calendar"
                        class="ms-4 pb-xl-2 pe-2"
                      />{{ article.date }}</span
                    >
                    <span class="text-secondary ps-3 ps-xl-7 ps-md-10">{{
                      article.info
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const { VITE_API, VITE_PATH } = import.meta.env;
const articles = ref([]);
const isLoading = ref(false);
const getArticles = () => {
  const api = `${VITE_API}api/${VITE_PATH}/articles`;
  isLoading.value = true;
  axios.get(api).then((res) => {
    articles.value = res.data.articles;
    isLoading.value = false;
  });
};
onMounted(() => {
  getArticles();
});
</script>
