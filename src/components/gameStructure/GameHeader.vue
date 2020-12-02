<template>
  <!-- Outer container -->
  <div class="d-flex justify-content-between align-items-end mb-5">
    <!-- Left side -->
    <div class="d-flex align-items-start align-content-center flex-column">
      <!-- Sub title -->
      <main-title :text="mainTitle" classList="mb-4" />
      <!-- Sub title -->
      <sub-title :text="subTitleLeft" />
    </div>
    <!-- /.Left side -->
    <!-- Right side -->
    <div class="d-flex align-items-end align-content-center flex-column">
      <!-- Time title -->
      <time-title :seconds="seconds" classList="mb-4" />
      <!-- Sub title -->
      <sub-title :text="subTitleRight" />
    </div>
    <!-- /.Right side -->
  </div>
  <!-- /.Outer container -->
</template>

<script>
import MainTitle from "../titles/MainTitle.vue";
import SubTitle from "../titles/SubTitle.vue";
import TimeTitle from "../titles/TimeTitle.vue";

export default {
  name: "GameHeader",
  components: {
    MainTitle,
    SubTitle,
    TimeTitle,
  },
  props: {
    seconds: {
      type: Number,
    },
    username: {
      type: String,
      default: JSON.parse(localStorage.getItem("username")),
    },
  },
  data() {
    return {
      mainTitle: "Good luck, " + this.username + "!",
      subTitleLeft: "Pick up the right cards",
      subTitleRight: "The faster the better!",
    };
  },
};
</script>
