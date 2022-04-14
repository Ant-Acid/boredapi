document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
//   const choice = document.querySelector('input').value
  const url = 'https://www.boredapi.com/api/activity'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h1').innerText = data.activity
        // document.querySelector('img').src = data.img
        document.querySelector('h2').innerText = data.participants + " Participant/s"
        document.querySelector('#price').innerText = data.price + " Price Factor"
        document.querySelector('#type').innerText = data.type + " Activity Type"
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}