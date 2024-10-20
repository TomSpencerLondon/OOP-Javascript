class Stack {
    constructor() {
        this.items = []; // Initialize an empty array to hold stack items
    }

    // Push an item onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an item off the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty"); // Check if the stack is empty
        }
        return this.items.pop(); // Remove and return the top item
    }

    // Peek at the top item of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty"); // Check if the stack is empty
        }
        return this.items[this.items.length - 1]; // Return the top item
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0; // Return true if there are no items
    }

    // Get the size of the stack
    size() {
        return this.items.length; // Return the number of items in the stack
    }

    // Clear the stack
    clear() {
        this.items = []; // Reset the stack to an empty array
    }

    // Display the stack
    display() {
        return this.items; // Return the current items in the stack
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Output: 20
console.log(stack.pop());   // Output: 20
console.log(stack.size());  // Output: 1
console.log(stack.isEmpty()); // Output: false
console.log(stack.display()); // Output: [10]
stack.clear();
console.log(stack.isEmpty()); // Output: true
