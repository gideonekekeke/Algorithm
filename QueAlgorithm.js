class Queue{
    constructor(){
        this.storage = [];
        this.count = 0
    }
    

    push(value){
        this.storage[this.count] = value
        this.count++
    }

    push2(value){
        let data = this.storage
        data.push(value)
    }

    size(){
        let data = this.storage
        return data.length
    }

    print(){
        return this.storage
    }
}

const newQue = new Queue()

newQue.push('giddy')
newQue.push('sam')
newQue.push('nelson')

console.log(newQue.print())