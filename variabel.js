var cat  = ['a','b','c'];
cat.forEach(
  function(item){
    console.log('meow '+item)
  }
)

var dog = {
  count :1,
  bark: function(){
    return 'guk!';

  },

}

console.log(dog.bark());
