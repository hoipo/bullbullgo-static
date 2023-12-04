import { ref, onMounted, onUnmounted} from 'vue'

const fetchZm = () => new Promise((resolve, reject) => {
  fetch(`https://api.ollo.lol/arbitrage/zm?t=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        console.error(err)
        reject(err)
      });
  })

export default function useZm() {
  const zmFund = ref({})
  let timer
  const getZm = async () => {
    zmFund.value = await fetchZm()
  }

  onMounted(()=>{
    getZm()
    timer = setInterval(getZm, 15000)
  })
  onUnmounted(() => {
    clearInterval(timer)
  })

  return {
    zmFund
  }
}