<template>
  <div class="container">
    <h4 class="my-3">灰度基金监控提醒</h4>
    <router-link to="/"
      ><button class="btn btn-secondary w-3">返回</button></router-link
    >
    <AddGrayscaleReminder
      :getReminderList="getReminderList"
    />
    <GrayscaleReminderList 
    :list="list"
    :deleteReminder="deleteReminder"
    :getReminderList="getReminderList"
    />
  </div>
</template>

<script>

import AddGrayscaleReminder from "@/components/AddGrayscaleReminder";
import useGrayscaleReminderList from "@/composables/useGrayscaleReminderList";

import GrayscaleReminderList from "@/components/GrayscaleReminderList";

export default {
  name: "grayscaleReminder",
  
  components: {
    AddGrayscaleReminder,
    GrayscaleReminderList
  },
  setup(){

    const {list, getReminderList, deleteReminder} = useGrayscaleReminderList()

    return {
      list,
      getReminderList,
      deleteReminder
    }
  }
};
</script>