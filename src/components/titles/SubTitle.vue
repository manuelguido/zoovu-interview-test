<template>
  <h2 :class="['sub-title h6', classList]">{{ text }}</h2>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    text: {
      type: String,
      default: "",
    },
    classList: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.sub-title {
  color: #b5b4c3;
}
</style>