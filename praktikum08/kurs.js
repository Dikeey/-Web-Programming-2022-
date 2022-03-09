// inisialisasi element
let uang = document.getElementById('uang');
let valas = document.getElementById('valas');
let hasil = document.getElementById('hasil');
let us = document.getElementById('us');
let singapore = document.getElementById('singapore');
let ringgit = document.getElementById('ringgit');
let yen = document.getElementById('yen');
let euro = document.getElementById('euro');
let riyal = document.getElementById('riyal');
let kurs = 0;

const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
}).format(money);
};

valas.onclick = () => {
    // validasi ketika bernilai null / empty
    if(uang.value == ''){
        alert('masukan nilai terlebih dahulu !');
    } 

    switch(valas.value){
        case us.value:
            kurs = uang.value * 9915;
            hasil.innerHTML = formatRupiah(kurs);
            break;
        case singapore.value:
            kurs = uang.value * 13427;
            hasil.innerHTML = formatRupiah(kurs);
            break;
        case euro.value:
            kurs = uang.value * 15888;
            hasil.innerHTML = formatRupiah(kurs);
            break;             
        case riyal.value:
            kurs = uang.value * 3592;
            hasil.innerHTML = formatRupiah(kurs);
            break;     
    }
}