<template>
  <!-- Card body -->
  <div class="card-body">
    <!-- Image -->
    <img class="image uns" :src="image" />
    <!-- /.Image -->
  </div>
  <!-- /.Card body -->
</template>

<script>
export default {
  name: "CardImage",
  props: {
    image: {
      type: String,
    },
  },
};
</script>

<style scoped>
/* Image card body */
.card-body {
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Image */
.image {
  max-width: 95%;
}
</style>