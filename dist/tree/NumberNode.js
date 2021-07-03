"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberNode = void 0;
class NumberNode {
    constructor(params) {
        if (params.val === true || params.val === false)
            this.val = params.val;
        else if (params.letter)
            this.letter = params.letter;
    }
    // sets val based on the letter/val combination array passed in, assumes that letter has been set
    setVal(letterVal) {
        this.val = letterVal.find(lv => lv.letter === this.letter).val;
    }
}
exports.NumberNode = NumberNode;
//# sourceMappingURL=NumberNode.js.map