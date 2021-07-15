import { LtgNode, Operators, LetterVal } from "../models";
import { NumberNode } from ".";

export class OperatorNode implements LtgNode {
  operator: Operators;
  leftNode: LtgNode;
  rightNode: LtgNode;
  not = false; // will normally be not

  constructor(lNode: LtgNode, rNode: LtgNode, op: Operators) {
    this.leftNode = lNode;
    this.rightNode = rNode;

    this.operator = op;
  }

  flipNot() {
    // not is not set in the constructor as it will not be known what not should be when creating the node. Also keeps the constructor cleaner
    this.not = !this.not;
  }

  // calculate the result based on the left and right node
  calcRes(): boolean {
    const leftVal = this.leftNode.calcRes();
    const rightVal = this.rightNode.calcRes();

    let returnVal: boolean;

    switch (this.operator) {
      case "^":
        returnVal = leftVal && rightVal;
        break;
      case "v":
        returnVal = leftVal || rightVal;
        break;
      case "-->":
        returnVal = !(leftVal === true && rightVal === false);
    }

    // !== this.not = xor to apply not
    return returnVal !== this.not;
  }

  // function to set the vals of NumberNodes based on their letters
  propogateVal(letterVal: LetterVal[]) {
    if (this.leftNode instanceof NumberNode) this.leftNode.setVal(letterVal);
    else if (this.leftNode instanceof OperatorNode)
      this.leftNode.propogateVal(letterVal);

    if (this.rightNode instanceof NumberNode) this.rightNode.setVal(letterVal);
    else if (this.rightNode instanceof OperatorNode)
      this.rightNode.propogateVal(letterVal);
  }
}
