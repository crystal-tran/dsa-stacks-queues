import { StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {
  const stack = new StackStr();
  // [] epecting each element to be a string

  for(let i = str.length - 1; i >= 0; i--){
    stack._lst.push(str[i])
    console.log("list:", stack._lst)
  }

const reversedList = stack._lst.join('');
return reversedList;

}

export { stringReversal };