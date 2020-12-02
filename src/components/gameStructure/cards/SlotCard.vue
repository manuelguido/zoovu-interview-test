<template>
  <div
    ref="card"
    class="card slot-card"
    @drop="onDrop($event, slotData.id)"
    @dragover.prevent
    @dragenter.prevent
  >
    <!-- Image -->
    <card-image
      v-if="slotData.id == slotData.card.slot"
      :image="slotData.card.image"
    ></card-image>
  </div>
</template>

<script>
import CardImage from "./CardImage";
export default {
  name: "SlotCard",
  components: {
    CardImage,
  },
  props: {
    slotData: {
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

    onDrop (evt, slotId) {
      const cardId = evt.dataTransfer.getData('cardId');
      // var currentCard = this.cards.find(card => card.id == cardId);
      this.$emit('placeCard', { 'cardId': cardId, 'slotId': slotId });
    }
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
  overflow: hidden;
}
</style>