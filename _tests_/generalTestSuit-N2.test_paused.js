const Persona = require('../app/Classes_Arrow_Functions_N2_ex2_intent2')
const { Animal, Cat } = require('../app/Classes_Arrow_Functions_N3_ex1')
jest.mock('../app/Classes_Arrow_Functions_N2_ex2_intent2')


// // Classes & Arrow Functions - Nivell 2 Exercici 2
describe('Test for Persona class', () => {
  beforeEach(() => {
      // Clear all instances and calls to constructor and all methods:
      Persona.mockClear();
    });
    
    it('expect the constructor to have been called', () => {
      let person = new Persona('a')
      expect(Persona).toHaveBeenCalledTimes(1);
    });


    test('check decirNombre call', () => {
      let person = new Persona('a');
      let spy = jest.spyOn(person, 'decirNombre').mockImplementation(() => 'Tom');

      expect(person.decirNombre()).toBe("Tom");

      // unnecessary in this case, putting it here just to illustrate how to "unmock" a method
      // spy.mockRestore();
  });

})


//Classes & Arrow Functions Nivell 3 - Exercici 1.
describe('Test for Animal and Cat classes', ()=> {
  
  it('should work', ()=>{
    var cat = new Cat("Mickey");
    expect(cat.display()).toBe("Its name is Mickey and it is a cat")
  })
  
  it('should call Animal.display', ()=>{
    var cat = new Cat("Mickey");
    Animal.prototype.display = jest.fn()
    cat.display('a')
    expect(Animal.prototype.display).toHaveBeenCalledTimes(1)
  })
 
  it('should throw if constructor Animal called', ()=>{
    expect(()=>{new Animal()}).toThrow()
  })
  })