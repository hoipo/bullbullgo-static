<template>
  <ul class="list-group">
    <li 
      class="list-group-item d-flex justify-content-between align-items-center"
      v-for="item in list"
      :key="item.id">
      触发条件：{{item.symbol}}溢价{{item.direction === '>' ? '大于' : '小于'}}{{(item.premium*100).toFixed(2)}}%
      <a href="javascript:void(0)" @click="deleteItem(item)" class="link-danger"><i class="bi bi-x-circle-fill"></i></a>
    </li>
  </ul>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  props: {
    list: Array,
    deleteReminder: Function,
    getReminderList: Function
  },
  setup(props){
    const instance = getCurrentInstance()
    const deleteItem = async ({email, id, symbol}) => {
      const res = await props.deleteReminder({email, id});
      if (res.message === 'ok') {
        props.getReminderList({email, symbol})
        instance.proxy.$toast.success('删除成功')
      } else {
        instance.proxy.$toast.error('删除失败')
      }
    }
    return {
      deleteItem
    }
  }
}
</script>