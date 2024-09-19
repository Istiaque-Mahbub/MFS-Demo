document.getElementById('btn-add-money').addEventListener('click',function(event){
event.preventDefault();
const addMoneyInput = document.getElementById('input-add-money').value;
const pinNumberInput = document.getElementById('input-pin-number').value;
if(pinNumberInput==='1234')
{
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = Number(balance);
    const addMoneyNumber = Number(addMoneyInput);
   const newBalance =  balanceNumber + addMoneyNumber ;
   document.getElementById('account-balance').innerText = newBalance;
   console.log(newBalance)
}else{
    alert('wrong pin')
}
})