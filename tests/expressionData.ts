import { Results } from "../src/models";

export const braketsTest0: Results = {
  letterValResults: [
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: false },
        { letter: "C", val: false },
      ],
      result: false,
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: false },
        { letter: "C", val: true },
      ],
      result: false,
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: true },
        { letter: "C", val: false },
      ],
      result: false,
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: true },
        { letter: "C", val: true },
      ],
      result: true,
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: false },
        { letter: "C", val: false },
      ],
      result: true,
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: false },
        { letter: "C", val: true },
      ],
      result: true,
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: true },
        { letter: "C", val: false },
      ],
      result: true,
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: true },
        { letter: "C", val: true },
      ],
      result: true,
    },
  ],
  letters: ["A", "B", "C"],
};

export const braketsTest1 = {
  letterValResults: [
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: false },
        { letter: "C", val: false },
        { letter: "D", val: false }
      ],
      result: false
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: false },
        { letter: "C", val: false },
        { letter: "D", val: true }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: false },
        { letter: "C", val: true },
        { letter: "D", val: false }
      ],
      result: false
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: false },
        { letter: "C", val: true },
        { letter: "D", val: true }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: true },
        { letter: "C", val: false },
        { letter: "D", val: false }
      ],
      result: false
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: true },
        { letter: "C", val: false },
        { letter: "D", val: true }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: true },
        { letter: "C", val: true },
        { letter: "D", val: false }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: false },
        { letter: "B", val: true },
        { letter: "C", val: true },
        { letter: "D", val: true }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: false },
        { letter: "C", val: false },
        { letter: "D", val: false }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: false },
        { letter: "C", val: false },
        { letter: "D", val: true }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: false },
        { letter: "C", val: true },
        { letter: "D", val: false }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: false },
        { letter: "C", val: true },
        { letter: "D", val: true }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: true },
        { letter: "C", val: false },
        { letter: "D", val: false }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: true },
        { letter: "C", val: false },
        { letter: "D", val: true }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: true },
        { letter: "C", val: true },
        { letter: "D", val: false }
      ],
      result: true
    },
    {
      letterVals: [
        { letter: "A", val: true },
        { letter: "B", val: true },
        { letter: "C", val: true },
        { letter: "D", val: true }
      ],
      result: true
    }
  ],
  letters: ["A", "B", "C", "D"]
}


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
