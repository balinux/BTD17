
var a;
var b;

var calculator = function(angka1,angka2) {
this.a = angka1;
this.b = angka2;
  return this.a+this.b;
}

var tambah = new calculator(2,3);
console.log(tambah);
