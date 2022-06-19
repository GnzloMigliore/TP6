<template>
  <section class="src-components-container">
   <div id="container" v-for="(color, index) in this.$store.state.colors" :key="index">
      <div
        class="square"
        :style="getFondo(color.backgroundColor)"
        @click="getColor(color)"
      >
        {{ color.backgroundColor }}
      </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "src-components-container",
  components: {},
  data() {
    return {
    };
  },
  methods: {
    getColor(color) {
      if (this.$store.state.colorHeaderVar === color.backgroundColor) {
         this.$store.state.mensajeDisplay = "You Picked Right!";
      } else {
        this.$store.state.mensajeDisplay = "Try Again!";
        this.$store.state.colors[this.$store.state.colors.indexOf(color)].backgroundColor = '#232323';
        console.log(this.$store.state.colors[this.$store.state.colors.indexOf(color)].backgroundColor );    
      }
        this.$store.state.mensajeDisplay
    },
    getFondo(color) {
      return {
        "background-color":
            this.$store.state.mensajeDisplay === "You Picked Right!"
            ? this.$store.state.colorHeaderVar
            : color
      };
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
#container {
  margin: 20px auto;
  max-width: 600px;
}
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
