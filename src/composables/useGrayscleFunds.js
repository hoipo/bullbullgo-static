import { ref, onMounted, onUnmounted } from 'vue'

const fetchGrayscale = () => new Promise((resolve, reject) => {
    fetch('https://9vwn51xvwi.execute-api.ap-southeast-1.amazonaws.com/production/premium?symbol=GBTC,ETHE')
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
  const grayscaleFunds = ref([])
let timer
  const getGrayscale = async () => {
    grayscaleFunds.value = await fetchGrayscale()
  }

  

  onMounted(()=>{
    getGrayscale()
    timer = setInterval(getGrayscale, 5000);
  })
  onUnmounted(() => {
    clearInterval(timer)
  })

  return {
    grayscaleFunds
  }
}