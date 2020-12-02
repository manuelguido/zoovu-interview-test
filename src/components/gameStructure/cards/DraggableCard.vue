<template>
  <div
    ref="card"
    draggable
    @click="emitStart"
    @drag="emitStart"
    @dragstart="startDrag($event, card)"
    class="card draggable-card"
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
  },
  created() {
    window.addEventListener("resize", this.caclCardHeight);
  },
  mounted() {
    this.caclCardHeight();
  },
  destroyed() {
    window.removeEventListener("resize", this.caclCardHeight);
  },
  methods: {
    caclCardHeight() {
      var wd = this.$refs.card.clientWidth;
      this.$refs.card.style.height = wd + "px";
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
  width: 16%;
  cursor: move;
}
</style>