<template>
  <!-- Outer container -->
  <div class="height-100 pt-5">
    <!-- Inner main Container -->
    <div class="container pt-lg-4">
      <!-- Game information -->
      <game-header :username="username" :seconds="timePassed" />
      <!-- User won -->
      <div v-if="userWon">
        <!-- Confetti -->
        <confetti :makeConfetti="userWon"></confetti>
        <winner-banner
          :username="username"
          :userWon="userWon"
          :score="timePassed"
          :reloadTime="reloadTime"
        ></winner-banner>
      </div>
      <!-- /.User won -->
      <!-- /.Game information -->

      <!-- Pickup cards -->
      <pickup-cards
        v-else-if="!loadingData"
        @startGame="startGame"
        @placeCardOnPickup="placeCardOnPickup"
        :cards="placedList"
      />
      <!-- /.Pickup cards -->
      <!-- Droppable area -->
      <droppable-area
        @placeCard="placeCard"
        @finishGame="finishGame"
        :slots="slots"
        :cards="placedList"
      />
      <!-- /.Droppable area -->
    </div>
    <!-- /.Inner main Container -->
  </div>
  <!-- /.Outer container -->
</template>

<script>
import GameHeader from "../components/gameStructure/GameHeader.vue";
import PickupCards from "../components/gameStructure/PickupCards.vue";
import DroppableArea from "../components/gameStructure/DroppableArea.vue";
import Confetti from "../components/Confetti.vue";
import WinnerBanner from "../components/WinnerBanner.vue";
export default {
  name: "GamePlayPage",
  components: {
    GameHeader,
    PickupCards,
    DroppableArea,
    Confetti,
    WinnerBanner,
  },
  data() {
    return {
      username: JSON.parse(localStorage.getItem("username")),
      timePassed: 0, // Seconds
      reloadTime: 10, // Seconds
      timerInterval: 1000, // Miliseconds
      gameInterval: null,
      reloadInteval: null,
      userWon: false,
      reloadGame: false,
      loadingData: false,
      cards: [],
      originalData: [
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
          card: null,
        },
        {
          id: 2,
          value: "o",
          card: null,
        },
        {
          id: 3,
          value: "o",
          card: null,
        },
        {
          id: 4,
          value: "v",
          card: null,
        },
        {
          id: 5,
          value: "u",
          card: null,
        },
      ],
    };
  },
  created() {
    // Initialize game data.
    this.initializeGameData();

    // Clear local storage when user reloads page.
    window.addEventListener("beforeunload", function () {
      localStorage.clear();
    });
  },
  computed: {
    placedList() {
      return this.cards.filter((card) => card.slot === 0);
    },
  },
  methods: {
    saveOriginalData() {
      this.cards.forEach((element) => {
        this.originalData.push(element);
      });
    },
    /**
     * Initialize data for game start.
     */
    initializeGameData() {
      this.loadingData = true;

      this.timePassed = 0;

      this.cards = [];
      this.originalData.forEach((element) => {
        element.slot = 0;
        this.cards.push(element);
      });

      this.slots.forEach((element) => {
        element.card = null;
      });

      // Randomize data
      for (var i = this.cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.cards[i];
        temp.slot = 0;
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }

      this.loadingData = false;
    },

    /**
     * Start game.
     */
    startGame() {
      this.gameInterval = setInterval(
        () => (this.timePassed += 1),
        this.timerInterval
      );
    },

    /**
     * Restart the game after 10 seconds.
     */
    setTimeoutRestart() {
      this.reloadInteval = setInterval(() => (this.reloadTime -= 1), this.timerInterval);
    },

    /**
     * Finish game.
     */
    finishGame() {
      clearInterval(this.gameInterval);
      clearInterval(this.reloadInteval);
      this.userWon = true;
      this.reloadTime = 10;
      this.setTimeoutRestart();
    },

    /**
     * Check if place is correct.
     */
    checkPlaceAsset(currentSlot) {
      if (currentSlot.card.value != currentSlot.value) {
        this.timePassed += 10;
      }
    },

    /**
     * Check all places asserts to verify if user has won.
     */
    checkAsserts() {
      var assertsCount = 0;
      // var assertsTotal = this.cards.lenght;
      this.slots.forEach((slot) => {
        if (slot.card && slot.value == slot.card.value) {
          assertsCount += 1;
        }
      });
      if (assertsCount == 5) {
        this.finishGame();
      }
    },

    placeCardOnPickup(cardId) {
      this.freeSlot(cardId);
      var card = this.cards.find((card) => card.id == cardId);
      card.slot = 0;
    },

    /**
     * Free slot when draggin the card.
     */
    freeSlot(cardId) {
      this.slots.forEach((slot) => {
        if (slot.card && slot.card.id == cardId) {
          slot.card = null;
        }
      });
    },

    /**
     * Place card into slot.
     */
    placeCard(data) {
      this.freeSlot(data.cardId);

      var currentCard = this.cards.find((card) => card.id == data.cardId); // Find card moving
      var currentSlot = this.slots.find((slot) => slot.id == data.slotId); // Find slot to be placed

      currentCard.slot = data.slotId; // Assing slot tu card
      this.$set(currentSlot, "card", currentCard); // Assing card to slot

      this.checkPlaceAsset(currentSlot);
      this.checkAsserts();
      // currentSlot.card = currentCard;
    },
  },
  watch: {
    reloadTime: function () {
      if (this.reloadTime == 0) {
        this.userWon = false;
        this.initializeGameData();
      }
    },
  },
};
</script>
