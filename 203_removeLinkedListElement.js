/**
 * Given the head of a linked list and an integer val, 
 * remove all the nodes of the linked list that has Node.val == val, and return the new head.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let temp = new ListNode(-1)
  temp.next = head
  let currentNode = head
  let prevNode = temp
 
  while(currentNode){
    if(currentNode.val == val){
        prevNode.next = currentNode.next
        currentNode = currentNode.next
       
    } else{
        prevNode = currentNode
        currentNode = currentNode.next
    }
     
  }
  return temp.next
 

};
console.log(removeElements)
