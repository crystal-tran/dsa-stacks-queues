import { StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {
  const list = new StackStr;

  for(let i = str.length - 1; i >= 0; i--){
    list.push(str[i])
    console.log("list:", list._lst)
  }

const reversedList = list.join('');
return reversedList;

}

export { stringReversal };