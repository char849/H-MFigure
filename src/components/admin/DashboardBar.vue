<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-light bg-dark text-success fw-bold"
  >
    <div class="container-fluid">
      <RouterLink class="navbar-brand mt-0 text-white" to="/admin/products">後台首頁</RouterLink>
      <button class="navbar-toggler collapsed" type="button"
       data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false"
         aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" ref="collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link text-white"
              to="/admin/products"
              @click="closeNavHam"
              >後台產品列表</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink
              class="nav-link text-white"
              to="/admin/orders"
              @click="closeNavHam"
              >後台訂單列表</RouterLink
            >
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link text-white"
              @click.prevent="logout"
              >登出</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Swal from 'sweetalert2';
import axios from 'axios';
import { onMounted } from 'vue';
import useCollapse from '@/mixins/mixins';
import { useRouter } from 'vue-router';

const { closeNavHam } = useCollapse();
const { VITE_API } = import.meta.env;
const router = useRouter();
const logout = () => {
  const api = `${VITE_API}/logout`;
  axios
    .post(api)
    .then((res) => {
      if (res.data.success) {
        // 登出時清除 cookie 內的 token
        document.cookie = 'hexToken=; expires=;';
        router.push('/login');
        Swal.value(res.data.message);
      }
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        Swal.fire(err.response.data.message);
      } else {
        Swal.fire('己成功登出');
      }
    });
};
onMounted(() => {
  closeNavHam();
});
</script>
