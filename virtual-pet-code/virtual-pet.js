/*const cat = new Pet('') {
    name: Jasper,
    age: 
}

function Pet(name) {
    this.name = name;
  }

new Pet('Jasper');*/


//constructor funtion
function Pet (name) {
    this.name = name
  };
  
//object
  pet.prototype = {
    talk: function () {
      console.log('WOOF!')
    }
  }
  
module.exports = Pet