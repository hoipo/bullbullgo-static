import { ref, onMounted} from 'vue'

const fetchAg = () => new Promise((resolve, reject) => {
  fetch(`https://service-g0r9o0x2-1256188994.gz.apigw.tencentcs.com/release/ag?t=${Date.now()}`)
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

  const getAg = async () => {
    agFund.value = await fetchAg()
  }

  setInterval(getAg, 15000);

  onMounted(getAg)


  return {
    agFund
  }
}