const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}
function findMid(list) {
  let midNode = null;
  //Write your code here
  // You have to return the middle node itself not its value
  if (list.isEmpty()){
      return null
  }
  //else get pointer to head
  let slowerNode = list.getHead()
  let fasterNode = list.getHead()
  if(slowerNode.nextElement == null){
      return slowerNode
  }
  while (slowerNode.nextElement != null && fasterNode.nextElement != null && fasterNode.nextElement.nextElement != null){
      slowerNode = slowerNode.nextElement
      fasterNode = fasterNode.nextElement.nextElement
  }


  return slowerNode;
}

let list = new LinkedList();
list.insertAtHead(22);
list.insertAtHead(21);
list.insertAtHead(10);
list.insertAtHead(14);
list.insertAtHead(7);

list.printList();

console.log(findMid(list).data)