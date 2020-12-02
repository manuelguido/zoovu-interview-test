<template>
  <h2 :class="['time-title h4', classList]">
    <i v-if="icon" class="icon far fa-clock mr-1"></i>
    {{ "Your time: " + this.seconds + " seconds" }}
  </h2>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    icon: {
      type: Boolean,
      default: true,
    },
    seconds: {
      type: Number,
      default: 0,
    },
    classList: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.icon {
  color: #00f8a4;
}
.time-title {
  color: #0e0060;
}
</style>