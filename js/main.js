// truy xuat chieu cao
// truy xuat can nang
// tinh toan bmi
// tinh toan ket qua
// hien bang thong bao

var btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
    var height = document.getElementById("height").value;
    height = Number.parseFloat(height);
    
    var weight = document.getElementById("weight").value;
    weight = Number.parseFloat(weight);
    
    var bmi = weight / (height * height);
    var result = "";

    if (bmi < 18.5) {
        result = "Thieu can";
    }
    else if(bmi <= 22.9) {
        result = "Binh thuong";
    }
    else if(bmi <= 24.9){
        result = "thua can";
    }
    else if(bmi <= 25.9) {
        result = "Beo phi I";
    }
    else if(bmi <= 34.9) {
        result = "Beo phi II";
    }
    else{
        result = "Beo phi III";
    }

    window.alert(result);
});