"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorNode = void 0;
const _1 = require(".");
class OperatorNode {
    constructor(lNode, rNode, op) {
        this.leftNode = lNode;
        this.rightNode = rNode;
        this.operator = op;
    }
    // calculate the result based on the left and right node
    calcRes() {
        let leftVal;
        let rightVal;
        if (this.leftNode instanceof _1.NumberNode)
            leftVal = this.leftNode.val;
        else if (this.leftNode instanceof OperatorNode)
            leftVal = this.leftNode.calcRes();
        if (this.rightNode instanceof _1.NumberNode)
            rightVal = this.rightNode.val;
        else if (this.rightNode instanceof OperatorNode)
            rightVal = this.rightNode.calcRes();
        let returnVal;
        switch (this.operator) {
            case "^":
                returnVal = leftVal && rightVal;
                break;
            case "v":
                returnVal = leftVal || rightVal;
                break;
        }
        return returnVal;
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