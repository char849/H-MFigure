<template>
  <footer class="position-relative bg-dark rounded-top-5 OBJECTS03">
    <div class="container">
      <div class="row">
        <div class="col-12 d-xl-flex d-lg-flex">
          <div class="col-12 col-xl-10 col-lg-10 pt-7 pb-6 py-xl-8 py-lg-8">
            <div class="ms-3 ms-xl-0 ms-lg-0 ms-md-0 ms-md-9">
                <img
              src="/img/logo_white.png"
              alt="logo white"
              class="mb-5"
              width="300"
            />
            <div class="text-info">
              <p class="mb-2">本網站僅供個人作品使用，不提供商業用途</p>
              <p class="mb-2 d-none d-sm-block">
                Copyright © {{ new Date().getFullYear() }} by 手作模型館. All Rights Reserved.
              </p>
              <p class="mb-2 d-block d-sm-none">
                Copyright © 2020 by 手作模型館. All Rights<br>Reserved.
              </p>
              <div class="d-none d-md-block">
                <div class="d-flex">
                <div class="pe-1"><img src="/img/cog.svg" alt="" /></div>
                <RouterLink to="/login" class="link">後台管理</RouterLink>
              </div>
              </div>
            </div>
            </div>
          </div>
          <div class="col-12 col-xl-2 col-lg-2">
            <div class="mb-7 mt-xl-10 mt-lg-10 text-secondary d-flex ms-3 ms-md-0">
              <a href="https://www.instagram.com/explore/tags/%E6%BC%A2%E6%96%87%E5%B8%9D/" target="_blank"><img src="/img/instagram.svg" alt="instagram" class="me-2" /></a> |
              <a href="https://line.me/ti/p/XYcRD84KAR" target="_blank"><img src="/img/line.svg" alt="instagram"  class="mx-2" /></a> |
              <a href="https://www.facebook.com/search/top?q=%E6%BC%A2%E6%96%87%E5%B8%9D" target="_blank"><img src="/img/facebook.svg" alt="instagram" class="ms-2" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute end-0 box-bg08 d-none d-sm-none d-md-block">
      <img src="/img/Object08.svg" class="Object08 img-fluid" alt="Object08" />
    </div>
  </footer>
</template>
