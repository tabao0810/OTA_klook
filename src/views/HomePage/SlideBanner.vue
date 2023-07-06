<template>
  <div class="main_slide">
    <swiper
      :slidesPerView="1"
      :spaceBetween="20"
      :slidesPerGroup="1"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :navigation="{
        nextEl: '.main-button-next',
        prevEl: '.main-button-prev',
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in listImage" :key="index">
        <img :src="item.img" alt="" class="main_slide_img" />
      </swiper-slide>
    </swiper>
    <div class="main-btn">
      <a class="main-button-prev"> <i class="fal fa-chevron-left"></i> </a>
      <div class="main-banner-title">
        <h1>THẾ GIỚI TRỌN NIỀM VUI</h1>
        <h2>
          Từ chuyến phượt "ngẫu hứng" đến những cuộc phiêu lưu, khám phá công
          thức niềm vui của riêng bạn
        </h2>
        <div class="banner-search">
          <span>
            <i class="far fa-search banner-search_icon"></i>
          </span>
          <div style="flex: 1; position: relative">
            <input
              id="banner-search"
              type="text"
              placeholder="Tìm theo điểm đến, hoạt động"
              class="banner-search-input"
            />
          </div>
          <div class="home-page-search-button">
            <span> Tìm kiếm </span>
          </div>
          <div class="search-box_popover" style="display: none"></div>
        </div>
      </div>
      <a class="main-button-next"><i class="fal fa-chevron-right"></i></a>
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
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577664/banner/rtw7fgqatgoc1vpcpamb.webp",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577678/banner/tvhfgpkiapfldzoaj8ll.webp",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577664/banner/rtw7fgqatgoc1vpcpamb.webp",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577664/banner/rtw7fgqatgoc1vpcpamb.webp",
      },
    ]);
    return {
      modules: [Navigation, Autoplay],
      listImage,
    };
  },
};
</script>

<style scope>
.main_slide {
  height: 480px;
  position: relative;
}
.main_slide_img {
  object-position: 50%;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.main-btn {
  position: absolute;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}
.main-button-prev,
.main-button-next {
  font-size: 36px;
  cursor: pointer;
}
.main-button-prev {
  margin-left: 28px;
}
.main-button-next {
  margin-right: 28px;
}
.main-banner-title h1 {
  font-size: 60px;
  font-weight: 600;
  line-height: 1.32;
  margin-bottom: 2px;
  min-width: 750px;
}
.main-banner-title h2 {
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  margin: 0 0 20px;
}
.banner-search {
  align-items: center;
  background: #fff;
  border: 1px solid transparent;
  border-radius: 12px;
  color: #212121;
  display: flex;
  height: 56px;
  padding: 0 3px 0 16px;
  position: relative;
  width: 800px;
  z-index: 5;
}
.banner-search:hover {
  border: 1px solid var(--color-primary);
}
.banner-search_icon {
  flex: 0 0 24px;
  margin-right: 8px;
  font-size: 20px;
}
.banner-search-input {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 6px;
  box-sizing: border-box;
  caret-color: var(--color-primary);
  color: #212121;
  font-size: 16px;
  font-size: 18px;
  font-weight: 400;
  height: 54px;
  line-height: 1.5;
  overflow: hidden;
  padding: 15px 0;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  z-index: 400;
  outline: none;
}
.home-page-search-button {
  align-items: center;
  background: var(--color-primary);
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex: none;
  font-size: 16px;
  font-weight: 500;
  height: 48px;
  line-height: 1.5;
  margin-left: 16px;
  padding: 0 40px;
}
</style>
