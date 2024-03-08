import { ref, onMounted } from 'vue';
import Collapse from 'bootstrap/js/dist/collapse';

export default () => {
  const collapse = ref(null);

  const closeNavHam = () => {
    if (collapse.value) {
      collapse.value.hide();
    }
  };

  const openNavHam = () => {
    if (collapse.value) {
      collapse.value.show();
    }
  };

  const toggleNavHam = () => {
    if (collapse.value) {
      collapse.value.toggle();
    }
  };

  onMounted(() => {
    collapse.value = new Collapse(document.getElementById('navbarNav'), {
      toggle: false,
    });
  });

  return {
    closeNavHam,
    toggleNavHam,
    openNavHam,
  };
};
