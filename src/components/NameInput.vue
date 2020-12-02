<template>
  <span>
    <input
      class="name-input mb-5"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      type="text"
      :placeholder="placeholder"
    />
  </span>
</template>

<script>
export default {
  name: "NameInput",
  props: ["value"],
  data() {
    return {
      placeholder: "Your name here",
    };
  },
};
</script>

<style scoped>
.name-input,
.name-input:focus {
  background: none;
  border-bottom: 1px solid #eee;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  color: #333 !important;
  font-size: 1.25em;
  outline: none;
  text-align: center;
  width: 400px;
}
.name-input::placeholder {
  color: #bbb;
  font-style: italic;
}
</style>
