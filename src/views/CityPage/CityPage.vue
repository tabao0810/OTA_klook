<template>
  <div class="content">
    <infor-city></infor-city>
    <div class="cityBusiness">
      <div class="menu_list">
        <div class="menu_item">
          <a href="" class="menu_link"
            ><img
              src="https://res.klook.com/image/upload/v1639126242/brand%20refresh%20category%20icon/desktop/category_36_experiences_l1_attractions.png"
              alt=""
              class="menu_icon"
            />
            <p class="menu_name">Điểm tham quan</p></a
          >
        </div>
        <div class="menu_item">
          <a href="" class="menu_link"
            ><img
              src="https://res.klook.com/image/upload/v1639126247/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_tours_sightseeing.png"
              alt=""
              class="menu_icon"
            />
            <p class="menu_name">Tour</p></a
          >
        </div>
        <div class="menu_item">
          <a href="" class="menu_link"
            ><img
              src="https://res.klook.com/image/upload/v1639126252/brand%20refresh%20category%20icon/desktop/category_36_stays_l1_hotels_more.png"
              alt=""
              class="menu_icon"
            />
            <p class="menu_name">Khách sạn</p></a
          >
        </div>
        <div class="menu_item">
          <a href="" class="menu_link"
            ><img
              src="https://res.klook.com/image/upload/v1655433899/ued/platform/2022%20klook%20icon_categories/mweb/category_36_transport_l1_car_rentals.png"
              alt=""
              class="menu_icon"
            />
            <p class="menu_name">Thuê xe</p></a
          >
        </div>
        <div class="menu_item">
          <a href="" class="menu_link"
            ><img
              src="https://res.klook.com/image/upload/v1658979495/ued/platform/2022%20klook%20icon_categories/mweb/category_108_car_charter.png"
              alt=""
              class="menu_icon"
            />
            <p class="menu_name">Thuê xe có tài xế</p></a
          >
        </div>
        <div class="menu_item">
          <a href="" class="menu_link"
            ><img
              src="https://res.klook.com/image/upload/v1639126242/brand%20refresh%20category%20icon/desktop/category_36_experiences_l1_attractions.png"
              alt=""
              class="menu_icon"
            />
            <p class="menu_name">Điểm tham quan</p></a
          >
        </div>
      </div>
    </div>
    <service-view :title="'Hà Nội có gì chơi ?'"></service-view>
    <hot-view :title="'Hoạt Động Du Lịch Hà Nội Dành Cho Bạn'"></hot-view>
    <experience-view :title="'Trải nghiệm hấp dẫn ở Hà Nội'"></experience-view>
  </div>
</template>

<script>
import InforCity from "./InforCity.vue";
import ServiceView from "../HomePage/ServiceView.vue";
import HotView from "../HomePage/HotView.vue";
import ExperienceView from "../HomePage/ExperienceView.vue";
export default {
  components: {
    InforCity,
    ServiceView,
    HotView,
    ExperienceView,
  },
};
</script>
<style scoped>
.cityBusiness {
  padding-top: 48px;
}
.menu_list {
  display: flex;
  flex-wrap: nowrap;
}
.menu_item {
  flex: 1;
  flex-shrink: 0;
  max-width: 570px;
  margin-left: 20px;
}
.menu_item:first-child {
  margin-left: 0;
}
.menu_link {
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  display: block;
  height: 100%;
  padding: 14px 12px;
  text-align: center;
  transition: all linear 0.2s;
}
.menu_link:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}
.menu_icon {
  height: 40px;
  margin-right: 0;
  width: 40px;
}
.menu_name {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #212121;
  display: -webkit-box;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 4px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
