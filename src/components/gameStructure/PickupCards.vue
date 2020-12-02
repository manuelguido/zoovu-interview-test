<template>
  <!-- Outer container -->
  <div class="outer-cointainer">
    <!-- Cards container -->
    <div
      ref="row"
      :class="['d-flex mb-5 drop-zone', className]"
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent
    >
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
  computed: {
    className() {
      return this.cards.length == 5
        ? "justify-content-between"
        : "justify-content-around";
    },
  },
  data() {
    return {
      gameStarted: false,
    };
  },
  created() {
    window.addEventListener("resize", this.calcRowHeight);
  },
  mounted() {
    this.calcRowHeight();
  },
  destroyed() {
    window.removeEventListener("resize", this.calcRowHeight);
  },
  methods: {
    /**
     * Make the row equal height when is not filled with cards.
     */
    calcRowHeight() {
      var wd = this.$refs.row.clientHeight;
      this.$refs.row.style.height = wd + "px";
    },

    /**
     * When user clicks any card the time starts
     */
    emitStart() {
      if (!this.gameStarted) {
        this.gameStarted = true;
        this.$emit("startGame", true);
      }
    },

    /**
     * Place card again into the pickup options.
     */
    onDrop(evt) {
      const cardId = evt.dataTransfer.getData("cardId");
      this.$emit("placeCardOnPickup", cardId);
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