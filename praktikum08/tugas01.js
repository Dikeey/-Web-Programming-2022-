const phi = 3.14;
var luas;
var keliling;
var r;
var d;
function hitung() {
	r = parseFloat(document.getElementById("ipt_r").value);
	luas = phi * Math.pow(r,2);
	d = 2 * r;
	keliling = phi * d;
	document.getElementById('opt_luas').value = luas;
	document.getElementById('opt_keliling').value = keliling;
}