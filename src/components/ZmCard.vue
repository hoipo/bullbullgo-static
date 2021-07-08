<template>
  <div class="card p-0" style="width: 18rem;">
    <div class="card-header">
    豆粕基金溢价
    </div>
  <div class="card-body">
    <h3 :class="['card-title','d-flex', 'justify-content-between']">
      <div>
        <div class="text-muted fs-6">价格/估值</div>
        <div :class="[premium < 0 ? 'text-danger' : 'text-success']">{{premium.toFixed(2) + '%'}}</div>
      </div>
      <div>
        <div class="text-muted fs-6">映射价/价格</div>
        <div :class="[futureMappingPremium < 0 ? 'text-danger' : 'text-success']">
          {{futureMappingPremium.toFixed(2) + '%'}}
        </div>
        </div>
      </h3>
    <h6 class="card-subtitle d-flex justify-content-between mb-1"><div>买价：{{data.fundBid}}</div><div>卖价：{{data.fundAsk}}</div></h6>
    <h6 class="card-subtitle d-flex justify-content-between mb-1"><div>买量：{{data.fundBidVolume}}</div><div>卖量：{{data.fundAskVolume}}</div></h6>
    <p class="card-text mb-1">基金价格：{{data.fundPrice}}</p>
    <p class="card-text mb-1">基金估值：{{fundEstimatedValue}}</p>
    <p class="card-text mb-1">基金净值：{{data.fundNetValue}}</p>
    <p class="card-text mb-1">期货价格：{{data.futurePrice}}</p>
    <p class="card-text mb-1">期货均价：{{data.futureAveragePrice.toFixed(0)}}</p>
    <p class="card-text mb-1">期货映射价：{{futureMappingPrice}}</p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>

  <div class="card-footer text-muted text-end">
    {{dayjs(data.time).utc().format('DD/MM/YYYY H:mm:ss') }}
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export default {
  name: 'ZmCard',
  props:{
    data: Object
  },
  setup(props){

    
    const fundEstimatedValue = computed(() => (props.data.futureAveragePrice / props.data.futurePreviousSettlementPrice * props.data.fundNetValue).toFixed(4))

    const premium = computed(() => ((props.data.fundPrice/fundEstimatedValue.value - 1)*100))

    const futureMappingPrice = computed(() => (props.data.futurePrice / props.data.futurePreviousSettlementPrice * props.data.fundNetValue).toFixed(4))

    const futureMappingPremium = computed(() => (((futureMappingPrice.value / props.data.fundPrice - 1)*100)));

    return {
      fundEstimatedValue,
      premium,
      futureMappingPrice,
      futureMappingPremium
    }
  },
  methods:{
    dayjs: dayjs
  }
}
</script>