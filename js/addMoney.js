

document.getElementById('add_money').addEventListener('click', function (event) {
  
  event.preventDefault()

  const addMoney = inputValues('add_money_amount')
  const pinNum = inputValues('pin_number')

  if (isNaN(addMoney)) {
    
    return alert('please enter valid amount')
  }
  
  if (pinNum === 1111) {
    
    const balance = textValues('current_balance')
    
    const newBalance = balance + addMoney

    document.getElementById('current_balance').innerText = newBalance

    const p = document.createElement('p')
    p.innerText = `balance added: ${addMoney}tk. current Balance: ${newBalance}`

    document.getElementById('transsactions-history').appendChild(p)
  }

  else {
    alert('Please Enter Current Pin')

  }
})