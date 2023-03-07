<template>
  <div class="game-explain py-5">
    <p class="mb-0">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "TextGameExplain",
  data() {
    return {
      text: 'In order to win the game, you have to put all the cards in the correct order. If you miss one 10 seconds will be added to the timer. Complete it as fast as possible to get a better score!',
    };
  },
};
</script>

<style scoped>
.game-explain {
  position: absolute;
  bottom: 0;
}

.game-explain p {
  font-size: 1.25rem;
  color: #aaa;
}
</style>
