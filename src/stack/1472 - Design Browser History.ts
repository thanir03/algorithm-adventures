// Design Browser History
import {
  DoublyLinkedListNode,
  DoublyLinkedList,
} from "../LinkedList/LinkedList.js";
// Very inefficient
// Need to iterate through stack to go back items
class BrowserHistory {
  forwardStack: Array<string>;
  backwardStack: Array<string>;
  currentURL: string;
  constructor(homepage: string) {
    this.forwardStack = [];
    this.backwardStack = [];
    this.currentURL = homepage;
  }

  visit(url: string) {
    this.forwardStack.length = 0;
    this.backwardStack.push(this.currentURL);
    this.currentURL = url;
  }

  back(step: number) {
    this.forwardStack.push(this.currentURL);
    this.currentURL = "";
    let i = 0;
    while (this.backwardStack.length > 0 && i < step) {
      const poppedUrl = this.backwardStack.pop()!;
      this.forwardStack.push(poppedUrl);
      i++;
    }
    this.currentURL = this.forwardStack.pop()!;
    console.log(this.currentURL);
    return this.currentURL;
  }

  forward(step: number) {
    this.backwardStack.push(this.currentURL);
    this.currentURL = "";
    let i = 0;
    while (this.forwardStack.length > 0 && i < step) {
      this.backwardStack.push(this.forwardStack.pop()!);
      i++;
    }

    this.currentURL = this.backwardStack.pop()!;
    console.log(this.currentURL);
    return this.currentURL;
  }
}

// LinkedList

class BrowserHistory2 {
  currentURL: DoublyLinkedListNode<string>;
  urlList: DoublyLinkedList<string>;
  constructor(url: string) {
    this.currentURL = new DoublyLinkedListNode<string>(url);
    this.urlList = new DoublyLinkedList(this.currentURL, this.currentURL);
    this.currentURL.next = null;
    this.currentURL.prev = null;
  }

  visit(url: string) {
    const newURL: DoublyLinkedListNode<string> =
      new DoublyLinkedListNode<string>(url);
    this.currentURL.next = newURL;
    newURL.prev = this.currentURL;
    newURL.next = null;
    this.currentURL = newURL;
    this.urlList.tail = this.currentURL;
  }

  back(steps: number): string {
    let i = 0;
    while (this.currentURL.prev != null && i < steps) {
      this.currentURL = this.currentURL.prev;
      i++;
    }
    console.log(this.currentURL.value);
    return this.currentURL.value;
  }

  forward(steps: number) {
    let i = 0;
    while (this.currentURL.next != null && i < steps) {
      this.currentURL = this.currentURL.next;
      i++;
    }
    console.log(this.currentURL.value);
    return this.currentURL.value;
  }
}

const browserHistory = new BrowserHistory2("leetcode");
browserHistory.visit("google");
browserHistory.visit("facebook");
browserHistory.visit("youtube");
browserHistory.back(1);
browserHistory.back(1);
browserHistory.forward(1);
browserHistory.visit("linkedin");
browserHistory.forward(2);
browserHistory.back(2);
browserHistory.back(7);
