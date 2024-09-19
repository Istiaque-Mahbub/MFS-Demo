document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutPIn = document.getElementById('input-cash-out-pin').value;
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = Number(balance);
        const cashOutNumber = Number(cashOut);

    if(cashOutPIn==='1234' && balanceNumber>= cashOutNumber)
    {
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;

        const p = document.createElement('p')
   p.innerText = `Cash Out: ${cashOutNumber} tk. balance: ${newBalance}`
   
   document.getElementById('transaction-container').appendChild(p)
        

    }else{
        alert('wrong pin or insufficient balance try again later')
    }
})