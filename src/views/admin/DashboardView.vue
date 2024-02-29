<template>
  <DashboardBar />
  <RouterView v-if="status" />
</template>

<script setup>
import axios from 'axios';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import DashboardBar from '@/components/admin/DashboardBar.vue';

const router = useRouter();
const { VITE_API } = import.meta.env;
const status = ref(false);

const init = () => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
  this.$http.defaults.headers.common.Authorization = `${token}`;
  const api = `${VITE_API}api/user/check`;
  axios
    .post(api)
    .then(() => {
      status.value = true;
    })
    .catch(() => {
      router.push('/login');
    });
};
init();
</script>
