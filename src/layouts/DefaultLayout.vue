<template>
  <div class="vue-sticky-placeholder" style="padding-top: 116px"></div>
  <header class="layout-default_header">
    <the-header></the-header>
    <sub-header></sub-header>
  </header>
  <div>
    <slot></slot>
  </div>
  <footer>
    <the-footer></the-footer>
  </footer>
</template>

<script>
import { ref } from "vue";
import TheHeader from "./components/TheHeader.vue";
import SubHeader from "./components/SubHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    SubHeader,
    TheFooter,
  },
  setup() {
    const search_input = ref();
    const AutoFocus = () => {
      search_input.value.focus();
    };
    return {
      search_input,
      AutoFocus,
    };
  },
};
</script>

<style>
.layout-default_header {
  position: fixed;
  top: 0px;
  bottom: auto;
  left: 0px;
  width: 100%;
  z-index: 999;
}
.content {
  width: var(--width-container);
  margin: 0 auto;
}
</style>
