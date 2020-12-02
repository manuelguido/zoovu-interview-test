<template>
  <span>
    <button
      :class="['submit-button', disabled ? 'disabled' : '']"
      @click="submit"
      type="submit"
    >
      Let's go
      <i class="fas fa-arrow-right ml-3"></i>
    </button>
  </span>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      placeholder: "Your name here",
    };
  },
  methods: {
    submit() {
      if (!this.disabled) {
        this.$emit("submitData", true);
      }
    },
  },
};
</script>

<style scoped>
/* Button */
.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dbdce4;
  border-radius: 50px;
  transition: 0.2s all;
  padding: 0.75em 2em;
}

/* Button is not disabled */
.submit-button:not(.disabled) {
  background-color: #fffefe;
  color: #23065e;
}

/* Button is disabled */
.submit-button.disabled {
  cursor: not-allowed !important;
  opacity: 0.4 !important;
}

/* Button hover */
.submit-button:not(.disabled):hover {
  background-color: rgba(35, 6, 94, 1);
  color: #dbdce4;
}

/* Remove button outline */
.submit-button,
.submit-button:hover,
.submit-button:active {
  outline: none;
}

/* When button is clicked */
.submit-button:not(.disabled):active {
  background-color: rgba(35, 6, 94, 0.7);
}
</style>
