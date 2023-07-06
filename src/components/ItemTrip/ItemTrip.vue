<template>
  <div class="item_slide_card" :style="`background-image: url(${data.img})`">
    <div class="item_slide_card_title">
      <div class="item_slide_card_sub_title">
        <span>{{ data.title }}</span>
      </div>
      <div
        style="
          width: 60%;
          padding-left: 0px;
          padding-top: 0px;
          padding-right: 0px;
          padding-bottom: 0px;
          margin-left: 0px;
          margin-top: 8px;
          margin-right: 0px;
          margin-bottom: 0px;
          color: rgb(255, 255, 255);
        "
      >
        <span>{{ data.sub_title }}</span>
      </div>
    </div>
    <div class="item_see_more">
      <span>Khám phá thêm</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style>
.item_slide_card {
  display: flex;
  overflow: hidden;
  cursor: pointer;
  flex-direction: column;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgb(233, 233, 233);
  border-radius: 8px;
  height: 300px;
  width: 100%;
  padding: 24px 24px 0px;
  margin: 0px;
}
.item_see_more {
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  height: 36px;
  width: fit-content;
  padding: 8px 16px;
  margin: 0px;
}
.item_see_more span {
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
}
.item_slide_card_title {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 216px;
  width: 100%;
  padding: 0px;
  margin: 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  text-align: left;
}
.item_slide_card_sub_title {
  width: 100%;
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  margin-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.item_slide_card_sub_title span {
  display: -webkit-box;
  font-size: 24px;
  line-height: 32px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  max-height: 96px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-box-align: start;
  -webkit-line-clamp: 3;
}
</style>
