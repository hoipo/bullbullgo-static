<template>
  <Nav />
  <section>
    <div class="container p-3">
      <div class="row row-cols-auto g-3 justify-content-around">
        <AgCard v-if="JSON.stringify(agFund) !== '{}'" :data="agFund" />
        <GrayscaleCard v-for="fund in grayscaleFunds" :data="fund" :key="fund.symbol" />
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "./components/Nav";
import GrayscaleCard from "./components/GrayscaleCard";
import useGrayscleFunds from "./composables/useGrayscleFunds";

import AgCard from "./components/AgCard";
import useAg from "./composables/useAg";

export default {
  name: 'App',
  components: {
    Nav,
    GrayscaleCard,
    AgCard
  },
  setup(){
    const { grayscaleFunds } = useGrayscleFunds();

    const { agFund } = useAg();

    return { grayscaleFunds, agFund }
  },
}
</script>

<style>
</style>
