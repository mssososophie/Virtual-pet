//this is a constructor function
function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
};
//prototype properties in an object are the items seperated by commas within this.
Pet.prototype = {
  changeName(Pet) {
    this.name = name;
  },
  growUp(Pet) {
    this.age += 1;
    this.hunger * 5;
    this.fitness -= 3;
  }
}

//creating a new pet
const cat = new Pet('Kitty')


/** a shared prototype modifies the instance it's called on. this below creates a walk method
pet.prototype = {
    walk (){
        this.fitness +=5
    }
}

//calling the unique pets info
cat.fitness()
//this will show you the fitness level of the pet **/

//create a method of growup on the prototype
module.exports = Pet