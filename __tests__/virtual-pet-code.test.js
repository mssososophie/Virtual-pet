const Pet = require ('../virtual-pet-code/virtual-pet')

test('Pet has a name', () => {   
   let fred;
   fred = new Pet('fred');
   expect(fred.name).toEqual('fred');
});

/**test('growUp', () => {
    it('increments the age by 1',() => {
        let fred;
        fred = new Pet('fred');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
});**/  

test('growUp increments the age by 1', () => {
        let fred;
        fred = new Pet('fred');
        fred.growUp();
        expect(fred.age).toEqual(1);
});