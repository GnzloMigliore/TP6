<template>
  <section class="src-components-navigator">
    <div id="navigator">
      <button @click="reset()"  id="reset" class="selected">{{ getMensaje(this.$store.state.mensajeDisplay) }}</button>
      <span id="message"> {{ this.$store.state.mensajeDisplay }}</span>
      <button @click="hardToEasy()" :style="getBtn(!this.$store.state.isHard)">easy</button>
      <button @click="easyTohard()" :style="getBtn(this.$store.state.isHard)" class="selected">
        hard
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-navigator",
  mounted() {},
  data() {
    return {  };
  },
  methods: {
    hardToEasy() {
      this.$store.state.isHard = false;
      this.$store.state.colorCount = 3;
       this.$store.state.colors = this.createNewColors(3)
        this.$store.state.colorHeaderVar = this.$store.state.colors[this.PickColor()].backgroundColor
    },
    easyTohard() {
      this.$store.state.isHard = true;
      this.$store.state.colorCount = 6;
      this.$store.state.colors = this.createNewColors(6)
       this.$store.state.colorHeaderVar = this.$store.state.colors[this.PickColor()].backgroundColor
    },
    reset() {
     this.$store.state.mensajeDisplay = "";
     this.$store.state.colors = this.createNewColors(6)
     this.$store.state.colorHeaderVar = this.$store.state.colors[this.PickColor()].backgroundColor
    },
    getBtn(isHard) {
      return {
        "background-color": isHard ? "steelblue" : "white",
        color: isHard ? "white" : "steelblue",
      };
    },
    getMensaje(message) {
      return message != "You Picked Right!" ? "New colors" : "Play Again!";
    },
    createNewColors(numbers) {
      var arr = [];
      for (var i = 0; i < numbers; i++) {
       arr.push({
          id: i,
          backgroundColor: this.createRandomStringColor(),
        });
      }
      return arr;
    },
     colorHeader() {
      this.$store.state.colorHeaderVar = this.$store.state.colors[this.PickColor()];
    },
    PickColor() {
      var quantity;
      if (this.$store.state.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
     createRandomStringColor() {
      var newColor =
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";
      return newColor;
    },
     randomInt() {
      return Math.floor(Math.random() * 256);
    },
    
  },
  computed: {},
};
</script>

<style scoped lang="css">
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
#message {
  color: black;
  display: inline-block;
  width: 20%;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
</style>
