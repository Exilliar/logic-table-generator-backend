"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberNode = void 0;
class NumberNode {
    constructor(params) {
        if (params.val === true || params.val === false)
            this._val = params.val;
        this.letter = params.letter;
        this.not = params.not;
    }
    // sets val based on the letter/val combination array passed in, assumes that letter has been set
    setVal(letterVal) {
        this._val = letterVal.find((lv) => lv.letter === this.letter).val;
    }
    get val() {
        // !== = xor, applies not to value
        return this._val !== this.not;
    }
    calcRes() {
        return this.val;
    }
}
exports.NumberNode = NumberNode;
//# sourceMappingURL=NumberNode.js.map