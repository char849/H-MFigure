import { ref, onMounted } from 'vue';
import Collapse from 'bootstrap/js/dist/collapse';

export default () => {
  const collapse = ref(null);

  const closeNavHam = () => {
    if (collapse.value) {
      collapse.value.hide();
    }
  };

  // const openNavHam = () => {
  //   if (collapse.value) {
  //     collapse.value.show();
  //   }
  // };

  const toggleNavHam = () => {
    if (collapse.value) {
      collapse.value.toggle();
    }
  };

  onMounted(() => {
    const ulElement = document.getElementById('navbarNav');
    if (ulElement) {
      collapse.value = new Collapse(ulElement);
      collapse.value.toggle();
    } else {
      console.error('Element with ID "navbarNav" not found.');
    }
  });

  return {
    closeNavHam,
    toggleNavHam,
  };
};
