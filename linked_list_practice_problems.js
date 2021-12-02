/* Node {val, next}
given a singly linked list and a number, find the node of the given number

1->2->3->6->8->7->9, 8*/

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
       let newNode = new Node(value)
       this.head = newNode
       //this.tail = this.head
        //this.length = 1
    }

    push(value){
        let newNode = new Node(value)
        this.next = newNode
        
        // if (this.length === 0) {
        //     this.head = newNode
        //     this.tail = newNode
        // } else {
        //     this.tail.next = newNode
        //     this.tail = newNode
        // }
        //this.length++
        return this
    }
   
}

class LinkedListProblems {
    constructor(){
        this.myLinkedList = new LinkedList(1)
        myLinkedList.push(2)
        myLinkedList.push(3)
        myLinkedList.push(6)
        myLinkedList.push(8)
        myLinkedList.push(7)
        myLinkedList.push(9)
    }
 

    findLength(){
        let counter = 0
        let current = head
        console.log(current.value)
        while(current != null){
            //console.log(current.value)
            counter++
            current = current.next
        }
        return counter
    }

    add(value){
        this.head.push(value)
    }
}






let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(6)
myLinkedList.push(8)
myLinkedList.push(7)
myLinkedList.push(9)

let problems = new LinkedListProblems()
let length = problems.findLength()


console.log(length)
