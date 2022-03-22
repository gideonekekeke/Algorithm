class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }

}


class BinaryTreeSearch{
    constructor(){
        this.root = null
    }

    push(value){
        const newNode = new Node(value)

    if(!this.root){
        this.root = newNode
        return this
    }

    let current = this.root

    if(current <= current.left){
        if(!current.left){
            current.left = newNode

            return this
        }

        current.left = current
    }
    else if(value >=  current.right){
    if(!current.right){
        current.right = newNode

        return this
    }
    current.right = current
    }

    }
}


const searchValue = new BinaryTreeSearch

searchValue.push(23)
searchValue.push(2)
searchValue.push(10)

console.log(searchValue)




class NodeBuild{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class Model {
    constructor(){
        this.root = null
    }
    push(value){
        let newNode = new NodeBuild(value)
       if(!this.root){
           this.root = newNode

           return this
       }

       let current = this.root

       if(current < current.lrft){
           if(!current.left){
               current.left =  newNode

               return this
           }
       }

       else if(value > current.right){
         if(!current.right){
             current.right = newNode

             return this
         }
         current.right = current
       }
    }
}