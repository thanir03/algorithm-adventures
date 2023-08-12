class SinglyLinkedListNode<E> {
  value: E;
  next: SinglyLinkedList<E> | null = null;
  constructor(value: E) {
    this.value = value;
  }
}

class SinglyLinkedList<E> {
  head: SinglyLinkedListNode<E>;
  tail: SinglyLinkedListNode<E>;

  constructor(head: SinglyLinkedListNode<E>, tail: SinglyLinkedListNode<E>) {
    this.head = head;
    this.tail = tail;
  }
}

class DoublyLinkedListNode<E> {
  value: E;
  next: DoublyLinkedListNode<E> | null = null;
  prev: DoublyLinkedListNode<E> | null = null;
  constructor(value: E) {
    this.value = value;
  }
}

class DoublyLinkedList<E> {
  head: DoublyLinkedListNode<E>;
  tail: DoublyLinkedListNode<E>;

  constructor(head: DoublyLinkedListNode<E>, tail: DoublyLinkedListNode<E>) {
    this.head = head;
    this.tail = tail;
  }
}

export {
  DoublyLinkedList,
  DoublyLinkedListNode,
  SinglyLinkedList,
  SinglyLinkedListNode,
};
