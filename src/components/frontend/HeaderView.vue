<!-- eslint-disable no-undef -->
<template>
  <header class="position-relative" data-aos="fade-left">
    <div class="container bgImg position-relative">
      <div class="card position-absolute translate-middle rounded-4 mx-auto">
        <div class="card-body mx-2 px-lg-3 px-xl-6">
          <div class="card-title fw-bold text-dark mt-2 mt-md-3 mt-xl-4">
            手作模型實體化製作班
          </div>
          <h4 class="text-secondary mt-3 mb-4 mb-xl-5">
            實體製作 - 由3D列印到手修雕塑上色
          </h4>
          <p class="card-text">
            採用最新的3D列印技術，我們將模型轉換為實體形式。這能夠確保高精度和詳細度，為後續的手修和雕塑提供了堅實的基礎。
          </p>
          <p class="card-text">
            這個全過程的體驗不僅可 以讓參與者深入了解 3D
            列印、手工雕塑和模型上色的過程，還能夠在實踐中體會到手作藝術的樂趣和挑戰。歡迎您參加我們的模型館，一同探索這個豐富的實體製作之旅！
          </p>
          <div class="classBtn">
            <RouterLink
              to="/products"
              type="button"
              class="btn btn-danger rounded-pill my-2 my-md-3 my-xl-5 ps-5 pe-4 py-3"
            >
              立即探索課程
              <img
                src="/img/arrow-right-long.svg"
                class="ps-3"
                alt="arrow-right"
              />
            </RouterLink>
          </div>
        </div>
      </div>
      <img
        src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1707895244621.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=D9RILXl9%2BQzu5JD%2FWgJoJe6mBwlImeYJQzxe27JYeKoNm%2BKcoSX70j1%2FadgGfeOuNzlmbRSu7UbTW2ZJk%2FZN%2BAQerCUVBOsrq1bJ2z749gIt5BH5UhklkApO14MNMhEur3l6sdpXlOO5GZCRy5R7GNZaXElZQ9u%2F3AN7qYa53xCkvFRGVwPvtYlXN0yhHjaILPNQlrDkEnhLPxGrbTFSqMshpdxb14yxZEYB6V4vtPg8qiG9ahFvgWF%2FJbrFCkGgAGM6vxRKgSBvvHFayA6qVHDzeHmJ3mfHFYkhAcsXofAHkkySbttFoYgqdlR7oTA3Ba3OLUswz3mxH8OJDgpMjA%3D%3D"
        alt="bgImgInner"
        class="img-fluid bgImgInner position-absolute"
      />
    </div>
    <button
      class="btn headerBtn position-absolute d-flex flex-column align-items-center text-white"
      type="button"
      @click="moveTo"
    >
      Scroll Down
      <span class="downFill border rounded-pill pt-6 px-3 pb-3">
        <img src="/img/down-long.svg" class="zIndex" alt="down-long" />
      </span>
    </button>
  </header>
  <section ref="intro" class="box-bg01" id="intro" data-aos="fade-up">
    <div class="container">
      <div class="row">
        <div class="col-12 text-dark mt-9">
          <div class="mx-auto text-center OBJECTS">
            <div class="fw-bold title mb-0">製作流程</div>
            <span class="text-info fs-4">Production Process</span>
          </div>
        </div>
        <div class="row g-4 class">
          <div class="col-12 col-xl-4 col-lg-4 mb-6 mb-xl-0">
            <div
              class="box position-relative rounded-5 mx-3 mt-0 mt-xl-7 mt-lg-7 shadow bg-white"
            >
              <span
                class="position-absolute py-2 px-4 top-0 start-50 translate-middle
                 text-white rounded-4 bg-danger"
              >
                STEP1
              </span>
              <div class="fs-3 text-dark fw-medium pt-5 text-center">
                3D建模列印
              </div>
              <div class="text-center">
                <img
                  src="/img/img01.svg"
                  class="w-50 pb-0 pb-xl-3 pt-4 pt-xl-5 pt-lg-5 pt-md"
                  alt="step1"
                />
              </div>
              <p class="card-text py-5 px-5">
                進行3D列印，時間約3~5天不等，3D列印完成後，模型可能還需要進行修飾和打磨，以去除可能存在的層次感，使表面更加平滑。
              </p>
            </div>
          </div>
          <div class="col-12 col-xl-4 col-lg-4">
            <div class="box position-relative rounded-5 shadow mx-3 bg-primary">
              <span
                class="position-absolute py-2 px-4 top-0 start-50 translate-middle
                 text-white rounded-4 bg-danger"
              >
                STEP2
              </span>
              <div class="fs-3 text-dark pt-5 fw-medium text-center">
                純手工上色
              </div>
              <div class="text-center">
                <img
                  src="/img/img02.svg"
                  class="w-50 pb-0 pb-xl-3 pt-4 pt-xl-5 pt-lg-5 pt-md"
                  alt="step1"
                />
              </div>
              <p class="card-text py-5 px-5">
                進行角色適合的風格配色作業，此階段時間為一個月或以上的上課時間，講師將根據設計的需要，仔細塗抹各種細節。這可能包括陰影、亮點和其他色彩層次，以使模型更具立體感。
              </p>
            </div>
          </div>
          <div class="col-12 col-xl-4 col-lg-4">
            <div
              class="box position-relative rounded-5 mx-3 mt-6 mt-xl-7
               mt-lg-7 shadow me-0 me-md-3 bg-white"
            >
              <span
                class="position-absolute py-2 px-4 top-0 start-50
                 translate-middle text-white rounded-4 bg-danger"
              >
                STEP3
              </span>
              <div class="fs-3 text-dark pt-5 fw-medium text-center">
                實體完成
              </div>
              <div class="text-center">
                <img
                  src="/img/img03.svg"
                  class="w-50 pb-0 pb-xl-3 pt-4 pt-xl-5 pt-lg-5 pt-md"
                  alt="step1"
                />
              </div>
              <p class="card-text py-5 px-5">
                最後，進行任何必要的修飾，確保整個模型呈現出理想中的效果。這也可能包括防護層的施加，以保護模型表面。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <img src="/img/Object02.svg" class="box-bg02 pb-6" alt="Object02" />
    </div>
  </section>
  <section class="position-relative box-bg03 pb-m">
    <div class="container">
      <div class="row">
        <div class="col-12 text-dark mt-4 mt-xl-9">
          <div class="mx-auto text-center OBJECTS">
            <div class="fw-bold mb-0 title">環境介紹</div>
            <span class="text-info fs-4">Environmental Overview</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xl-5 col-lg-5" data-aos="fade-left">
          <div
            class="d-xl-flex d-lg-flex d-md-flex class02 mx-3 mx-xl-0 mx-lg-0"
          >
            <div class="me-2 mt-1">
              <img src="/img/people-roof.svg" width="28" alt="people-roof" />
            </div>
            <div
              class="mt-2 mt-xl-0 mt-lg-0 mt-md-0 fs-3 ms-1 fw-medium text-dark"
            >
              教學工作室
              <p class="fs-6 fw-normal mt-2">
                手作模型館擁有專業的教學工作室，配備先進的工具和設備，提供參與者一
                個舒適而安全的學習環境。在這裡，我們舉辦各式各樣的課程，從初學者到進階者，滿足不同程度愛好者的需求。
              </p>
            </div>
          </div>
          <hr class="line" />
          <div class="d-xl-flex d-lg-flex d-md-flex mt-4 mx-2 mx-xl-0 mx-lg-0">
            <div class="me-2 mt-1">
              <img
                src="/img/chalkboard-user.svg"
                width="28"
                alt="chalkboard-user"
              />
            </div>
            <div
              class="mt-2 mt-xl-0 mt-lg-0 mt-md-0 fs-3 ms-1 fw-medium text-dark"
            >
              專業導師
              <p class="fs-6 fw-normal mt-2">
                經驗豐富的專業的模型製作藝術家擔任導師，
                他們將與學員分享獨特的技術、實用的技巧，並提供即時的指導和建議。
              </p>
            </div>
          </div>
          <div
            class="classBtn02 mb-6 ms-3 ms-xl-0 ms-lg-0 mt-md-4 mt-xl-0 mt-lg-0"
          >
            <RouterLink
              to="/products"
              type="button"
              class="btn btn-danger rounded-pill my-2 my-md-3 my-xl-5 ps-6 pe-5 py-3"
            >
              立即了解
              <img
                src="/img/arrow-right-long.svg"
                class="ps-3"
                alt="arrow-right"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute bottom-0 end-0 box02" data-aos="fade-right">
      <img
        src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1708078812910.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WDqRBe%2Fc8RQizFpMlpxxvQx1onemZjulQhFClO8n%2F7DBsyoEDJ7m9X5jrRXHQsetHeuXLbeB3ZHuzxnxpoaoxrtLC4y97yOVKV67KgUZ6OMH2TtEvf1xAwVS0Oem68ef19088KssynM0bgwXDn2FkKfuZeEhZP8xaUbJN0kl4tzcuCdivsYBvc5ZZkhv%2BvlZ92korkeFe2ABRctH9n1ko%2BHlS5YNF%2FeSNLs1x2qUCIRbAr%2Bsz1VOcHzyvdcqVsYqEItvmq4hRP326Lcv44ryWAHB42CMY6hi1yeS058tvtVeBP4ssnzJ53lBvL8oTY9Q7QYvdJgD%2FBeQ%2FZc3xjwVrA%3D%3D"
        alt="img"
        class="img-fluid"
      />
    </div>
    <div class="position-absolute top-100 translate-middle box03">
      <img
        src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1708079856450.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=khdvT%2BMv3vX2o9LxtAgnz0tOiDkMsFqr%2Fo0YuKYN06rBLtdd5AuIW%2BSIMyr0l1GYgLJQnS3466gvYlN2Twe0KIxB39c6XUViQyCC%2F9glgNsFKZrmvvsgLib1a2OlwVmYMXt8kU7qB0F72X57gvASn3EYENTMFF6ThThd9KrhOBhevX2uYmLI03PzIqAJPyNfopGmSaZ2mZw7ziyVcVhGNQC%2BCJidnhahXK6ONBZUmG7cGSajTQlWz9zNyivMztP0sThYSb1h00Bg9mPAKjCRYXdj4UMCjm%2BlrP7HBlECxyc6NyMwsGa09rjeUDUX2qWIcLoHtiAg0mRFfIhTWRkWng%3D%3D"
        alt="img02"
        class="img-fluid"
        data-aos="fade-right"
      />
    </div>
    <div class="d-flex justify-content-start">
      <img src="/img/Object04.svg" class="box-bg04 pb-6" alt="Object04" />
    </div>
    <div
      class="position-absolute bg-success top-0 start-0 w-100 h-100 opacity-25 z-n1"
    ></div>
  </section>
  <section class="position-relative box-bg05">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-6 col-lg-6"></div>
        <div
          class="col-12 col-xl-6 col-lg-6 d-xl-flex d-lg-flex z-3 box04 position-relative"
          data-aos="fade-right"
        >
          <div class="rounded-5 bg-white shadow mx-3 px-4 py-6 me-xl-3 me-lg-3">
            <div class="me-2 mt-1">
              <img src="/img/pen-ruler.svg" width="28" alt="pen-ruler" />
            </div>
            <div class="fs-3 mt-2 ms-1 fw-medium text-dark">
              實際製作體驗
              <p class="fs-6 fw-normal mt-2">
                課程不僅僅停留在理論層面，我
                們強調實際動手製作的重要性。每堂課都設有實作環節，讓學員親自動手，從實際操作中學習到更深層次的技能。
              </p>
            </div>
          </div>
          <div
            class="rounded-5 bg-white shadow mx-3 px-4 py-6 mt-4 mb-4
             mb-xl-0 mb-lg-0 mt-xl-0 mt-lg-0"
          >
            <div class="me-2 mt-1">
              <img src="/img/screen-users.svg" width="28" alt="screen-users" />
            </div>
            <div class="fs-3 mt-2 ms-1 fw-medium text-dark">
              小班制教學
              <p class="fs-6 fw-normal mt-2">
                為了確保每位學員都能得到充
                分的關注和指導，我們實行小班制教學，1人就可上課。這種教學方式有助於建立更緊密的師生關係，提供更個性化的學習體驗。
              </p>
            </div>
          </div>
          <div class="position-absolute box05">
            <div class="classBtn mb-7">
              <RouterLink
                to="/products"
                type="button"
                class="btn btn-danger rounded-pill my-2 my-md-3 my-xl-5 ps-6 pe-5 py-3"
              >
                立即了解
                <img
                  src="/img/arrow-right-long.svg"
                  class="ps-3"
                  alt="arrow-right"
                />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute start-0 bottom-0 z-0 box-bg06"  data-aos="fade-left">
      <img
        src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-lee849/1708100545759.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=U8NiaqiGtIDhWAKovvHT3gQouMGl9pTovyDJQ%2F8m4zGn%2Fze1vmCXA5y9A82GwaXGEcm2V6CALCzF%2FbdlDEg1pnpGGQFV11gGNyQASYXsFSUuV0slTrzj%2F5dDXoQR26MwgbdSKAGajNcT3T4nq9dYjJq0DEORGwafUYNpWJYg3IiBRJgUHmW9jcouzQy4xfRvXwyw2qCkHHTV68rcgjeCmAHBVdS%2BwHyPF1l7xQ1SIqqD8FytA7%2Bqvef9v0zDDtCvlahveggu6EwBKQSaWtEKO66zMFR23vzr26U5e3IZvjDhM47O439%2BRuyadCFfTWHI1sKWEofbE4kE6Ub1SFjjrg%3D%3D"
        alt="box-bg06"
        class="img-fluid"
      />
    </div>
  </section>
  <section>
    <div class="OBJECTS02">
      <div class="container">
        <div class="row">
          <div class="col-12 text-dark mt-7">
            <div class="">
              <div class="fw-bold title mt-5 mb-2 d-none d-md-block d-lg-block d-xl-block">
                展覽資訊
                <span class="text-info fw-normal fs-5"
                  >踏入藝術的奇幻世界，展覽資訊一手掌握</span
                >
              </div>
              <div class="fw-bold title mt-5 mb-2 d-block d-md-none d-xl-none d-lg-none">
                展覽資訊
              <div class="text-info fw-normal fs-5
                 d-md-none">踏入藝術的奇幻世界，展覽資訊一手掌握</div>
              </div>
              <span class="text-info fs-4">Exhibition Information</span>
            </div>
          </div>
          <div class="row g-5 pb-5 pb-md-4 pb-lg-4 pb-xl-4" data-aos="fade-up">
            <template v-for="(article, index) in articles" :key="article.id">
              <div
              v-if="index < 3"
              class="col-12 col-xl-4 col-lg-4 mx-2 mx-xl-0 mx-lg-0 mx-md-0"
            >
              <div class="card02 rounded-5 shadow bg-white">
                <img
                :src="article.image"
                  class="rounded-top-5 w-100 object-fit-cover"
                  alt="img04"
                  height="280"
                />
                <div class="card-body position-relative">
                  <h4 class="card-title pt-5 px-4">【{{ article.title }}】</h4>
                  <p class="card-text text-info px-5 pt-2">
                    {{ article.short }}
                  </p>
                  <div class="pb-7 pb-md-5 pb-lg-5 pb-xl-5 pt-2 d-flex">
                    <span class="fs-6 fs-lg-5 fs-xl-5 fs-md-5 text-secondary"
                      ><img
                        src="/img/calendar.svg"
                        alt="calendar"
                        class="ms-5 pb-xl-2 pb- pe-2"
                      />{{ article.date }}</span
                    >
                    <div class="classBtn03 position-absolute">
                      <RouterLink
                        to="/information"
                        type="button"
                        class="btn btn-danger rounded-pill ps-6 pe-4 py-2 w-100"
                      >
                        View More
                        <img
                          src="/img/arrow-right-long.svg"
                          class="ps-3 pb-1"
                          alt="arrow-right"
                        />
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 d-flex position-relative">
      <div class="d-flex justify-content-start" data-aos="fade-left">
      <img src="/img/Object06.svg" class="box-bg07 pb-5" alt="Object06" />
    </div>
    <div class="d-flex ms-auto justify-content-end" data-aos="fade-right">
      <img src="/img/Object07.svg" class="box-bg07 pb-5" alt="Object07" />
    </div>
    <div
            class="position-absolute infoBtn top-0"
          >
            <RouterLink
              to="/information"
              type="button"
              class="btn btn-warning rounded-pill my-2 my-lg-5 my-md-4 my-xl-5 py-3
               px-8 text-dark"
            >
            更多展覽資訊
            </RouterLink>
          </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const { VITE_API, VITE_PATH } = import.meta.env;

const intro = ref(null);
const articles = ref([]);

const getArticles = () => {
  const api = `${VITE_API}api/${VITE_PATH}/articles`;
  axios.get(api).then((res) => {
    articles.value = res.data.articles;
  });
};

const moveTo = () => {
  if (intro.value) {
    window.scrollTo({
      top: intro.value.offsetTop,
      behavior: 'smooth', // 可以使滾動過程平滑
    });
  }
};

onMounted(() => {
  intro.value = document.querySelector('#intro');
  getArticles();
});
</script>
