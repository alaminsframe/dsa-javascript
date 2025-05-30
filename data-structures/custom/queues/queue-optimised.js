
class  Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear -this.front
    }

    print(){
        console.log(this.items);
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size());
queue.print()
queue.dequeue()
queue.print()



// Time Complexity
// enqueue	O(1)
// dequeue	O(1)
// isEmpty	O(1)
// peek	O(1)
// size	O(1)
// print	O(n)