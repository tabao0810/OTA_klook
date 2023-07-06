<template>
  <div class="moda" v-if="isOpen" @click="handleCloseModal">
    <div class="modal__container" @click.stop>
      <div class="modal__header">
        <div class="modal__close" @click="handleCloseModal">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="modal__body">
        <div style="padding: 8px">
          <slot></slot>
        </div>
      </div>
      <div class="modal__footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
    handleCloseModal: {
      type: Function,
    },
  },
  methods: {
    handleClose() {
      this.handleClose();
    },
  },
};
</script>

<style scoped>
.moda {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding: 0;
  transition: opacity 0.4s linear;
}
.modal__container {
  max-width: 1100px;
  margin: auto;
  margin-top: 100px;
  background-color: #fff;
  display: block;
  border-radius: 8px;
  animation: showModal linear 0.4s;
  box-shadow: 2px 2px 20px 1px;
}
.modal__header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
  height: 30px;
  background-color: var(--color-primary);
  border-radius: 8px 8px 0 0;
  color: #fff;
}
.modal__close {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
  position: absolute;
  margin-top: 4px;
  transition: opacity 0.2s ease-in-out, transform 0.3s ease;
}
.modal__close:hover {
  cursor: pointer;
  transform: scale(1.2);
}
@keyframes showModal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes hiddenModal {
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
</style>
