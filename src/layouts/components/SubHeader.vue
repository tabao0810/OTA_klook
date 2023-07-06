<template>
  <div class="layout-default_header_bottom">
    <nav>
      <ul>
        <li>
          <a href=""
            ><span style="padding: 0 4px; font-size: 18px"
              ><i class="far fa-map-marker-alt"></i
            ></span>
            Nơi bạn muốn đến</a
          >
        </li>
        <li><a href="">Tất cả</a></li>
        <li><a href="">Vui chơi & giải trí</a></li>
        <li><a href="">Lưu trú</a></li>
        <li><a href="">Di chuyển</a></li>
        <li><a href="">Thuê xe</a></li>
        <li><a href="">Ẩm thực</a></li>
        <li><a href="">Thêm nhiều khám phá</a></li>
        <li><a href="">Phiếu quà tặng</a></li>
      </ul>
      <div></div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.layout-default_header_bottom {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  margin: 0 auto;
}
.layout-default_header_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  white-space: nowrap;
}
.layout-default_header_bottom ul li {
  display: inline-block;
  padding: 12px;
}
.layout-default_header_bottom ul li a {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
}
.layout-default_header_bottom nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--width-container);
  margin: 0 auto;
}
.layout-default_header_bottom ul li:hover {
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
