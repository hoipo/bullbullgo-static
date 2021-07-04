<template>
  <div class="card p-0" style="width: 18rem;">
    <div class="card-header">
    {{data.symbol}}溢价
    </div>
  <div class="card-body">
    <h3 :class="['card-title', data.premium < 0 ? 'text-danger' : 'text-success']">{{ (data.premium*100).toFixed(2) }}%</h3>
    <h6 class="card-subtitle d-flex justify-content-between"><div>买：{{data.bidPrice}}</div><div>卖：{{data.askPrice}}</div></h6>
    <p class="card-text mb-1">基金价格：{{data.lastPrice}}</p>
    <p class="card-text mb-1">基金净值：{{data.fundNetValue.toFixed(2)}}</p>
    <p class="card-text mb-1">基金含币量：{{data.perShareValue}}</p>
    <p class="card-text mb-1">合约价格：{{data.futurePrice}}</p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
  <div class="card-footer text-muted text-end">
    {{dayjs(data.tradeTimeInLong).format('DD/MM/YYYY H:mm:ss') }}
  </div>
</div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'GrayscaleCard',
  props: {
    data: Object
  },
  methods:{
    dayjs: dayjs
  }
}
</script>