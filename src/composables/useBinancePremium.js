import { ref, onMounted} from 'vue'

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

  const getBinancePremium = async () => {
    binancePremium.value = await fetchPreium()
  }

  setInterval(getBinancePremium, 15000);

  onMounted(getBinancePremium)

  return {
    binancePremium
  }
}