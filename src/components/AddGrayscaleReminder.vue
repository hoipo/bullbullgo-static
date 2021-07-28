<template>
  <div class="my-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">标的</label>
      <div class="col-sm-10">
          <select class="form-select" v-model="symbol" @change="symbolChanged">
            <option value="GBTC">GBTC</option>
            <option value="ETHE">ETHE</option>
          </select>
      </div>
    </div>
    <div class="my-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          type="email"
          v-model="email"
          @input="updateEmailValue"
          class="form-control"
          placeholder="email@example.com"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">目标溢价</label>
      <div class="col-sm-10">
        <div class="input-group" >
          <select class="form-select" style="max-width: 100px;" v-model="direction">
            <option value=">">大于</option>
            <option value="<">小于</option>
          </select>
          <input type="number" class="form-control" placeholder="-8.8" v-model="premium"  />
          <span class="input-group-text">%</span>
        </div>
      </div>
    </div>
    <div class="mb-3 row ml-0 justify-content-end">
          <button @click="submit" type="submit" class="btn btn-primary" style="max-width: 120px;">提交</button>
    </div>
</template>

<script>
import {  onMounted , getCurrentInstance} from "vue";
import { ref } from '@vue/reactivity'
import useAddGrayscaleReminder from "../composables/useAddGrayscaleReminder";
import { parseQuery } from "vue-router";
export default {
  props: ['getReminderList'],
  setup(props) {
    const instance = getCurrentInstance()
    const  email = ref(window.localStorage.getItem('email') || '')
    const symbol = ref(parseQuery(window.location.search)['symbol'] || 'GBTC');
    const direction = ref('<');
    const premium = ref('');

    const { fetchAddReminder } = useAddGrayscaleReminder()
  
    
    const updateEmailValue = () => {
        window.localStorage.setItem('email', email.value)
    }

    const symbolChanged = () => {
      props.getReminderList({email: email.value, symbol: symbol.value})
    }

    const submit = async () => {
      console.log(email.value, symbol.value, direction.value, premium.value);
      if (!/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(email.value)) {
        instance.proxy.$toast.warning('邮箱格式不对')
        return
      }
      if (premium.value.trim() === '') {
        instance.proxy.$toast.warning('目标溢价不能为空')
        return
      }
      const res = await fetchAddReminder({
        "email": email.value,
        "symbol": symbol.value,
        "premium": premium.value/100,
        "direction": direction.value
      })
      if (res.message === 'ok') {
        props.getReminderList({email: email.value, symbol: symbol.value})
        premium.value = ''
        instance.proxy.$toast.success('成功添加提醒！')
      } else {
        instance.proxy.$toast.error('添加失败！')
      }
    }
    
    onMounted(() => {
        props.getReminderList({email: email.value, symbol: symbol.value})
    })

    return {
      email,
      symbol,
      direction,
      premium,
      updateEmailValue,
      symbolChanged,
      submit,
    }
  }
}
</script>