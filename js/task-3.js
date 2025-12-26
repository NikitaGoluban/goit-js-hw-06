// Define the class
class StringBuilder {
  // Private field to store the value
  #value;

  // Constructor sets the initial value
  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Returns the current value
  getValue() {
    return this.#value;
  }

  // Adds a string to the end
  padEnd(str) {
    this.#value += str;
  }

  // Adds a string to the start
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Adds a string to both the start and the end
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// Test code (DO NOT CHANGE)
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
