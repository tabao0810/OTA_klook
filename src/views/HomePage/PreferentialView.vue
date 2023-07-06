<template>
  <div>
    <h2 class="header-title">Ưu đãi hấp dẫn</h2>
    <div class="preferential_slide">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :slidesPerGroup="3"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :navigation="{
          nextEl: '.preferential-button-next',
          prevEl: '.preferential-button-prev',
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in listImage" :key="index">
          <div class="hover-up-item">
            <div class="preferential_slide_img">
              <img :src="item.img" alt="" class="" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="preferential-btn">
        <a class="preferential-button-prev">
          <i class="far fa-chevron-left"></i>
        </a>
        <a class="preferential-button-next"
          ><i class="far fa-chevron-right"></i
        ></a>
      </div>
    </div>
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
    const listImage = ref([
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1680598283/banner/vfjuylhz2lksnpuxouyy.webp",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1675744515/banner/v3tvxwvi3tyezmtmknjo.webp",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1680850346/banner/yfvszlynnchemwtgghuc.webp",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1680598283/banner/vfjuylhz2lksnpuxouyy.webp",
      },
    ]);
    return {
      modules: [Navigation, Autoplay],
      listImage,
    };
  },
};
</script>

<style>
.preferential_slide {
  padding: 15px 0;
  height: 200px;
  position: relative;
}
.preferential_slide_img {
  border-radius: 12px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all linear 0.2s;
}
.preferential_slide_img img {
  object-fit: cover;
  object-position: 50%;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
.preferential-btn {
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
.preferential-btn i {
  font-size: 16px;
}
.preferential-button-prev,
.preferential-button-next {
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
</style>
