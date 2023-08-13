import { SinglyLinkedListNode } from "../../../LinkedList/LinkedList.js";

// Intuition
// Reversing the linked list
// adding from back to front
// if the sum is more than 10 , carry over the remainder
// loop till the end of the linked list
// reverse back the linked list

function doubleIt(
  head: SinglyLinkedListNode<number> | null
): SinglyLinkedListNode<number> | null {
  if (head === null) return null;
  const newHead = reverseLinkedList(head);
  let currentNode = newHead;
  let remainder = 0;
  let resultNode = new SinglyLinkedListNode(-1);
  let resultHead = resultNode;
  while (currentNode || remainder > 0) {
    let value = remainder;
    if (currentNode) {
      value += currentNode.value * 2;
    }
    if (Math.floor(Math.log10(value)) + 1 > 1) {
      remainder = Math.floor(value / 10);
      value = value % 10;
    } else {
      remainder = 0;
    }
    resultNode.next = new SinglyLinkedListNode(value);
    resultNode = resultNode.next;
    if (currentNode) {
      currentNode = currentNode.next;
    }
  }
  return reverseLinkedList(resultHead.next!);
}

const reverseLinkedList = (head: SinglyLinkedListNode<number>) => {
  let prev: SinglyLinkedListNode<number> | null = null;
  let currentNode: SinglyLinkedListNode<number> | null = head;
  while (currentNode) {
    let next: SinglyLinkedListNode<number> | null = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return prev;
};

// Intuition
// Do not have to reverse the linked list
// Since this question is just about doubling the number ,
// if the number in node is < 5  or <= 4 : that means the double is <= 8
// else the sum maybe have two digits with the digit carry over is 1

const doubleIt2 = function (head: SinglyLinkedListNode<number> | null) {
  if (!head) return head;
  // if the next node value is more than 4 (meaning there would be a carry over)
  if (head.value > 4) {
    const newHead = new SinglyLinkedListNode(0);
    newHead.next = head;
    head = newHead;
  }
  for (
    let node: SinglyLinkedListNode<number> | null = head;
    node != null;
    node = node.next
  ) {
    node.value = (node.value * 2) % 10;
    let nextNode = node.next;
    if (nextNode && nextNode.value > 4) {
      node.value++;
    }
  }
  return head;
};

const linkedList: SinglyLinkedListNode<number> = {
  value: 9,
  next: { value: 9, next: { value: 9, next: null } },
};

console.log(doubleIt2(linkedList));
