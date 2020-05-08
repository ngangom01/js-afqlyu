const MyStack = class {
  constructor() {
    this.data = {};
    this.index = 0;
  }

  push(item) {
    this.data[this.index] = item;
    this.index++;
    return this.index;
  }

  pop() {
    const item = this.data[this.index - 1]
    delete this.data[this.index - 1];
    this.index --;
    return item;
  }

  peek() {
    return this.data[this.index - 1]
  }

  size() {
    return this.index;
  }

  print() {
    console.log(this.data);
  }
}

const stack = new MyStack();

stack.push('99'); // { 0 : 'a' }
stack.print(); 
stack.push('abcd'); // { 0: 'a', 1: 'b' }
stack.print();
stack.pop(); // { 0 : 'a' }
stack.print();
console.log(stack.peek()); // 'a'
