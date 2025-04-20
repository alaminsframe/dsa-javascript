//basic stack 

class stack {
    constructor() {
        this.stack = []
    }

    push(element){
        this.stack.push(element);
    }

    pop(element){
        if(this.isEmpty()){
            return 'stack is empty.'
        }

        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty.';
        }

        return this.stack[this.stack.length-1];
    }

    size(){
        return this.stack.length;
    }

    isEmpty(){
        return this.stack.length === 0;
    }
}