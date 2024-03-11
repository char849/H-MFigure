import { ref, onMounted, onBeforeUnmount } from 'vue';
import Collapse from 'bootstrap/js/dist/collapse';

export default () => {
  const collapse = ref(null);

  // const closeNavHam = () => {
  //   if (collapse.value) {
  //     collapse.value.hide();
  //   }
  // };

  const closeNavHam = (event) => {
    if (event) {
      const { target } = event;
      const navbarNav = document.getElementById('navbarNav');
      if (navbarNav && !navbarNav.contains(target)) {
        if (collapse.value) {
          collapse.value.hide();
          navbarNav.classList.remove('show');
        }
      }
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

    document.addEventListener('click', closeNavHam);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', closeNavHam);
  });

  return {
    closeNavHam,
    toggleNavHam,
    openNavHam,
  };
};
