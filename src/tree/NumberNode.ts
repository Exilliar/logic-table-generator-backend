import { LetterVal } from "../models";

export class NumberNode {
  val: boolean;
  letter: string;

  constructor(params: {
    val?: boolean;
    letter?: string;
  }) {
    if (params.val === true || params.val === false) this.val = params.val;
    else if (params.letter) this.letter = params.letter;
  }

  // sets val based on the letter/val combination array passed in, assumes that letter has been set
  setVal(letterVal: LetterVal[]) {
    this.val = letterVal.find(lv => lv.letter === this.letter).val;
  }
}
