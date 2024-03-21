<template>
  <div
    id="delModal"
    ref="modalRef"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
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
          <strong class="text-danger">{{ tempProduct.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-danger"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct">
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
import Swal from 'sweetalert2';

const {
  openModal, hideModal, modalRef, defineEmits,
} = useModal();
const props = defineProps({
  tempProduct: Object,
});
const emits = defineEmits(['get-data']);
const { VITE_API, VITE_PATH } = import.meta.env;
const delProduct = () => {
  const url = `${VITE_API}api/${VITE_PATH}/admin/product/${props.tempProduct.id}`;
  axios.delete(url).then((res) => {
    Swal.fire(res.data.message);
    hideModal();
    emits('get-data');
  });
};
defineExpose({
  openModal,
  hideModal,
});
</script>
