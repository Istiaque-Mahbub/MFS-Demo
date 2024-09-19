document.getElementById('btn-add-money').addEventListener('click',function(event){
event.preventDefault();
const addMoneyInput = document.getElementById('input-add-money').value;
const pinNumberInput = document.getElementById('input-pin-number').value;
const balance = document.getElementById('account-balance').innerText;
const balanceNumber = Number(balance);
const addMoneyNumber = Number(addMoneyInput);
if(pinNumberInput==='1234' && addMoneyNumber>0)
{
   
   const newBalance =  balanceNumber + addMoneyNumber ;
   document.getElementById('account-balance').innerText = newBalance;
   
   // add to history
   const p = document.createElement('p')
   p.innerText = `Added: ${addMoneyNumber} tk. balance: ${newBalance}`
   
   document.getElementById('transaction-container').appendChild(p)
}else{
    alert('wrong pin or invalid input')
}
})