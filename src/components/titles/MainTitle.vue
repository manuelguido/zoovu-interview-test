<template>
  <h2 :class="['main-title h4', classList]">{{ text }}</h2>
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
.main-title {
  color: #3a3a3a;
  font-weight: 600;
}
</style>