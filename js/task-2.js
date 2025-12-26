// Define the class
class Storage {
  // Declare private field
  #items;

  // Constructor receives initial array
  constructor(initialItems) {
    this.#items = [...initialItems]; // make a copy of the array
  }

  // Method to return the items
  getItems() {
    return this.#items;
  }

  // Method to add a new item
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Method to remove an item
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Test code (DO NOT MODIFY)
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());

storage.addItem("Droid");
console.log(storage.getItems());

storage.removeItem("Prolonger");
console.log(storage.getItems());

storage.removeItem("Scaner");
console.log(storage.getItems());
