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

/** QueueStr: can remove from start or add to end */

class QueueStr {

  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(initial: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const i of initial) this.enqueue(i);
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    const newNode = new NodeStr(val);

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {

    this.tail!.next = newNode;
    this.tail = newNode
    this.length += 1;
    }
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if(this.length === 0){
      throw new IndexError;
    }

    let returnedVal : string | null = null;
    returnedVal = this.head!.val;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
    }

    this.length -=1;
    return returnedVal

  }

  /** peek(): return the value of top. */
  peek(): string {
    if(this.length === 0){
      throw new IndexError;
    }

    return this.head!.val;
  }

  /** peek(): return the value of top. */
  isEmpty(): boolean {
    console.log("this.length:", this.length);
    return (this.length === 0);
  }
}


export { QueueStr };
