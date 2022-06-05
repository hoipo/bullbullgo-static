<template>
  <section>
    <div class="container p-3">
      <div class="row row-cols-auto g-3 justify-content-around">
        <AgCard v-if="JSON.stringify(agFund) !== '{}'" :data="agFund" />
        <ZmCard v-if="JSON.stringify(zmFund) !== '{}'" :data="zmFund" />
      </div>
    </div>
  </section>
</template>

<script>
import AgCard from "@/components/AgCard";
import useAg from "@/composables/useAg";

import ZmCard from "@/components/ZmCard";
import useZm from "@/composables/useZm";

export default {
  name: 'Home',
  components: {
    AgCard,
    ZmCard
  },
  
  setup(){
    const { agFund } = useAg();

    const { zmFund } = useZm();

    return { agFund, zmFund }
  },
}
</script>