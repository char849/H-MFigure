<template>
  <DashboardBar />
  <RouterView  v-if="status" />
</template>

<script setup>
import axios from 'axios';

// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

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
  axios.defaults.headers.common.Authorization = `${token}`;
  const api = `${VITE_API}api/user/check`;
  axios
    .post(api)
    .then(() => {
      status.value = true;
    })
    .catch((err) => {
      router.push('/login');
      Swal.fire(err.response.data.message);
    });
};
init();
</script>
