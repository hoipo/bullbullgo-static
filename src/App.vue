<template>
  <Nav />
  <section>
    <div class="container p-3">
      <div class="row row-cols-auto g-3 justify-content-around">
        <AgCard v-if="JSON.stringify(agFund) !== '{}'" :data="agFund" />
        <ZmCard v-if="JSON.stringify(zmFund) !== '{}'" :data="zmFund" />
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

import ZmCard from "./components/ZmCard";
import useZm from "./composables/useZm";

export default {
  name: 'App',
  components: {
    Nav,
    GrayscaleCard,
    AgCard,
    ZmCard
  },
  setup(){
    const { grayscaleFunds } = useGrayscleFunds();

    const { agFund } = useAg();

    const { zmFund } = useZm();

    return { grayscaleFunds, agFund, zmFund }
  },
}
</script>

<style>
</style>
