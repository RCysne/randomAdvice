const adviceId = document.querySelector('#main-text p span')
const adviceText = document.querySelector('#main-text h2')

const btn = document.querySelector('#btn-change')

const getAdviceData = async function (slip_id) {
  const url = `https://api.adviceslip.com/advice/${slip_id}`

  const res = await fetch(url)
  const data = await res.json()

  return (adviceText.innerText = data.slip.advice)(
    (adviceId.innerText = data.slip.id)
  )
}

function randomAdviceId() {
  let randomNumber = Number(Math.round(Math.random() * 100))

  getAdviceData(randomNumber)
}

btn.addEventListener('click', randomAdviceId)
