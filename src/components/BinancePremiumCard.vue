<template>
  <div class="card p-0" style="width: 18rem;">
    <div class="card-header">
    币安合约资金费排行
    </div>
  <div class="card-body">
  <ul class="list-group mb-3">
    <li :class="['list-group-item','d-flex', 'justify-content-between', index === 0 && 'list-group-item-success']" v-for="(item, index) in data.slice(0, 3)" :key="item.symbol">
      <div>{{item.symbol}}</div> 
      <div>{{(item.lastFundingRate*100).toFixed(2) + '%'}}</div>
    </li>
  </ul>
  <ul class="list-group">
    <li :class="['list-group-item', 'd-flex', 'justify-content-between', index === 2 && 'list-group-item-danger']" v-for="(item, index) in data.slice(-3)" :key="item.symbol">
      <div>{{item.symbol}}</div> 
      <div>{{(item.lastFundingRate*100).toFixed(2) + '%'}}</div>
    </li>
  </ul>
  </div>

  <div class="card-footer text-muted text-end">
    {{dayjs(data.time).format('DD/MM/YYYY H:mm:ss') }}
  </div>
</div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'binancePremiumCard',
  props:{
    data: Array
  },
  setup(){

    return {

    }
  },
  methods:{
    dayjs: dayjs
  }
}
</script>