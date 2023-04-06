<template>
  <main>
    <div
      v-if="visible"
      @click="counter++"
      v-click-out-side="customMethod"
      class="box"
    >
      BOX {{ counter }}
    </div>
    <br />
    <p>Outside of the box</p>
  </main>
</template>

<script>
import clickOutSide from "../lib";

export default {
  name: "Box",
  directives: {
    clickOutSide,
  },
  data() {
    return {
      visible: true,
      counter: 0,
    };
  },
  methods: {
    customMethod() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: red;
  width: 100px;
  height: 100px;
}
p {
  font-size: 2rem;
  font-weight: 800;
}
</style>
