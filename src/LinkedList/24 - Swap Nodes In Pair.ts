import { SinglyLinkedList, SinglyLinkedListNode } from "./LinkedList.js";

function swapPairs(
  head: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  if (!head) return null;
  let previousNode: SinglyLinkedListNode<number> | null = null;
  let currentNode: SinglyLinkedListNode<number> | null = head;
  while (currentNode != null) {
    const newHead = reverseInPair(currentNode);
    if (previousNode === null) {
      head = newHead;
    } else {
      previousNode.next = newHead;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  return head;
}

const reverseInPair = (node: SinglyLinkedListNode<number>) => {
  const firstNode = node;
  const secondNode = node.next;
  if (!secondNode) return firstNode;
  const thirdNode = secondNode.next;
  secondNode.next = firstNode;
  firstNode.next = thirdNode;
  return secondNode;
};

let head: SinglyLinkedListNode<number> | null = new SinglyLinkedListNode(1);

let newHead = swapPairs(head);
let str = "";
console.log(newHead);
while (newHead != null) {
  str += newHead.value + "->";

  newHead = newHead.next;
}
console.log(str);
