//queue basic
class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove from the queue
    dequeue() {
      if (this.isEmpty()) return "Queue is empty";
      return this.items.shift();
    }
  
    // View the first item
    front() {
      return this.isEmpty() ? "Queue is empty" : this.items[0];
    }
  
    // Check if queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get size
    size() {
      return this.items.length;
    }
  
}

const q = new Queue();
q.enqueue("Alice");
q.enqueue("Bob");
q.enqueue("Charlie");
console.log(q.items);

q.dequeue(); // removes Alice
console.log(q.items);

//Big O

// Enqueue	push()	O(1)	Adding to the end of an array is fast.
// Dequeue	shift()	O(n)	Removing from the front requires shifting all elements.
// Peek	front()	O(1)	Accessing index 0 is direct.
// Size	.length	O(1)	Getting the length of the array is constant time.