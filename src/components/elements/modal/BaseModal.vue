<template>
  <transition name="fade">
    <div
      v-if="open"
      class="modal-base bg-white md:bg-modal-bg-color pointer-events-auto"
    >
      <transition name="drop">
        <div class="inner" v-show="open">
          <div
            class="content bg-white h-full px-4 py-16"
            :class="{
              'md:max-w-2xl md:mx-auto md:mt-20': !isGallery,
            }"
          >
            <!-- Content wrapper -->
            <div
              class="content-wrapper"
              :class="{
                'md:mx-auto md:max-w-xl md:pt-12': !isGallery,
                'max-w-7xl mx-auto': isGallery,
              }"
            >
              <slot />
            </div>
            <button class="close py-1 px-3" @click="close">
              <fai icon="xmark" class="text-3xl text-at-blue" />
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, onUnmounted } from "vue";
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  isGallery: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);
function close() {
  emit("close");
}
function handleKeyup(event) {
  if (event.keyCode === 27) {
    close();
  }
}
onMounted(() => document.addEventListener("keyup", handleKeyup));
onUnmounted(() => document.removeEventListener("keyup", handleKeyup));
console.log(props);
</script>

<style scoped>
.modal-base {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.6); */
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
}
.content {
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 15px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.drop-enter-active,
.drop-leave-active {
  transition: transform 1s ease-in-out;
}
.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
