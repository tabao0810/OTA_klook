<template>
  <div class="city_header">
    <div class="main_img">
      <img
        src="https://res.klook.com/image/upload/c_crop,w_1126,h_423,x_0,y_43/q_85,w_1808,h_680/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/ur2mrg23d91mex03l4mw.webp"
        alt=""
      />
      <div class="city_info">
        <h2 class="city_name">Đà Nẵng</h2>
        <div class="city_des">
          Khám phá điểm vui chơi, ưu đãi, kinh nghiệm du lịch Đà Nẵng
        </div>
      </div>
      <span class="city_travel" @click="openModalInfo"> Bạn cần biết</span>
    </div>
    <div class="sub_img">
      <div class="sub_img-img">
        <img
          src="https://res.klook.com/image/upload/w_504,h_336,c_fill/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/dqu0vn9xma4uzlrrph8w.webp"
          alt=""
        />
        <span class="sub_img-more"> <span> Thư viện ảnh </span></span>
      </div>
      <div class="sub_img-place">
        <img
          src="https://res.klook.com/image/upload/w_504,h_336,c_fill/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/dqu0vn9xma4uzlrrph8w.webp"
          alt=""
        />
      </div>
    </div>
  </div>
  <teleport to="#app">
    <modal-view :isOpen="isInfo" :handleCloseModal="closeModalInfo">
      <div style="padding: 12px">
        <h2>Vài nét về Đà Nẵng</h2>
        <div
          style="
            font-size: 14px;
            line-height: 1.5;
            word-break: break-word;
            padding: 12px 0;
          "
        >
          Đà Nẵng là thành phố của những cây cầu và được mệnh danh là thành phố
          đáng sống nhất Việt Nam. Nổi tiếng với hình ảnh Cầu Rồng vừa mạnh mẽ
          vừa uy nghiêm, thành phố phố Đà Nẵng được thiên nhiên ưu ái ban tặng
          những bãi biển trong xanh cùng hàng loạt hòn đảo ấn tượng. Du lịch Đà
          Nẵng đang ngày một phát triển, thu hút đông đảo du khách trong nước
          lẫn quốc tế. Bãi biển Mỹ Khê bao la bên cạnh Ngũ Hành Sơn hùng vĩ cùng
          “viên ngọc quý” Bán Đảo Sơn Trà - tất cả những danh lam thắng cảnh này
          đều góp phần mang đến trải nghiệm chân thực cho du khách ghé thăm. Có
          dịp đi du lịch Đà Nẵng tự túc, bạn đừng bỏ lỡ cơ hội khám phá khu du
          lịch Bà Nà Hills nổi tiếng với Cầu Vàng và khung cảnh Châu Âu thu nhỏ
          của Làng Pháp. Ngoài ra, #teamKlook có thể đi tàu ra Cù Lao Chàm để
          ngắm san hô, hít hà hương biển trong lành giữa thiên nhiên hoang sơ,
          chỉ cách biển Cửa Đại 16km. Trong khi đó, Thánh Địa Mỹ Sơn lại là một
          điểm đến đầy hứa hẹn cho những ai yêu thích lịch sử và đam mê khám phá
          văn hoá Chăm Pa. Và còn rất nhiều di tích lịch sử khác như Bảo Tàng
          Chăm Pa, Chùa Linh Ứng hay Đỉnh Bàn Cờ danh tiếng. Có rất nhiều điều
          để trải nghiệm và khám phá ở thành phố Đà Nẵng. Bạn đừng quên dành một
          ngày thư giãn ở Suối Khoáng Nóng Thần Tài để nghỉ ngơi trước khi kết
          thúc chuyến du lịch. Nếu được, hãy lên kế hoạch tham quan thành phố
          này vào dịp festival pháo hoa hàng năm và trải nghiệm một trong những
          sự kiện quốc tế thú vị nhất năm. Ghé thăm Phố Cổ Hội An, bảo tàng úp
          ngược Upside Down World để chụp những bức ảnh tuyệt đẹp cùng bạn bè,
          thẳng tiến chợ đêm thưởng thức đặc sản Đà Nẵng và chiêm ngưỡng vẻ đẹp
          về đêm của thành phố đều là những ý tưởng không tồi đâu đấy. Từ tham
          quan đến mua sắm, nghỉ dưỡng hay thử thách với các trò chơi trên biển,
          Đà Nẵng là địa điểm gói gọn mọi trải nghiệm hàng đầu mà bạn không nên
          bỏ lỡ. Dù vi vu một mình, cùng người yêu, theo nhóm bạn hoặc gia đình
          đông đúc, #teamKlook đều có thể khám phá khía cạnh bất ngờ thú vị về
          thành phố biển đáng yêu này. Klook Vietnam mang đến đa dạng dịch vụ
          hấp dẫn để bạn thoải mái khám phá Đà Nẵng như xe đưa đón riêng, vé
          tham quan, tour du lịch, voucher ăn uống và ưu đãi khách sạn với quy
          trình đặt hàng vô cùng tiện lợi. Cùng Klook Vietnam du lịch Đà Nẵng
          ngay để tận hưởng những ưu đãi độc quyền và chuẩn bị cho một chuyến đi
          tràn đầy niềm vui. Nếu bạn chưa biết chơi gì ở Đà Nẵng, Klook sẽ giúp
          bạn với rất nhiều thông tin và bí kíp du lịch Đà Nẵng hữu ích nữa đấy.
        </div>
      </div>
    </modal-view>
  </teleport>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isInfo = ref(false);
    const openModalInfo = () => {
      isInfo.value = true;
    };
    const closeModalInfo = () => {
      isInfo.value = false;
    };
    return {
      isInfo,
      openModalInfo,
      closeModalInfo,
    };
  },
};
</script>

<style scoped>
.city_header {
  display: flex;
  height: 340px;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
}
.main_img {
  border-radius: 12px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  width: 904px;
  height: 340px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
}
.main_img img {
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.main_img img::before {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3) 0.01%,
    transparent 84%
  );
  border-radius: 16px;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}
.city_info {
  color: #fff;
  max-width: 710px;
  padding: 40px 0 0 50px;
  position: relative;
  z-index: 2;
}
.city_name {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 44px;
  font-weight: 600;
  line-height: 52px;
}
.city_des {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 15px;
}
.city_travel {
  align-items: center;
  background: rgba(0, 0, 0, 0.38);
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 4px 8px;
  position: absolute;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  bottom: 32px;
  left: 50px;
}
.sub_img {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 340px;
  width: 252px;
}
.sub_img-img {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  border-radius: 0 16px 0 0;
  height: 168px;
}
.sub_img-img img {
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
}
.sub_img-place {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 16px 0;
  height: 168px;
}
.sub_img-place img {
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
}
.sub_img-more {
  align-items: center;
  background: rgba(0, 0, 0, 0.38);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 4px 8px;
  position: absolute;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  bottom: 16px;
  right: 16px;
}
.sub_img-more:hover,
.city_travel:hover {
  background: rgba(0, 0, 0, 0.6);
}
</style>
