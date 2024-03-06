<template>
  <div class="container">
    <div class="row g-2 justify-content-center OBJECTS06">
      <div class="col-12 col-md-4 text-center">
        <h1 class="pb-5 pt-9 text-dark fw-bold">後台登入頁面</h1>
        <form @submit.prevent="login">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="floatingInput"
              placeholder="Password"
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mt-3">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            class="btn btn-lg btn-danger w-100 mt-3"
            type="button"
            @click="login"
          >
            登入
          </button>
        </form>
        <p class="mt-6 mb-3 text-muted">
      &copy; {{ new Date().getFullYear() }} - Charlotte Lee<br />
      本網站僅供個人作品使用，不提供商業用途
      <RouterLink class="nav-link text-muted" to="/">返回前台首頁</RouterLink>
    </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { VITE_API } = import.meta.env;

const router = useRouter();

const user = ref({});

const login = () => {
  const api = `${VITE_API}admin/signin`;
  axios
    .post(api, user.value)
    .then((res) => {
      const { token, expired } = res.data;
      console.log(token, expired);
      document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
      router.push('/admin/products');
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
</script>
