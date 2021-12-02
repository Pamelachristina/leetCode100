/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Input: head = [1,2,3,4,5]
   Output: [5,4,3,2,1]

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    

    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for(let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }  
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)

myLinkedList.reverse()

console.log(myLinkedList) */

/**
 * What was submitted to leetcode and passed
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head
    let prev = null
    let next 
    while (current !== null){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}


 
