"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorNode = void 0;
const _1 = require(".");
class OperatorNode {
    constructor(lNode, rNode, op) {
        this.not = false; // will normally be not
        this.leftNode = lNode;
        this.rightNode = rNode;
        this.operator = op;
    }
    flipNot() {
        // not is not set in the constructor as it will not be known what not should be when creating the node. Also keeps the constructor cleaner
        this.not = !this.not;
    }
    // calculate the result based on the left and right node
    calcRes() {
        const leftVal = this.leftNode.calcRes();
        const rightVal = this.rightNode.calcRes();
        let returnVal;
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
    propogateVal(letterVal) {
        if (this.leftNode instanceof _1.NumberNode)
            this.leftNode.setVal(letterVal);
        else if (this.leftNode instanceof OperatorNode)
            this.leftNode.propogateVal(letterVal);
        if (this.rightNode instanceof _1.NumberNode)
            this.rightNode.setVal(letterVal);
        else if (this.rightNode instanceof OperatorNode)
            this.rightNode.propogateVal(letterVal);
    }
}
exports.OperatorNode = OperatorNode;
//# sourceMappingURL=OperatorNode.js.map