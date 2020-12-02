<template>
  <div
    ref="card"
    class="card slot-card"
    @drop="onDrop($event, slotData)"
    @dragover.prevent
    @dragenter.prevent
  >
    <draggable-card
      v-if="slotData.card && slotData.id == slotData.card.slot"
      :card="slotData.card"
      fullSize
    />
    <!-- Image
    <card-image
      v-if="slotData.card && slotData.id == slotData.card.slot"
      :image="slotData.card.image"
    ></card-image> -->
  </div>
</template>

<script>
// import DraggableCard from "./DraggableCard";
import DraggableCard from "./DraggableCard.vue";
export default {
  name: "SlotCard",
  components: {
    DraggableCard,
  },
  props: {
    slotData: {
      type: Object,
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
     * Calculate slot card height.
     */
    calcCardHeight() {
      var wd = this.$refs.card.clientWidth;
      this.$refs.card.style.height = wd + "px";
    },

    onDrop(evt, slot) {
      const cardId = evt.dataTransfer.getData("cardId");
      if (!slot.card) {
        // var currentCard = this.cards.find(card => card.id == cardId);
        this.$emit("placeCard", { cardId: cardId, slotId: slot.id });
      }
    },
  },
};
</script>

<style scoped>
/* Image card */
.slot-card {
  background-color: #f5f6f9;
  border: #2dd09c 1px dashed;
  border-radius: 8px;
  box-shadow: none;
  width: 16%;
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
}
</style>