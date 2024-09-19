function sectionById(id){
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('transactions-form').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}