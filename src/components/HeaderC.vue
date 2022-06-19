<template>
  <section class="src-components-header">
    <div id="header" :style="bcgHeader()">
      <h1>
        The Great <br />
        <span id="colorDisplay">{{ this.$store.state.colorHeaderVar }}</span>
        <br />
        Guessing Game
         <br />
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-header",
  mounted() {},
  data() {
    return {};
  },
  methods: {
    bcgHeader() {
      return {
        "background-color":
          this.$store.state.mensajeDisplay != "You Picked Right!"
            ? "steelblue"
            : this.$store.state.colorHeaderVar,
      };
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
#header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
#colorDisplay {
  font-size: 200%;
}
</style>
