<template>
  <div>
    <h2 class="header-title">Khám phá nhiều hơn nữa</h2>
    <div class="discover_card">
      <div class="discover_item hover-up-item">
        <div class="discover_item_img">
          <img
            src="https://res.klook.com/image/upload/v1640179720/veeon5jzqyjccj5m3lkg.webp"
            alt=""
          />
        </div>
        <div class="discover_item_title">
          <h3>Xem blog của TC</h3>
          <p>
            Theo dõi các ý tưởng của Klook về xu hướng du lịch, lịch trình và
            các mẹo đi du lịch
          </p>
        </div>
        <div class="discover_item_btn">
          <button>Xem thêm</button>
        </div>
      </div>
      <div class="discover_item hover-up-item">
        <div class="discover_item_img">
          <img
            src="https://res.klook.com/image/upload/v1640179766/arto4pac628jzdsuu3df.webp"
            alt=""
          />
        </div>
        <div class="discover_item_title">
          <h3>Nhận credits miễn phí</h3>
          <p>
            Tìm hiểu cách nhận giảm giá cho đơn hàng tiếp theo khi đặt hàng và
            để lại đánh giá
          </p>
        </div>
        <div class="discover_item_btn">
          <button>Xem thêm</button>
        </div>
      </div>
      <div class="discover_item hover-up-item">
        <div class="discover_item_img">
          <img
            src="https://res.klook.com/image/upload/v1640179875/ggxmmubhiq9nxkbobcro.webp"
            alt=""
          />
        </div>
        <div class="discover_item_title">
          <h3>Nhận ưu đãi khi mời bạn bè</h3>
          <p>
            Sau khi bạn của bạn đăng ký và hoàn thành đơn hàng đầu tiên, bạn sẽ
            nhận ₫100,000 điểm thưởng
          </p>
        </div>
        <div class="discover_item_btn">
          <button>Xem thêm</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>

<style>
.discover_card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
}
.discover_item {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  margin-top: 20px;
  padding: 20px;
  transition: all 0.2s ease;
  width: 410px;
}
.discover_item_img {
  align-items: center;
  display: flex;
  justify-content: center;
}
.discover_item_img img {
  object-fit: cover;
  height: 166px;
  width: 230px;
}
.discover_item_title h3 {
  -webkit-box-orient: vertical;
  color: #212121;
  display: -webkit-box;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.32;
  margin-top: 23px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
}
.discover_item_title p {
  color: #212121;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 8px;
  text-align: center;
}
.discover_item_btn {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}
.discover_item_btn button {
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  min-width: 72px;
  padding: 7px 16px;
  background-color: transparent;
}
</style>
