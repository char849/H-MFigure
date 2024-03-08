<template>
    <div
      id="productModal"
      ref="modalRef"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">主要圖片</label>
                  <input
                    v-model="tempProduct.imageUrl"
                    type="text"
                    class="form-control mb-2"
                    placeholder="請輸入圖片連結"
                  />
                  <!-- 上傳圖片 -->
                  <div class="mb-3">
                    <label for="customFile" class="form-label"
                      >或 上傳圖片
                      <i
                        class="fas fa-spinner fa-spin"
                        v-if="status.fileUploading"
                      ></i>
                    </label>
                    <input
                      type="file"
                      id="customFile"
                      class="form-control"
                      ref="fileInputRef"
                      @change="uploadFile"
                    />
                  </div>
                  <img class="img-fluid" :src="tempProduct.imageUrl" />
                </div>
                <h3 class="mb-3">多圖新增</h3>
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <template
                    v-for="(image, key) in tempProduct.imagesUrl"
                    :key="key"
                  >
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">圖片網址</label>
                      <input
                        v-model="tempProduct.imagesUrl[key]"
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                      />
                    </div>
                    <img class="img-fluid" :src="image" />
                  </template>
                  <div
                    v-if="
                      !tempProduct.imagesUrl.length ||
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                    "
                  >
                    <button
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="tempProduct.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                  </div>

                  <div v-else>
                    <button
                      class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="tempProduct.imagesUrl.pop()"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="createImages"
                  >
                    新增圖片
                  </button>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">課程名稱</label>
                  <input
                    id="title"
                    v-model="tempProduct.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入課程名稱"
                  />
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">課程分類</label>
                    <input
                      id="category"
                      v-model="tempProduct.category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入課程分類"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位</label>
                    <input
                      id="unit"
                      v-model="tempProduct.unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">課程原價</label>
                    <input
                      id="origin_price"
                      v-model.number="tempProduct.origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入課程原價"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">課程售價</label>
                    <input
                      id="price"
                      v-model.number="tempProduct.price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入課程售價"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="level" class="form-label">難易程度</label>
                    <input
                      id="level"
                      v-model="tempProduct.level"
                      type="text"
                      class="form-control"
                      placeholder="請輸入難易程度"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="time" class="form-label">課程時間</label>
                    <input
                      id="time"
                      v-model="tempProduct.time"
                      type="text"
                      class="form-control"
                      placeholder="請輸入課程時間"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="hr" class="form-label">課程時數</label>
                    <input
                      id="hr"
                      v-model="tempProduct.hr"
                      type="text"
                      class="form-control"
                      placeholder="請輸入課程時數"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="people" class="form-label">上課人數</label>
                    <input
                      id="people"
                      v-model="tempProduct.people"
                      type="text"
                      class="form-control"
                      placeholder="請輸入上課人數"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="week" class="form-label">一週天數</label>
                    <input
                      id="week"
                      v-model="tempProduct.week"
                      type="text"
                      class="form-control"
                      placeholder="請輸入一週天數"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="location" class="form-label">上課地點</label>
                    <input
                      id="location"
                      v-model="tempProduct.location"
                      type="text"
                      class="form-control"
                      placeholder="請輸入上課地點"
                    />
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">注意事項</label>
                  <textarea
                    id="description"
                    v-model="tempProduct.description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入注意事項"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    id="content"
                    v-model="tempProduct.content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-dark"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="updateProduct">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup>
import axios from 'axios';
import {
  ref, defineProps, toRefs, defineEmits,
} from 'vue';
import useModal from '@/hooks/useModal';

// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

const { VITE_API, VITE_PATH } = import.meta.env;

const props = defineProps({
  tempProduct: Object,
  isNew: Boolean,
});

// eslint-disable-next-line no-use-before-define
const { tempProduct, isNew } = toRefs(props);

const emits = defineEmits(['get-data']);

const { openModal, hideModal, modalRef } = useModal();

const fileInputRef = ref(null);

const status = ref({});

const updateProduct = () => {
  let url = `${VITE_API}api/${VITE_PATH}/admin/product`;
  let http = 'post';

  if (!isNew.value) {
    url = `${VITE_API}api/${VITE_PATH}/admin/product/${tempProduct.value.id}`;
    http = 'put';
  }
  axios[http](url, { data: tempProduct.value })
    .then((res) => {
      Swal.fire(res.data.message);
      hideModal();
      emits('get-data');
    })
    .catch((err) => {
      Swal.fire(err.response.data.message); // 沒填到必填的欄位需要出現 alert 提示訊息
    });
};

const createImages = () => {
  tempProduct.value.imagesUrl = [''];
  tempProduct.value.imagesUrl.push('');
};

const uploadFile = () => {
  const uploadedFile = fileInputRef.value.files[0];
  const formData = new FormData();
  formData.append('file-to-upload', uploadedFile);
  const url = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/upload`;
  status.value.fileUploading = true;
  axios
    .post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      status.value.fileUploading = false;
      if (res.data.success) {
        tempProduct.value.imageUrl = res.data.imageUrl;
        fileInputRef.value.value = '';
      } else {
        fileInputRef.value.value = '';
      }
    })
    .catch(() => {
      status.value.fileUploading = false;
    });
};

defineExpose({
  openModal,
  hideModal,
});
</script>
