<template>
  <Nav />
  <section>
    <div class="container p-3">
      <div class="row row-cols-auto g-3 justify-content-around">
        <AgCard v-if="JSON.stringify(agFund) !== '{}'" :data="agFund" />
        <ZmCard v-if="JSON.stringify(zmFund) !== '{}'" :data="zmFund" />
        <GrayscaleCard v-for="fund in grayscaleFunds" :data="fund" :key="fund.symbol" />
        <BinancePremiumCard v-if="binancePremium.length > 0" :data="binancePremium" />
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

import BinancePremiumCard from "./components/BinancePremiumCard";
import useBinancePremium from "./composables/useBinancePremium";

export default {
  name: 'App',
  components: {
    Nav,
    GrayscaleCard,
    AgCard,
    ZmCard,
    BinancePremiumCard
  },
  setup(){
    const { grayscaleFunds } = useGrayscleFunds();

    const { agFund } = useAg();

    const { zmFund } = useZm();

    const { binancePremium } = useBinancePremium();

    return { grayscaleFunds, agFund, zmFund, binancePremium }
  },
}
</script>

<style>
</style>
