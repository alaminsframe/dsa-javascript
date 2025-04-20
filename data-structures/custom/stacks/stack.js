//basic stack 

class stack {
    constructor() {
        this.stack = []
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.stack.length === 0){
            return 'stack is empty.'
        }

        return this.stack.pop();
    }

    peek(){
        if(this.stack.length === 0){
            return 'stack is empty.';
        }

        return this.stack[this.size()-1];
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