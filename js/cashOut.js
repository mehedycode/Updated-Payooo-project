

document.getElementById('cash_out').addEventListener('click', function (event) {
  
event.preventDefault()

const cashOutAmount = inputValues('cash_out_amount')
const pinNumCashOut = inputValues('pin_number_cash_out')

  if (isNaN(cashOutAmount)) {
  
    return alert('please Enter Valid Amount')
  }
  

  if (pinNumCashOut === 1234) {
    
    const balance = textValues('current_balance')

         if ( balance < cashOutAmount) {
    return alert('insifiant balance')
  }

    const newBalance = balance - cashOutAmount



    document.getElementById('current_balance').innerText = newBalance


    const div = document.createElement('div')
    div.classList.add('bg-gray-300')
    div.innerHTML = `<h3>Cash-Out</h3>
                     <p>cashout: ${cashOutAmount}tk. Cureent Balance ${newBalance}</p>
    `
    document.getElementById('transsactions-history').appendChild(div)
  }

  else {
    alert('please enter currect pin')
 }

})