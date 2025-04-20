//basic stack 

class stack {
    constructor() {
        this.stack = []
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return 'stack is empty.'
        }

        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty.';
        }

        return this.stack[this.size()-1];
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.stack.length;
    }
}

let stacks = new stack();

stacks.push(20)
stacks.push(10)
stacks.push(30)
console.log(stacks.stack);

stacks.pop()
console.log(stacks.peek());
console.log(stacks.size());



//Big O Notation
// push() = O(1)
// pop() = O(1)
// peek() = O(1)
// isEmpty() = O(1)
// size = O(1)

