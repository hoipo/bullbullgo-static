import { ref, onMounted, onUnmounted} from 'vue'

const fetchAg = () => new Promise((resolve, reject) => {
  fetch(`http://159.75.87.108:3000/ag?t=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        console.error(err)
        reject(err)
      });
  })

export default function useAg() {
  const agFund = ref({})
  let timer
  const getAg = async () => {
    agFund.value = await fetchAg()
  }

  onMounted(()=>{
    getAg()
    timer = setInterval(getAg, 15000);
  })

  onUnmounted(()=> {
    clearInterval(timer)
  })


  return {
    agFund
  }
}