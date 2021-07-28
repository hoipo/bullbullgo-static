
const fetchAddReminder = (data) => new Promise((resolve, reject) => {
    fetch('https://9vwn51xvwi.execute-api.ap-southeast-1.amazonaws.com/production/reminder', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
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
  return {
    fetchAddReminder
  }
}