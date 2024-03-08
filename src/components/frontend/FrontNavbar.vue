<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-primary">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <img src="/img/bars.svg" alt="bars" />
      </button>
      <RouterLink class="navbar-brand ms mx-md-auto d-lg-none" to="/">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D"
          alt="logo"
          width="160"
          class="d-flex align-items-start"
        />
      </RouterLink>

      <RouterLink class="nav-link me-4 mb-5 d-lg-none" to="/favorite"
      >
        <img src="/img/heart.svg" alt="favorite"/>
      </RouterLink>

      <RouterLink
        class="nav-link me-4 mb-5 d-lg-none text-dark" to="/mall">
        <img src="/img/bag-shopping.svg" alt="mall" />
      </RouterLink>

      <div class="collapse navbar-collapse" id="navbarNav" ref="collapseRef"
       >
        <ul
          class="navbar-nav ms-lg-0 ms-lg-0 ms-xl-7 ms-xxl-9 d-flex align-items-center
           fw-bold"
        >
          <li class="nav-item active mx-auto me-lg-5 me-xl-5">
            <RouterLink class="nav-link" to="/products"
             @click="toggleNavHam">模型課程</RouterLink>
          </li>

          <li class="nav-item mx-auto me-lg-5 me-xl-5">
            <RouterLink class="nav-link" to="/record" @click="toggleNavHam">訂單記錄</RouterLink>
          </li>

          <li class="nav-item mx-auto me-lg-4 me-xl-4 pb-5 pb-md-0">
            <RouterLink class="nav-link" to="/information" @click="toggleNavHam">展覽資訊</RouterLink>
          </li>

          <RouterLink class="navbar-brand d-none d-lg-block" to="/">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707749509526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GXFEqpQy04CExUb7x4STbngGE0KIedpcFYbd6aw6OWElk1a13FI%2FZBV7QUdPhIwwiN3OYzyl4XQfPnBMPIVO76gvrzZLptxpXGE%2BT7KECZ435Q0uo%2BaQ0jBD0tYAd%2F0MFXCFKlT9KAWhsukV7%2F8yFXVI%2FTIAsxXsts3MB29%2FvnKv36x%2Bjb0fz7Z2mQofOXHoTEqKscvgfknyK4OoxxuErk0wswWiXu1eVeEmyAB%2BK6Nqhnj%2Fu1f0icBEA4CstMJGqMbNSsCRcUCpPD%2BmRPHN9Z1I403Q6UneyVOPjuFTVMkEmcydyiVyP6taAMqTRsPaFosUMVuy1RgVJOGyWH1GSQ%3D%3D"
              alt="logo"
              width="320"
              class="d-flex align-items-start"
            />
          </RouterLink>

          <li class="nav-item ms-3 d-none d-lg-block nav-link">
            <RouterLink to="/favorite">
              <img src="/img/heart.svg" alt="favorite" />
            </RouterLink>
          </li>

          <li class="nav-item ms-6 d-none d-lg-block nav-link">
            <RouterLink to="/mall">
              <img src="/img/bag-shopping.svg" alt="mall" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   </template>

<script setup>

import { ref } from 'vue';

import useCollapse from '@/mixins/mixins';

const collapseRef = ref();

const { toggleNavHam } = useCollapse();

</script>
