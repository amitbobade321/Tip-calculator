let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let people = document.querySelector('#people').value;

    //validate
    if(totalBill === '' || tipPercent == 0 || people == 0){
        alert('Please enter values');
        return;
    }
    //calculate
    let total = (totalBill * tipPercent) / people;
    total = total.toFixed(2);
    
    document.getElementById('tip').innerHTML = total;



})


