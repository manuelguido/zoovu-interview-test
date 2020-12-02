<template>
  <!-- Outer container -->
  <div class="height-100 pt-5">
    <!-- Inner main Container -->
    <div class="container pt-lg-4">
      <!-- Game information -->
      <game-header :username="username" :seconds="timePassed" />
      <!-- /.Game information -->
      <!-- Pickup cards -->
      <pickup-cards @startGame="startGame" :cards="placedList" />
      <!-- /.Pickup cards -->
      <!-- Droppable area -->
      <droppable-area @placeCard="placeCard" @finishGame="finishGame" :slots="slots" :cards="placedList" />
      <!-- /.Droppable area -->
    </div>
    <!-- /.Inner main Container -->
  </div>
  <!-- /.Outer container -->
</template>

<script>
import GameHeader from "../components/gameStructure/GameHeader";
import PickupCards from "../components/gameStructure/PickupCards";
import DroppableArea from "../components/gameStructure/DroppableArea";
export default {
  name: "GamePlayPage",
  components: {
    GameHeader,
    PickupCards,
    DroppableArea,
  },
  data() {
    return {
      username: JSON.parse(localStorage.getItem("username")),
      timePassed: 0,
      timerInterval: 1000, // Miliseconds
      gameInterval: null,
      cards: [
        {
          id: 1,
          value: "o",
          image: require("@/assets/zoovu-o.svg"),
          slot: 0,
        },
        {
          id: 2,
          value: "z",
          image: require("@/assets/zoovu-z.svg"),
          slot: 0,
        },
        {
          id: 3,
          value: "v",
          image: require("@/assets/zoovu-v.svg"),
          slot: 0,
        },
        {
          id: 4,
          value: "u",
          image: require("@/assets/zoovu-u.svg"),
          slot: 0,
        },
        {
          id: 5,
          value: "o",
          image: require("@/assets/zoovu-o.svg"),
          slot: 0,
        },
      ],
      slots: [
        {
          id: 1,
          value: "z",
          card: {},
        },
        {
          id: 2,
          value: "o",
          card: {},
        },
        {
          id: 3,
          value: "o",
          card: {},
        },
        {
          id: 4,
          value: "v",
          card: {},
        },
        {
          id: 5,
          value: "u",
          card: {},
        },
      ],
    };
  },
  computed: {
    placedList() {
      return this.cards.filter((card) => card.slot === 0);
    },
    unplacedList() {
      return this.cards.filter((card) => card.slot != 0);
    },
  },
  methods: {
    /**
     * Start game
     */
    startGame() {
      this.gameInterval = setInterval(
        () => (this.timePassed += 1),
        this.timerInterval
      );
    },

    /**
     * Finish game
     */
    finishGame() {
      alert("You finished!");
      clearInterval(this.gameInterval);
    },

    placeCard(data) {
      var currentCard = this.cards.find(card => card.id == data.cardId);
      var currentSlot = this.slots.find(slot => slot.id == data.slotId);
      currentCard.slot = data.slotId;
      this.$set(currentSlot, 'card', currentCard)
      // currentSlot.card = currentCard;
    }
  },
};
</script>
