class QueueWithStacks {
    stack1 : number[] = [];
    stack2 : number[] = [];

    push(value : number){
        this.stack1.push(value);
    }

    pop(){
        if(this.empty()) return null;
        while(this.stack1.length > 1){
            const value = this.stack1.pop()!;
            this.stack2.push(value);
        }
        const value = this.stack1.pop()!;
        while(this.stack2.length > 0){
            const value = this.stack2.pop()!;
            this.stack1.push(value);
        }
        console.log(this.stack1);
        console.log(this.stack2);
        return value;
    }

    peek(){
        if(this.empty()) return null;
        return this.stack1[0];
    }

    empty(){
        return this.stack1.length === 0;
    }
}

const queue = new QueueWithStacks();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log(queue.pop());