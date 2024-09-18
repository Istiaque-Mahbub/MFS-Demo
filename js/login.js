document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault(); // remember*** to prevent the browser from reload when use from
    

    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin-number').value;
    
    if(phoneNumber ==='5' && pin === '1234')
    {
        window.location.href = './home.html'
    }
    else{
        alert('Wrong phone number or pin')
    }
})