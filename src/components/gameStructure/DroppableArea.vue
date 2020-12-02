<template>
  <!-- Outer container -->
  <div class="text-left">
    <sub-title :text="title" classList="mb-5"></sub-title>
    <!-- Cards container -->
    <div class="d-flex justify-content-between mb-5">
      <!-- Slots -->
      <slot-card
        v-for="slot in slots"
        :key="slot.id"
        :slotData="slot"
        @placeCard="placeCard"
      />
      <!-- /.Slots -->
    </div>
    <!-- /.Cards container -->
  </div>
  <!-- /.Outer container -->
</template>

<script>
import SlotCard from "./cards/SlotCard";
import SubTitle from "../titles/SubTitle.vue";
export default {
  name: "DroppableArea",
  components: {
    SlotCard,
    SubTitle,
  },
  props: {
    cards: {
      type: Array,
    },
    slots: {
      type: Array,
    },
  },
  data() {
    return {
      title: "..and drop them here to make the logo great again!",
    };
  },
  methods: {
    /**
     * On card drop
     */
    placeCard(data) {
      this.$emit("placeCard", data);
    },
  },
};
</script>