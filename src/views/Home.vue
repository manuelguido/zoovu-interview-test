<template>
  <!-- Container -->
  <div
    class="height-100 d-flex flex-column align-items-center justify-content-center"
  >
    <h1 class="h2 uns mb-5">Hello friend, tell me your name...</h1>
    <!-- Name input -->
    <name-input v-model="username" />
    <!-- Submit button -->
    <submit-button @submitData="submit" :disabled="submitDisabled" />
      <GameExplain/>
  </div>
  <!-- /.Container -->
</template>

<script>
import NameInput from "../components/NameInput.vue";
import SubmitButton from "../components/SubmitButton.vue";
import GameExplain from '../components/text/game-explain.vue';

export default {
  name: "HomePage",
  components: {
    NameInput,
    SubmitButton,
    GameExplain,
  },
  data() {
    return {
      username: '',
      submitDisabled: true,
    };
  },
  created() {
    localStorage.clear();
  },
  methods: {
    submit() {
      localStorage.setItem("username", JSON.stringify(this.username));
      this.$router.push({ name: "Game" });
    },
  },
  watch: {
    // If username is empty then submit name is forbidden
    username: function () {
      this.submitDisabled = (this.username == '');
    },
  },
};
</script>
