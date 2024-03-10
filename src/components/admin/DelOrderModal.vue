<template>
  <div
    class="modal fade"
    id="delOrderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除 {{ item.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ item.title }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-dark"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="delOrder"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import useModal from '@/hooks/useModal';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

const {
  openModal, hideModal, modalRef, defineEmits,
} = useModal();

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  item: Object,
});
const { VITE_API, VITE_PATH } = import.meta.env;
const emits = defineEmits(['del-item']);

const delOrder = () => {
  const url = `${VITE_API}api/${VITE_PATH}/admin/order/${props.item.id}`;
  axios.delete(url).then(() => {
    Swal.fire('己刪除未付款預約訂單');
    hideModal();
    emits('del-item');
  });
};

defineExpose({
  openModal,
  hideModal,
});
</script>
