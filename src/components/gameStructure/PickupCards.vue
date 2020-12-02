<template>
  <!-- Outer container -->
  <div class="outer-cointainer">
    <!-- Cards container -->
    <div class="d-flex justify-content-between mb-5 drop-zone">
      <!-- Cards -->
      <div
        v-for="card in cards"
        :key="card.id"
        draggable
        @click="emitStart"
        @drag="emitStart"
        @dragstart="startDrag($event, card)"
        class="card image-card drag-el"
      >
        <card-image :image="card.image"></card-image>
      </div>
      <!-- /.Cards -->
    </div>
    <!-- /.Cards container -->
  </div>
  <!-- /.Outer container -->
</template>

<script>
import CardImage from "./CardImage.vue";
export default {
  name: "PickupCards",
  components: {
    CardImage,
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
  computed: {
    listOne() {
      return this.cards.filter((card) => card.list === 1);
    },
    listTwo() {
      return this.cards.filter((card) => card.list === 2);
    },
  },
  created() {
    this.randomize();
    window.addEventListener("resize", this.caclCardHeight);
  },
  mounted() {
    this.caclCardHeight();
  },
  destroyed() {
    window.removeEventListener("resize", this.caclCardHeight);
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

    caclCardHeight() {
      var cards = document.querySelectorAll(".image-card");
      var wd = cards[0].clientWidth;
      cards.forEach((card) => {
        card.style.height = wd + "px";
      });
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

    startDrag: (evt, card) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("cardId", card.id);
      // console.log('dragging: '+item.value)
    },
  },
};
</script>

<style scoped>
/* Outer Cointainer */
.outer-cointainer {
  margin-bottom: 10vh;
}

/* Image card */
.image-card {
  border: 0 none;
  border-radius: 8px;
  box-shadow: 0 0 1em #dfe0e0;
  width: 16%;
  cursor: move;
}
</style>