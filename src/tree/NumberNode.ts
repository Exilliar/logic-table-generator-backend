import { LetterVal } from "../models";

export class NumberNode {
  _val: boolean;
  letter: string;
  not: boolean;

  constructor(params: {
    val?: boolean;
    letter: string;
    not: boolean;
  }) {
    if (params.val === true || params.val === false) this._val = params.val;
    this.letter = params.letter;
    this.not = params.not;
  }

  // sets val based on the letter/val combination array passed in, assumes that letter has been set
  setVal(letterVal: LetterVal[]) {
    this._val = letterVal.find(lv => lv.letter === this.letter).val;
  }

  get val() {
    // !== = xor, applies not to value
    return this._val !== this.not;
  }
}
