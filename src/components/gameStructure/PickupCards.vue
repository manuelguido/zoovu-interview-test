<template>
  <!-- Outer container -->
  <div class="outer-cointainer">
    <!-- Cards container -->
    <div class="d-flex justify-content-between mb-5 drop-zone">
      <!-- Cards -->
      <draggable-card
        v-for="card in cards"
        :key="card.id"
        @emitStart="emitStart"
        :card="card"
      ></draggable-card>
      <!-- /.Cards -->
    </div>
    <!-- /.Cards container -->
  </div>
  <!-- /.Outer container -->
</template>

<script>
import DraggableCard from "./cards/DraggableCard.vue";
export default {
  name: "PickupCards",
  components: {
    DraggableCard,
  },
  props: {
    cards: {
      type: Array,
    },
  },
  data() {
    return {
      gameStarted: false,
    };
  },
  created() {
    this.randomize();
  },
  methods: {
    randomize() {
      for (var i = this.cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
      this.loadingCards = false;
    },

    /**
     * When user clicks any card the time starts
     */
    emitStart() {
      if (!this.gameStarted) {
        console.log("emito");
        this.gameStarted = true;
        this.$emit("startGame", true);
      }
    },
  },
};
</script>

<style scoped>
/* Outer Cointainer */
.outer-cointainer {
  margin-bottom: 10vh;
}
</style>