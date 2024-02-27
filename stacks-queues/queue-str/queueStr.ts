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
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    const newNode = new NodeStr(val);

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    }

    this.tail!.next = newNode;
    this.tail = newNode
    this.length += 1;
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if(this.length === 0){
      throw new IndexError;
    }

    if(this.length === 1){
      this.head = null;
      this.tail = null;
      this.length -= 1;
    }
  }

  /** peek(): return the value of top. */
  peek(): string {
    return "x";
  }

  /** peek(): return the value of top. */
  isEmpty(): boolean {
    return false;
  }
}


export { QueueStr };
