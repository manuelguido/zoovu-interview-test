<template>
  <div class="mb-5">
    <h1 class="h1 title mb-4">¡Congatulations {{ username }}!</h1>
    <h2 class="h2 mb-4 sub-title">You have won</h2>
    <p class="h4 mb-4">Your score is: {{ score }}</p>
    <p class="h6">Game will restart in {{ reloadTime }} seconds.</p>
  </div>
</template>

<script>
export default {
  name: "WinnerBanner",
  props: {
    username: {
      type: String,
    },
    score: {
      type: Number,
      default: 0,
    },
    reloadTime: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.title {
  color: #0e0060;
}

.sub-title {
  color: #25e9a8;
}

.close-icon {
  cursor: pointer;
}
.close-icon:hover {
  opacity: 0.6;
}
</style>