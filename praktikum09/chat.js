// menangkap elemen
const chatBox = document.getElementById('box');
const inputPesan = document.getElementById('pesan');
const btnKirim = document.getElementById('kirim');

// event yg terjadi ketika di klick
btnKirim.onclick = function(){
    const p = document.createElement("P");
    chatBox.appendChild(p);
    p.innerHTML = inputPesan.value;
}