import { ref } from "vue";

const fetchReminderList = ({ email, symbol}) => new Promise((resolve, reject) => {
  fetch('https://9vwn51xvwi.execute-api.ap-southeast-1.amazonaws.com/production/reminder?' + new URLSearchParams({
        email,
        symbol,
      }))
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        console.error(err)
        reject(err)
      });
  })

const deleteReminder = ({ email, id }) => new Promise((resolve, reject) => {
  fetch('https://9vwn51xvwi.execute-api.ap-southeast-1.amazonaws.com/production/reminder?' + new URLSearchParams({
    email,
    id,
  }),
  {
    method:'DELETE'
  })
    .then(res => res.json())
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      console.error(err)
      reject(err)
    });
})

export default function useGrayscleFunds() {

  const list = ref([])
  const getReminderList = async ({ email, symbol}) => {
    const listRes = await fetchReminderList({
      email,
      symbol
    })
    list.value = listRes.Items
  }


  return {
    list,
    getReminderList,
    deleteReminder
  }
}