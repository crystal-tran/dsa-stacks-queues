import { IndexError } from "../common/ll";

// /**
//  * NodeStr: node for a singly-linked list of string.
//  *
//  * - val
//  * - next: next NodeStr or null
//  */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/** StackStr: can remove from the top or add to the top. */

class StackStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(initial: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const i of initial) this.push(i);
  }

  /** push(val): add val to top. Returns undefined. */
  push(val: string): void {
    const newNode = new NodeStr(val);
    // newNode = b

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      // console.log(this.length);
    } else {

      // ["b", "c"]

      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
    console.log("head", this.head, "next:", );
  }

  /** pop(): remove and return item from top.
   * Throws error if empty. */
  pop(): string {
    if(this.head === null){
      throw new IndexError;
    }

    let returnedVal : string | null = null;
    //[a, b]
    if(this.length === 1){
      returnedVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;

      // return returnedVal;
    } else {

    returnedVal = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    }

    return returnedVal;

  }

  /** peek(): return the value of first item. */
  peek():string {
    if(this.length === 0){
      throw new IndexError;
    }
    return this.head!.val;
  }

  /** peek(): return the value of top. */
  isEmpty():boolean {
    return this.length === 0;
 }
}


export { StackStr };
