<template>
  <FrontNavbar />
  <RouterView />
  <FooterView />
</template>

<script setup>
import FrontNavbar from '@/components/frontend/FrontNavbar.vue';
import FooterView from '@/components/frontend/FooterView.vue';
</script>
