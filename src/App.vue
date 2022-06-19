<template>
  <div id="app">
    <Header/>
    <Navigator/>
    <Container/>
  </div>
</template>

<script>
import Container from "./components/ContainerC.vue";
import Header from "./components/HeaderC.vue";
import Navigator from "./components/NavigatorC.vue";
export default {
  name: "App",
  components: {
    Container,
    Header,
    Navigator,
  },
  data() {
  },
  created() {
    this.init();
    this.colorHeader();
  },
updated() {

  },
  methods: {
    init() {
      this.$store.state.colors =
        this.$store.state.colorCount == 6
          ? this.createNewColors(this.$store.state.colorCount)
          : this.createNewColors(this.$store.state.colorCount)
    },
    setColor() {
      if (this.$store.state.colors.length != this.$store.state.colorCount && this.isHardNavigator) {
        this.$store.state.colors = this.createNewColors(this.$store.state.colorCount);
      }     
    },
    colorHeader() {
      this.$store.state.colorHeaderVar = this.$store.state.colors[this.PickColor()].backgroundColor
    },
    PickColor() {
      var quantity;
      if (this.$store.state.isHardNavigator) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
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
     reset() {
     console.log("entrooooo");
     if (!this.$store.state.isHardNavigator) {
     console.log(this.$store.state.isHardNavigator);
     this.$store.state.colors = this.createNewColors(6)
     this.$store.state.isHardNavigator = true
     this.colorHeader();
     }else{
     console.log(this.$store.state.isHardNavigator);
     }
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
  },
};
</script>

<style>
body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}
</style>
