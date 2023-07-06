<template>
  <div>
    <h2 class="header-title">{{ title }}</h2>
    <div class="service_slide">
      <swiper
        :slidesPerView="4"
        :spaceBetween="20"
        :slidesPerGroup="4"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :navigation="{
          prevEl: '.service-button-prev',
          nextEl: '.service-button-next',
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in listImage" :key="index">
          <div class="hover-up-item">
            <div class="service_slide_card">
              <img :src="item.img" alt="" class="" />
              <div class="service_slide_card_info">
                <div>
                  <h5>{{ item.subText }}</h5>
                  <h3>{{ item.title }}</h3>
                  <div class="service_review">
                    <p>{{ item.review }}</p>
                  </div>
                  <div class="general-tag">
                    <div v-for="(item, index) in item.tags" :key="index">
                      {{ item }}
                    </div>
                  </div>
                </div>
                <div class="service_price">
                  Từ
                  {{ item.price }}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="service-btn">
        <a class="service-button-prev">
          <i class="far fa-chevron-left"></i>
        </a>
        <a class="service-button-next"><i class="far fa-chevron-right"></i></a>
      </div>
    </div>
    <div class="see_more">
      <a class="see_more_link" href=""
        ><button type="button" class="see_more_button">
          <span> Xem thêm </span>
        </button></a
      >
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
  props: {
    title: {
      type: String,
    },
  },
  setup() {
    const listImage = ref([
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1680598283/banner/vfjuylhz2lksnpuxouyy.webp",
        subText: "Tour • Bangkok",
        title:
          "Tour Tham Quan Công Viên Safari World ở Bangkok kèm Dịch Vụ Đưa Đón Chung và Riêng",
        review: "• 100K+  Đã được đặt",
        tags: ["Bán chạy", "Hoàn tiền dễ dàng"],
        price: "1,000,000đ",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1675744515/banner/v3tvxwvi3tyezmtmknjo.webp",
        subText: "Tour • Bangkok",
        title: "Trải Nghiệm Du Thuyền Chao Phraya Princess ở Bangkok",
        review: "• 100K+  Đã được đặt",
        tags: ["Bán chạy", "Hoàn tiền dễ dàng"],
        price: "1,000,000đ",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1680850346/banner/yfvszlynnchemwtgghuc.webp",
        subText: "Tour • Bangkok",
        title: "Klook Pass Singapore",
        review: "• 100K+  Đã được đặt",
        tags: ["Bán chạy", "Hoàn tiền dễ dàng"],
        price: "1,000,000đ",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1680598283/banner/vfjuylhz2lksnpuxouyy.webp",
        subText: "Tour • Bangkok",
        title:
          "Thuê Xe Riêng Có Tài Xế giữa Bangkok và Pattaya, Ayutthaya, Hua Hin và Khu Vực Khác của TTD",
        review: "• 100K+  Đã được đặt",
        tags: ["Bán chạy", "Hoàn tiền dễ dàng"],
        price: "1,000,000đ",
      },
      {
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1680598283/banner/vfjuylhz2lksnpuxouyy.webp",
        subText: "Tour • Bangkok",
        title:
          "Thuê Xe Riêng Có Tài Xế giữa Bangkok và Pattaya, Ayutthaya, Hua Hin và Khu Vực Khác của TTD",
        review: "• 100K+  Đã được đặt",
        tags: ["Bán chạy", "Hoàn tiền dễ dàng"],
        price: "1,000,000đ",
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
.service_slide {
  padding: 15px 0;
  height: 400px;
  position: relative;
}
.service_slide_card {
  border-radius: 16px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 99;
  overflow: hidden;
  background-color: #ffffff;
  border: solid 1px #e0e0e0;
  display: flex;
  flex-direction: column;
}
.service_slide_card img {
  width: 100%;
  height: auto;
}
.service_slide_card_info {
  width: 100%;
  height: 100%;
  padding: 12px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.service_slide_card_info h5,
.service_review p {
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 4px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: start;
  -webkit-line-clamp: 1;
  color: #757575;
}
.service_slide_card_info h3 {
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 4px;
  overflow: hidden;
  color: #212121;
  word-break: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: start;
  -webkit-line-clamp: 2;
}
.general-tag {
  display: flex;
  align-items: center;
  padding: 2px;
}
.general-tag div {
  background-color: #f5f5f5;
  color: #757575;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  line-height: 1.44;
  padding: 0 8px;
  height: 24px;
  font-size: 14px;
  margin-right: 4px;
}
.service_price {
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  word-break: break-word;
}
.service-btn {
  width: 108%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
  right: -4%;
}
.service-btn i {
  font-size: 16px;
}
.service-button-prev,
.service-button-next {
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
