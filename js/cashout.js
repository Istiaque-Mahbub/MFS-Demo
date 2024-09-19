document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutPIn = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut,cashOutPIn)

    if(cashOutPIn==='1234')
    {
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)
        const balanceNumber = Number(balance);
        const cashOutNumber = Number(cashOut);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;

    }else{
        alert('wrong pin try again later')
    }
})