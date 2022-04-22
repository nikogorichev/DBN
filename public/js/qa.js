const form = document.querySelector('#form');
const quest = document.querySelector('#quest');
let count = 0

form.addEventListener('submit', async (event) => {
  event.preventDefault()
 
  count += 1
  const {method, action, answer} = event.target
  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      answer: answer.value,
    })
  })


  const data = await response.json();
  quest.innerHTML = data[count -1].quest;
})


