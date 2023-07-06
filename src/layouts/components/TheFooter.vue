<template>
  <div class="w-default-footer_bottom">
    <div class="w-default-footer_inner">
      <div>
        <div class="w-default-footer_copyright">
          <span>© 2014-2023</span> <span>TC. All Rights Reserved.</span>
        </div>
        <!---->
        <div class="w-default-footer_dathongbao">
          <a href=""
            ><img
              src="https://armyhaus.com/wp-content/uploads/2017/07/dathongbao.png"
              alt=""
          /></a>
        </div>
      </div>
      <div class="w-default-footer_internal-link">
        <div class="w-default-footer_links">
          <span class="w-default-footer_label">VỀ TC</span>
          <ul>
            <li><a href=""> Về chúng tôi </a></li>
            <li><a href=""> TC Blog </a></li>
            <li>
              <a href=""> Cơ hội nghề nghiệp </a>
            </li>
            <li>
              <a href=""> Phiếu quà tặng TC </a>
            </li>
          </ul>
        </div>
        <div class="w-default-footer_links">
          <span class="w-default-footer_label">ĐỐI TÁC</span>
          <ul>
            <li>
              <a href=""> Đăng ký nhà cung cấp </a>
            </li>
            <li>
              <a href=""> Đối tác đăng nhập </a>
            </li>
            <li>
              <a href=""> Đối tác liên kết </a>
            </li>
            <li>
              <a href=""> Chương trình cho người nổi tiếng </a>
            </li>
            <li>
              <a href=""> Chương trình cho đại lý </a>
            </li>
            <li>
              <a href=""> Hợp tác marketing &amp; phân phối </a>
            </li>
          </ul>
        </div>
        <div class="w-default-footer_links">
          <span class="w-default-footer_label">Điều khoản sử dụng</span>
          <ul>
            <li><a href=""> Điều khoản sử dụng </a></li>
            <li><a href=""> Chính sách bảo mật của TC </a></li>
            <li><a href=""> Chính sách Cookie </a></li>
            <li>
              <a href=""> Chương trình thưởng phát hiện lỗi phần mềm </a>
            </li>
            <li>
              <a href=""> Chính sách và quy định </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-default-footer_other">
        <div class="w-default-footer_top">
          <div>
            <div data-spm-module="FooterSubscribe" class="footer_email_wrapper">
              <div class="tips">
                <span
                  >Các deal du lịch giảm giá đến 60% sẽ được gửi đến inbox của
                  bạn
                </span>
                <p>
                  Khi nhấp vào Đăng ký, bạn đồng ý với
                  <a href="">Các Điều Kiện &amp; Điều Khoản</a>
                  và
                  <a href="">Chính Sách Bảo Mật</a>
                  của chúng tôi
                </p>
              </div>
              <div class="input_email">
                <input type="text" placeholder="Nhập email " value="" />
                <button type="button" data-spm-item="SubscribeBtn">
                  Đăng ký
                </button>
                <div class="loading" style="display: none"></div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="w-default-footer_payment">
          <span>KÊNH THANH TOÁN</span>
          <ul>
            <li class="unionpay"></li>
            <li class="alipay"></li>
            <li class="newMaster"></li>
            <li class="jcb"></li>
            <li class="newPaypal"></li>
            <li class="newAE"></li>
            <li class="newVisa"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Foter */
.w-default-footer_bottom {
  border-top: 1px solid #eee;
  padding: 32px 0 11px;
}
.w-default-footer_inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: var(--width-container);
}
.w-default-footer_dathongbao {
  margin-top: 24px;
  margin-bottom: 24px;
}
.w-default-footer_dathongbao img {
  height: 40px;
}
.w-default-footer_internal-link {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
}
.w-default-footer_links .w-default-footer_label {
  color: #212121;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
.w-default-footer_links {
  padding: 0 12px;
}
.w-default-footer_links ul {
  margin-top: 12px;
}
.w-default-footer_links li {
  margin-bottom: 8px;
}
.w-default-footer_links a {
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
}
.w-default-footer_other {
  flex: none;
  width: 270px;
}
.footer_email_wrapper .tips span {
  color: #212121;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
.footer_email_wrapper .tips p {
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 6px;
}
.footer_email_wrapper .tips a {
  color: #757575;
  text-decoration: underline;
}
.footer_email_wrapper .input_email {
  display: flex;
  margin-top: 12px;
  position: relative;
}
.footer_email_wrapper .input_email input {
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px 0 0 8px;
  font-size: 14px;
  height: 42px;
  outline: 0;
  padding: 7px 12px;
  width: 259px;
}
.footer_email_wrapper .input_email button {
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 0 8px 8px 0;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  height: 42px;
  line-height: 1.5;
  outline: none;
  transition: all 0.3s;
  width: 100px;
}
.w-default-footer_payment {
  margin-top: 24px;
}
.w-default-footer_payment span {
  color: #212121;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
</style>
