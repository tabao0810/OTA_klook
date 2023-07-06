<template>
  <div class="layout-default_header_top">
    <nav>
      <div class="header-left">
        <div class="header-logo">
          <img
            src="https://travelconnect.vn/wp-content/uploads/2022/02/logo-beta.png"
            alt=""
          />
        </div>
        <div class="header-search-box">
          <input
            type="text"
            placeholder="Tìm theo điểm đến, hoạt động"
            class="search-box_input"
            ref="search_input"
          />
          <button
            type="button"
            class="search-box_btn-search"
            @click="AutoFocus"
          >
            <i class="far fa-search"></i>
          </button>
        </div>
      </div>
      <div class="header-right">
        <ul>
          <li>
            <a href="">Mở ứng dụng</a>
          </li>
          <li>
            <a href="">Trợ giúp</a>
          </li>
          <li>
            <a href="">Xem gần đây</a>
          </li>
          <li>
            <a href="">Đăng ký</a>
          </li>
        </ul>
        <div class="btn_login">Đăng nhập</div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.layout-default_header_top {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  margin: 0 auto;
}
.layout-default_header_top {
  height: 60px;
  display: flex;
  align-items: center;
}
.layout-default_header_top nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--width-container);
  margin: 0 auto;
}
.header-logo > img {
  width: 115px;
  height: 32px;
}
.header-left {
  display: flex;
  align-items: center;
}
.header-search-box {
  margin-left: 16px;
  margin-right: 24px;
  height: 40px;
  position: relative;
  transition: all 0.25s ease-in-out;
}
.search-box_input {
  background-color: #f5f5f5;
  border: 1px solid #fff;
  border-radius: 99rem;
  caret-color: var(--color-primary);
  color: #212121;
  font-size: 14px;
  height: 100%;
  overflow: hidden;
  padding-left: 38px;
  padding-right: 12px;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  outline: none;
}
.search-box_btn-search {
  align-items: center;
  background: 0 0;
  border: none;
  color: #757575;
  cursor: pointer;
  display: flex;
  height: 40px;
  left: 0;
  margin-left: 14px;
  outline: 0;
  padding: 0;
  position: absolute;
  top: 0;
}
.search-box_input:focus,
.search-box_input:hover {
  background: #fff;
  border: 1px solid var(--color-primary);
  outline-style: none;
}
.header-right {
  display: flex;
  align-items: center;
}
.btn_login {
  background-color: var(--color-primary);
  border-radius: 99rem;
  padding: 12px;
  color: #fff;
  margin-left: 12px;
  white-space: nowrap;
}
.header-right > ul {
  display: flex;
}
.header-right > ul li {
  padding: 12px;
  white-space: nowrap;
}
.header-right a {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  text-decoration: none;
}
.header-right ul li:hover {
  background-color: #f5f5f5;
  border-radius: 99rem;
}
</style>
<style scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
