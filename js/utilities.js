
function inputValues(id) {
  
  const inputV = document.getElementById(id).value
  return parseFloat(inputV)

  
}

function textValues(id) {
  
  const textV = document.getElementById(id).innerText
  return parseFloat(textV)
}


function swith(id) {
  
  document.getElementById('add_money_form').classList.add('hidden')
  document.getElementById('cash_out_form').classList.add('hidden')
  document.getElementById('transsactions-section').classList.add('hidden')

  document.getElementById(id).classList.remove('hidden')
}