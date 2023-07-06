<template>
  <div>
    <h2 class="header-title">{{ title }}</h2>
    <div class="experience_slide">
      <swiper
        :slidesPerView="3"
        :spaceBetween="20"
        :slidesPerGroup="3"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :navigation="{
          prevEl: '.experience-button-prev',
          nextEl: '.experience-button-next',
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in listImage" :key="index">
          <div class="hover-up-item">
            <item-trip :data="item"></item-trip>
          </div>
        </swiper-slide>
      </swiper>
      <div class="experience-btn">
        <a class="experience-button-prev">
          <i class="far fa-chevron-left"></i>
        </a>
        <a class="experience-button-next"
          ><i class="far fa-chevron-right"></i
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import ItemTrip from "@/components/ItemTrip/ItemTrip.vue";
import { ref } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    ItemTrip,
  },
  props: {
    title: { type: String },
  },
  setup() {
    const listImage = ref([
      {
        img: "http://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_746,h_600,c_fill/v1676519974/lrpgwr7lgzdbqd0fi6gj.webp",
        title: "Chốt Gấp Kèo Sing - Thái",
        sub_title: "Deal du lịch HOT nhất Singapore & Thái Lan",
      },
      {
        img: "http://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_746,h_600,c_fill/v1681982083/jkw7pj15jecmnro3d7mb.webp",
        title: "Hè Rồi Đi Thôi!",
        sub_title:
          "Gợi ý du lịch mùa hè hấp dẫn trên TC. Từ Việt Nam vươn ra Thế Giới.",
      },
      {
        img: "http://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_746,h_600,c_fill/v1667463123/ynzixodlfqheqraktwvr.webp",
        title: "Càng Mua Càng Hời",
        sub_title: "Ưu đãi hấp dẫn. Càng mua nhiều - càng thêm lợi.",
      },
      {
        img: "http://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_746,h_600,c_fill/v1676519974/lrpgwr7lgzdbqd0fi6gj.webp",
        title: "Càng Mua Càng Hời",
        sub_title: "Ưu đãi hấp dẫn. Càng mua nhiều - càng thêm lợi.",
      },
      {
        img: "http://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_746,h_600,c_fill/v1676519974/lrpgwr7lgzdbqd0fi6gj.webp",
        title: "Càng Mua Càng Hời",
        sub_title: "Ưu đãi hấp dẫn. Càng mua nhiều - càng thêm lợi.",
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
.experience_slide {
  padding: 15px 0;
  height: 370px;
  position: relative;
}
.experience-btn {
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
.experience-button-prev:hover,
.experience-button-next:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08);
}
.experience-btn i {
  font-size: 16px;
}
.experience-button-prev,
.experience-button-next {
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
