import { Results } from "../src/models";

export const resultsTest0: Results = {
  letterValResults: [
    {
      letterVals: [
        {
          letter: "A",
          val: false,
        },
        {
          letter: "B",
          val: false,
        },
      ],
      result: false,
    },
    {
      letterVals: [
        {
          letter: "A",
          val: false,
        },
        {
          letter: "B",
          val: true,
        },
      ],
      result: true,
    },
    {
      letterVals: [
        {
          letter: "A",
          val: true,
        },
        {
          letter: "B",
          val: false,
        },
      ],
      result: true,
    },
    {
      letterVals: [
        {
          letter: "A",
          val: true,
        },
        {
          letter: "B",
          val: true,
        },
      ],
      result: true,
    },
  ],
  letters: ["A", "B"],
};
