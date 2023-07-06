<template>
  <div>
    <h2 class="header-title">{{ title }}</h2>
    <div class="hot_slide">
      <swiper
        :slidesPerView="3"
        :spaceBetween="20"
        :slidesPerGroup="3"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :navigation="{
          prevEl: '.hot-button-prev',
          nextEl: '.hot-button-next',
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in listImage" :key="index">
          <div class="hover-up-item">
            <div class="hot_slide_card">
              <div class="hot_card_title">
                <span>
                  {{ item.title }}
                </span>
              </div>
              <div>
                <div
                  v-for="(itm, ind) in item.list_place"
                  :key="ind"
                  class="hot_slide_card_info"
                >
                  <div class="hot_slide_card_info_img">
                    <img :src="itm.img" alt="" />
                    <span>{{ ind + 1 }}</span>
                  </div>
                  <div class="hot_slide_card_info_sub_title">
                    <h3>{{ itm.title }}</h3>
                    <p>{{ itm.sub_title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="hot-btn">
        <a class="hot-button-prev">
          <i class="far fa-chevron-left"></i>
        </a>
        <a class="hot-button-next"><i class="far fa-chevron-right"></i></a>
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
  props: {
    title: {
      type: String,
    },
  },
  setup() {
    const listImage = ref([
      {
        title: "Hoạt Động Du Lịch Bali Bán Chạy",
        list_place: [
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/dbfqj4uvw8vkimrdrevj.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/c94zxvwezp62qdvv1vsm.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/sfks9289wwx5nlqa2bwi.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
        ],
      },
      {
        title: "Hoạt Động Du Lịch Hàn Quốc Bán Chạy",
        list_place: [
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/dbfqj4uvw8vkimrdrevj.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/c94zxvwezp62qdvv1vsm.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/sfks9289wwx5nlqa2bwi.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
        ],
      },
      {
        title: "Hoạt Động Du Lịch Nhật Bản Bán Chạy",
        list_place: [
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/dbfqj4uvw8vkimrdrevj.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/c94zxvwezp62qdvv1vsm.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/sfks9289wwx5nlqa2bwi.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
        ],
      },
      {
        title: "Hoạt Động Du Lịch Thái Lan Bán Chạy",
        list_place: [
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/dbfqj4uvw8vkimrdrevj.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/c94zxvwezp62qdvv1vsm.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/sfks9289wwx5nlqa2bwi.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
        ],
      },
      {
        title: "Hoạt Động Du Lịch Thái Lan Bán Chạy",
        list_place: [
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/dbfqj4uvw8vkimrdrevj.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/c94zxvwezp62qdvv1vsm.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
          {
            img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_136,h_136,c_fill/c_fill,w_420,h_260/activities/sfks9289wwx5nlqa2bwi.webp",
            title: "[Trọn Gói] Thuê Xe Có Tài Xế Riêng ở Bali",
            sub_title:
              "Tận hưởng kỳ nghỉ như mơ với các hoạt động du lịch bán chạy nhất ở Klook. Đang có giá ưu đãi cực tốt nhân dịp sinh nhật Klook. ",
          },
        ],
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
.hot_slide {
  position: relative;
}
.hot_slide_card {
  display: flex;
  overflow: hidden;
  cursor: pointer;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  width: 100%;
  padding: 0px 0px 24px;
  margin: 0px;
  border: 1px solid #e0e0e0;
  transition: all linear 0.2s;
}
.hot_card_title {
  text-align: left;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 88px;
  width: 100%;
  padding: 0px 24px;
  background-image: url(https://res.klook.com/image/upload/v1631673080/UED%20Team%EF%BC%88for%20DE%20only%EF%BC%89/Homepage/Ranking/bg_ranking_card.webp);
}
.hot_card_title span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 24px;
  color: rgb(33, 33, 33);
  font-weight: 500;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-box-align: start;
  -webkit-line-clamp: 2;
  border-bottom: 1px solid rgba(255, 87, 34, 0.08);
}
.hot_slide_card_info {
  display: flex;
  overflow: hidden;
  height: 68px;
  width: fit-content;
  padding: 0px;
  margin: 16px 24px 0px;
}
.hot_slide_card_info_img {
  position: relative;
  overflow: hidden;
  background-color: rgb(233, 233, 233);
  border-radius: 8px;
  height: 68px;
  width: 68px;
  flex-shrink: 0;
  padding: 0px;
  margin: 0px;
}
.hot_slide_card_info_img img {
  border-radius: 8px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.hot_slide_card_info_img span {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 22px;
  width: 18px;
  margin: 0;
  padding: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-image: url(https://res.klook.com/image/upload/v1630295313/UED%20Team%EF%BC%88for%20DE%20only%EF%BC%89/Homepage/Ranking/icon_ranking_1.webp);
}
.hot_slide_card_info_sub_title {
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  flex-direction: column;
  height: 68px;
  padding: 0px;
  margin: 0px 0px 0px 12px;
  text-align: left;
}
.hot_slide_card_info_sub_title h3 {
  display: -webkit-box;
  font-size: 14px;
  line-height: 20px;
  color: rgb(33, 33, 33);
  max-height: 40px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-box-align: start;
  -webkit-line-clamp: 2;
}
.hot_slide_card_info_sub_title p {
  display: -webkit-box;
  font-size: 12px;
  line-height: 16px;
  color: rgb(255, 151, 53);
  max-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-box-align: start;
  -webkit-line-clamp: 1;
}
.hot-btn {
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
.hot-btn i {
  font-size: 16px;
}
.hot-button-prev:hover,
.hot-button-next:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08);
}
.hot-button-prev,
.hot-button-next {
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
