import AddressBook from './../src/js/address-book.js';
import Contact from './../src/js/contact.js';

describe ('AddressBook', () => {
    test('should correctly create an addressbook object with contact and currentId', () => {
      const address = new AddressBook();
      expect(address.contacts).toEqual({});
      expect(address.currentId).toEqual(0);
    });
    test('should correctly increase the currentId by one', () => {
      const anoAddy = new AddressBook();
      anoAddy.assignId();
      expect(anoAddy.currentId).toEqual(1);
    });
    
    test('should correctly store a new contact to the addressbook', () => {
      const addBook = new AddressBook();
      const Joe = new Contact("Joe", "Dirt", "555-5555");
      addBook.assignId();
      addBook.addContact(Joe);
      expect(addBook.currentId).toEqual(2);
      expect(addBook.contacts['2'].firstName).toEqual("Joe");
      expect(addBook.contacts['2'].lastName).toEqual("Dirt");
      expect(addBook.contacts['2'].phoneNumber).toEqual("555-5555");
    });

    test('should correctly return the contact that matched the id passed in', () => {
      const addBook2 = new AddressBook();
      const Sally = new Contact("Sally", "Smith", "222-2222");
      addBook2.assignId();
      addBook2.addContact(Sally);
      expect(addBook2.findContact(2)).toEqual({firstName: "Sally", lastName: "Smith", phoneNumber: "222-2222", id: 2}); 
    });
  });

//   AddressBook.prototype.findContact = function(id) {
//   if (this.contacts[id] != undefined) {
//     return this.contacts[id];
//   }
//   return false;
// }