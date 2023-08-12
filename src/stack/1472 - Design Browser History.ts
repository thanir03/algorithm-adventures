// Design Browser History

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

const browserHistory = new BrowserHistory("leetcode");
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
