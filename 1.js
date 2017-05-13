name  ='';

person = function(name){
  this.name = name;
}

var p = new person("Rio")
var p2 = new person("linda")
console.log(p2.name)
