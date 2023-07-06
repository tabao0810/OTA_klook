<template>
  <div>
    <slide-banner></slide-banner>
    <div class="container">
      <!-- Ưu đãi hấp dẫn -->
      <preferential-view></preferential-view>
      <!-- Giới thiệu -->
      <div title="introduce">
        <h2 class="header-title">Vì sao bạn nên chọn TC</h2>
        <div class="list_introduce">
          <div class="introduce_card">
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_112,h_112/v1663655841/ued/platform/Discover_the_possibilities.webp"
              alt=""
            />
            <h3>Nhiều lựa chọn</h3>
            <p>
              Tìm kiếm niềm vui của bạn với gần nửa triệu điểm tham quan, khách
              sạn và hơn thế nữa.
            </p>
          </div>
          <div class="introduce_card">
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_112,h_112/v1663655837/ued/platform/Enjoy_deals_delights.webp"
              alt=""
            />
            <h3>Ưu đãi giá tốt</h3>
            <p>
              Dịch vụ hàng đầu. Giá tốt. Và nhận Klook credit để được giảm giá
              cho đơn hàng tiếp theo.
            </p>
          </div>
          <div class="introduce_card">
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_112,h_112/v1663655837/ued/platform/Exploring_made_easy.webp"
              alt=""
            />
            <h3>Dễ dàng khám phá</h3>
            <p>
              Đặt hàng phút chót, bỏ qua hàng chờ và được miễn phí hủy để tận
              hưởng trọn vẹn.
            </p>
          </div>
          <div class="introduce_card">
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_112,h_112/v1663655837/ued/platform/Travel_you_can_trust.webp"
              alt=""
            />
            <h3>Đáng tin cậy</h3>
            <p>
              Đọc đánh giá chân thực và được hỗ trợ tận tình. Chúng tôi sẽ phục
              vụ bạn từng bước.
            </p>
          </div>
        </div>
      </div>
      <!-- Các dịch vụ nổi bật -->
      <service-view :title="'Các dịch vụ nổi bật'"></service-view>
      <!-- Hot tại TC -->
      <hot-view :title="'Hot nhất tại TC'"></hot-view>
      <!-- Trải nghiệm người dùng -->
      <experience-view
        :title="'Trải nghiệm hấp dẫn cho mọi người'"
      ></experience-view>
      <!-- Tìm kiếm đia điểm -->
      <search-view></search-view>
      <!-- Khám phá -->
      <discover-view></discover-view>
    </div>
  </div>
</template>

<script>
import SlideBanner from "./SlideBanner.vue";
import PreferentialView from "./PreferentialView.vue";
import ServiceView from "./ServiceView.vue";
import HotView from "./HotView.vue";
import ExperienceView from "./ExperienceView.vue";
import SearchView from "./SearchView.vue";
import DiscoverView from "./DiscoverView.vue";
export default {
  components: {
    SlideBanner,
    PreferentialView,
    ServiceView,
    HotView,
    ExperienceView,
    SearchView,
    DiscoverView,
  },
};
</script>

<style>
.list_introduce {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.introduce_card img {
  height: 56px;
  width: 56px;
}
.introduce_card h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.32;
  margin-top: 15px;
}
.introduce_card p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 8px;
}
</style>
