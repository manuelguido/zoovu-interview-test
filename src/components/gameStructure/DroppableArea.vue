<template>
  <!-- Outer container -->
  <div class="text-left">
    <sub-title :text="title" classList="mb-5"></sub-title>
    <!-- Cards container -->
    <div class="d-flex justify-content-between mb-5">
      <!-- Cards -->
      <div
        v-for="slot in slots"
        :key="slot.id"
        class="card slot-card"
        @drop="onDrop($event, slot.id)"
        @dragover.prevent
        @dragenter.prevent
      >
        <!-- Image -->
        <card-image v-if="slot.id == slot.card.slot" :image="slot.card.image"></card-image>
      </div>
      <!-- /.Cards -->
    </div>
    <!-- /.Cards container -->
  </div>
  <!-- /.Outer container -->
</template>

<script>
import CardImage from "./CardImage.vue";
import SubTitle from "../titles/SubTitle.vue";
export default {
  name: "PickupCards",
  components: {
    CardImage,
    SubTitle,
  },
  props: {
    cards: {
      type: Array,
    },
    slots: {
      type: Array,
    }
  },
  data() {
    return {
      title: "..and drop them here to make the logo great again!",
    };
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
      var cards = document.querySelectorAll(".slot-card");
      var wd = cards[0].clientWidth;
      cards.forEach((card) => {
        card.style.height = wd + "px";
      });
    },

    /**
     * On card drop
     */
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