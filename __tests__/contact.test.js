import Contact from './../src/js/contact.js';

describe ('Contact', () => {
  test('should create a new contact object', () => {
    let Laurie = new Contact("Laurie", "Waller", "555-5555");
    expect(Laurie).toEqual({firstName: "Laurie", lastName: "Waller", phoneNumber: "555-5555"});
  }); 

  test('should correctly out put a contacts full name', () => {
    let Lance = new Contact("Lance", "Bright", "555-5555");
    //let m = Lance.fullName();
    expect(Lance.fullName()).toEqual("Lance Bright");
  });
});
