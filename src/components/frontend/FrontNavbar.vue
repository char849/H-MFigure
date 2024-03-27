<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-primary">
    <div
      class="container position-relative"
      :class="{ 'bg-primary': isMenuOpen, rounded: isMenuOpen }"
    >
      <button
        class="navbar-toggler position-absolute"
        type="button"
        @click.prevent="toggleCollapse"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
      >
        <img src="/img/bars.svg" alt="Bars" />
      </button>
      <RouterLink class="navbar-brand mx-md-auto d-lg-none"
        :to="{ path: '/', query: { toggleMenu: false }}"
        :class="{ 'bg-primary': isMenuOpen, rounded: isMenuOpen }"
        @click="handleIndexClick">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D"
          alt="Logo"
          width="160"
          class="d-flex align-items-start"
        />
      </RouterLink>

      <RouterLink class="nav-link me-4 mb-5 d-lg-none"
      :to="{ path: '/favorite', query: { toggleMenu: false }}"
      :class="{ 'bg-primary': isMenuOpen, rounded: isMenuOpen }"
       @click="handleFavoriteClick">
        <img src="/img/heart.svg" alt="Favorite" />
      </RouterLink>

      <RouterLink
        class="nav-link me-4 mb-5 d-lg-none text-dark position-relative"
        :to="{ path: '/mall', query: { toggleMenu: false }}"
        :class="{ 'bg-primary': isMenuOpen, rounded: isMenuOpen }"
        @click="handleMallClick"
      >
        <span
          v-if="cartsLength > 0"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
        {{ cartsLength }}
        </span>
        <img src="/img/bag-shopping.svg" alt="Mall" />
      </RouterLink>

      <div class="collapse navbar-collapse" id="navbarNav" ref="collapse">
        <ul
          class="navbar-nav ms-lg-0 ms-lg-0 ms-xl-7 ms-xxl-9 d-flex align-items-center fw-bold"
          @click="closeNavHam($event)"
        >
          <li class="nav-item active mx-auto me-lg-5 me-xl-5">
            <RouterLink
              class="nav-link"
              to="/products"
              @click="toggleNavHamAndCloseMenu"
              >模型課程</RouterLink
            >
          </li>

          <li class="nav-item mx-auto me-lg-5 me-xl-5">
            <RouterLink
              class="nav-link"
              to="/record"
              @click="toggleNavHamAndCloseMenu"
              >訂單記錄</RouterLink
            >
          </li>

          <li
            class="nav-item mx-auto me-lg-4 me-xl-4 pb-5 pb-md-5 pb-lg-0 pb-xl-0"
          >
            <RouterLink
              class="nav-link"
              to="/information"
              @click="toggleNavHamAndCloseMenu"
              >展覽資訊</RouterLink
            >
          </li>

          <RouterLink class="navbar-brand d-none d-lg-block" to="/" @click="closeMenu">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D"
              alt="Logo"
              width="320"
              class="d-flex align-items-start"
            />
          </RouterLink>

          <li class="nav-item ms-3 d-none d-lg-block nav-link">
            <RouterLink to="/favorite">
              <img src="/img/heart.svg" alt="Favorite" />
            </RouterLink>
          </li>

          <li class="nav-item ms-6 d-none d-lg-block nav-link">
            <RouterLink to="/mall" class="position-relative">
              <span
                v-if="cartsLength > 0"
                class="position-absolute top-0 start-100
                 translate-middle badge rounded-pill bg-danger"
              >
              {{ cartsLength }}
              </span>
              <img src="/img/bag-shopping.svg" alt="Mall" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div :class="{ 'menu-background': true, active: isMenuOpen }"
   @click.prevent="toggleCollapse"></div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import useCollapse from '@/mixins/mixins';
import useCartStore from '@/stores/cartStore';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();
const { cartsLength } = storeToRefs(cartStore);

const collapse = ref();
const { toggleNavHam, closeNavHam } = useCollapse();
const isMenuOpen = ref(false);
const closeMenu = () => {
  isMenuOpen.value = false;
};
const toggleCollapse = () => {
  toggleNavHam();
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    closeNavHam();
  }
};
const toggleNavHamAndCloseMenu = () => {
  toggleNavHam();
  closeMenu();
};
const handleFavoriteClick = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    router.push({ path: '/favorite', query: { toggleMenu: false } });
  } else {
    router.push({ path: '/favorite', query: { toggleMenu: false } });
  }
};
const handleMallClick = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    router.push({ path: '/mall', query: { toggleMenu: false } });
  } else {
    router.push({ path: '/mall', query: { toggleMenu: false } });
  }
};
const handleIndexClick = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    router.push({ path: '/', query: { toggleMenu: false } });
  } else {
    router.push({ path: '/', query: { toggleMenu: false } });
  }
};
</script>
