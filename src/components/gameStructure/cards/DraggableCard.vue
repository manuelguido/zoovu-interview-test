<template>
  <div
    ref="card"
    draggable
    @click="emitStart"
    @drag="emitStart"
    @dragstart="startDrag($event, card)"
    :class="['card draggable-card', fullSize ? 'full-size' : 'medium-size']"
  >
    <!-- Image -->
    <card-image :image="card.image"></card-image>
  </div>
</template>

<script>
import CardImage from "./CardImage.vue";
export default {
  name: "DraggableCard",
  components: {
    CardImage,
  },
  props: {
    card: {
      type: Object,
    },
    fullSize: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    window.addEventListener("resize", this.calcCardHeight);
  },
  mounted() {
    this.calcCardHeight();
  },
  destroyed() {
    window.removeEventListener("resize", this.calcCardHeight);
  },
  methods: {
    /**
     * Calculate card height.
     */
    calcCardHeight() {
      if (!this.fullSize) {
        var wd = this.$refs.card.clientWidth;
        this.$refs.card.style.height = wd + "px";
      }
    },

    /**
     * When user clicks the card or drags it, the time starts.
     */
    emitStart() {
      this.$emit("emitStart", true);
    },

    /**
     * Start dragging card.
     */
    startDrag: (evt, card) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("cardId", card.id);
    },
  },
};
</script>

<style scoped>
/* Image card */
.draggable-card {
  border: 0 none;
  border-radius: 8px;
  box-shadow: 0 0 1em #dfe0e0;
  cursor: move;
}

.full-size {
  width: 100%;
  height: 100%;
}

.medium-size {
  width: 16%;
}
</style>