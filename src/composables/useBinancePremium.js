import { ref, onMounted, onUnmounted} from 'vue'

const fetchPreium = () => new Promise((resolve, reject) => {
  fetch(`https://9vwn51xvwi.execute-api.ap-southeast-1.amazonaws.com/production/gateway/fapi/v1/premiumIndex?t=${Date.now()}`,{
    'headers': {
      "X-Proxy-Uri": "fapi.binance.com",
    }
  })
      .then(res => res.json())
      .then(data => {
        resolve(data.sort((a, b) => (b.lastFundingRate - a.lastFundingRate)))
      })
      .catch(err => {
        console.error(err)
        reject(err)
      });
  })

export default function useBinancePremium() {
  const binancePremium = ref([])
  let timer
  const getBinancePremium = async () => {
    binancePremium.value = await fetchPreium()
  }

  onMounted(() => {
    getBinancePremium()
    timer = setInterval(getBinancePremium, 15000);
  })
  onUnmounted(() => {
    clearInterval(timer)
  })

  return {
    binancePremium
  }
}