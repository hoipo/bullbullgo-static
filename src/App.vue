<template>
  <Nav />
  <section>
    <div class="container p-3">
      <div class="row row-cols-auto g-3 justify-content-around">
        <GrayscaleCard v-for="fund in grayscaleFunds" :data="fund" :key="fund.symbol" />
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "./components/Nav";
import GrayscaleCard from "./components/GrayscaleCard";

export default {
  name: 'App',
  components: {
    Nav,
    GrayscaleCard
  },
  data(){
    return {
      grayscaleFunds: []
    }
  },
  methods:{
    async getGrayscale(){
      const data = await fetch('https://9vwn51xvwi.execute-api.ap-southeast-1.amazonaws.com/production/premium?symbol=GBTC,ETHE')
        .then(res => res.json())
        .catch(err => console.error(err));
      this.grayscaleFunds = data;
    }
  },
  created(){
    this.getGrayscale();
  }
}
</script>

<style>
</style>
