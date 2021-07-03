import { NumberNode, OperatorNode } from ".";
import { LetterVal, LetterValResults, LtgNode, Operators } from "../models";

export class TreeController {
  operators: string[] = ["^", "v"];
  nodes: LtgNode[] = [];
  head: OperatorNode;

  letters: string[] = [];

  constructor(exp: string) {
    const expression = exp.replace(/\s/g, ""); // remove spaces from expression
    const expressionArr = expression.split("");

    // convert all the letters into NumberNodes, leaving the Operators for now
    const expNumber: (NumberNode | string)[] = []; // array for the combo number nodes and operator strings
    for (let i = 0; i < expression.length; i++) {
      const curr = expressionArr[i];
      if (!this.operators.includes(curr)) {
        expNumber.push(new NumberNode({ letter: curr }));
        if (!this.letters.includes(curr)) this.letters.push(curr);
      } else expNumber.push(curr);
    }

    // convert operators into OperatorNodes
    let expOp: (LtgNode | string)[] = expNumber.map((e) => e); // new array containing the values from expNumber
    while (expOp.length > 1) {
      let i = 0;
      while (typeof expOp[i] !== "string") i++; // move i to the pos of the first op (the only strings left in expOp will be operators)
      const newArr: (LtgNode | string)[] = expOp.slice(0, i - 1); // make a new array, and start it with all the elements up to the number to the left of the operator
      newArr.push(
        new OperatorNode(
          expOp[i - 1] as LtgNode,
          expOp[i + 1] as LtgNode,
          expOp[i] as Operators
        )
      ); // convert number nodes + operator into an operator node and push to new array. Have to manually set types here, types should always be these types unless something has gone very wrong
      newArr.push(...expOp.slice(i + 2, expOp.length)); // push values after the new conversion
      expOp = newArr; // finally update expOp to be the new array
    }

    // expOp will only have one val now, which should be the head OperatorNode, so that can be set to head, and the tree is complete
    this.head = expOp[0] as OperatorNode;
  }

  calcResults() {
    const numDigits = Math.pow(2, this.letters.length);
    const binary = Array(this.letters.length).fill(false);
    const startLetterVal: LetterVal[] = this.letters.map((l, x) => {
      return {
        letter: l,
        val: binary[x],
      };
    });
    this.head.propogateVal(startLetterVal);
    const letterValResults: LetterValResults[] = [
      {
        letterVals: startLetterVal,
        result: this.head.calcRes(),
      },
    ];

    for (let i = 0; i < numDigits - 1; i++) {
      this.binInc(binary).map((b) => b);
      const letterVal: LetterVal[] = this.letters.map((l, x) => {
        return {
          letter: l,
          val: binary[x],
        };
      });
      this.head.propogateVal(letterVal);
      letterValResults.push({
        letterVals: letterVal,
        result: this.head.calcRes(),
      });
    }
    return letterValResults;
  }

  binInc(binary: boolean[]) {
    let setTrue = false;
    let i = binary.length - 1;

    while (!setTrue) {
      if (binary[i]) {
        binary[i] = false;
      } else {
        binary[i] = true;
        setTrue = true;
      }
      i--;
    }

    return binary; // not really needed, but it makes the function's perpose explicit
  }
}
