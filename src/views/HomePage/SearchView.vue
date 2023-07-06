<template>
  <div>
    <h2 class="header-title">Tìm kiếm niềm vui của bạn</h2>
    <div class="search_slide">
      <swiper
        :slidesPerView="6"
        :spaceBetween="20"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :navigation="{
          prevEl: '.search-button-prev',
          nextEl: '.search-button-next',
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in listImage" :key="index">
          <div
            class="search_slide_card"
            :style="`background-image: url(${item.img})`"
            @click="this.$router.push('/city')"
          >
            <div class="search_slide_card_title">
              <div>
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="search-btn">
        <a class="search-button-prev">
          <i class="far fa-chevron-left"></i>
        </a>
        <a class="search-button-next"><i class="far fa-chevron-right"></i></a>
      </div>
    </div>
    <div class="see_more">
      <a class="see_more_link" href=""
        ><button
          type="button"
          class="see_more_button"
          @click.prevent="handleOpen"
        >
          <span> Xem thêm </span>
        </button></a
      >
    </div>
    <teleport to="#app">
      <modal-view :isOpen="isOpenModal" :handleCloseModal="handleCloseModal">
        <h2>jdhf</h2>
      </modal-view>
    </teleport>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import { ref } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const isOpenModal = ref(false);
    const listImage = ref([
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/rxqumcihtzatvhcnbedi.webp",
        title: "Đà Nẵng",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp",
        title: "TP Hồ Chí Minh",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/whbrpalg9f77bskz34ow.webp",
        title: "Bangkok",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/ysnkhkzabobjbg72x3sz.webp",
        title: "Hà Nội",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/fdopxuk1tinxvtylpax8.webp",
        title: "Phú Quốc",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/rxqumcihtzatvhcnbedi.webp",
        title: "Đà Nẵng",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp",
        title: "TP Hồ Chí Minh",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/whbrpalg9f77bskz34ow.webp",
        title: "Bangkok",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/ysnkhkzabobjbg72x3sz.webp",
        title: "Hà Nội",
      },
    ]);
    const handleOpen = () => {
      isOpenModal.value = true;
    };
    const handleCloseModal = () => {
      isOpenModal.value = false;
    };
    return {
      modules: [Navigation, Autoplay],
      listImage,
      isOpenModal,
      handleOpen,
      handleCloseModal,
    };
  },
};
</script>

<style>
.search_slide {
  padding: 15px 0;
  position: relative;
}

.search_slide_card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgb(233, 233, 233);
  border-radius: 8px;
  width: 100%;
  padding: 0px 0px 133.333%;
  margin: 0px;
}
.search_slide_card_title {
  text-align: left;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0px 20px;
  margin: 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}
.search_slide_card_title div {
  width: 100%;
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  margin-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.search_slide_card_title span {
  display: -webkit-box;
  font-size: 20px;
  line-height: 26px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  max-height: 78px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-box-align: start;
  -webkit-line-clamp: 3;
}

.search-btn {
  width: 108%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
  position: absolute;
  right: -4%;
}
.search-btn i {
  font-size: 16px;
}
.search-button-prev,
.search-button-next {
  width: 32px;
  height: 32px;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.see_more {
  margin-top: 32px;
  text-align: center;
}
.see_more_button {
  background-color: transparent;
  min-width: 320px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  padding: 7px 16px;
}
</style>
