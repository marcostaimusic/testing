function Animal()
{
this.name="name";
this.species='species'
if(this.constructor === Animal){
throw new Error("Impossible to create instance of an Abstract Class");
}
};

Animal.prototype.display=function(){
return `Its name is ${this.name} and it is a ${this.species}`;
}

function Cat(name, species)
{
this.name=name;
this.species = 'cat'
}

Cat.prototype=Object.create(Animal.prototype);
var cat = new Cat("Mickey");
console.log(cat.display());


module.exports = { Animal, Cat }

