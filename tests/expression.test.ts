import { NumberNode, OperatorNode, TreeController } from "../src/tree";
import { Results } from "../src/models";
import {
  resultsTest0,
  braketsTest0,
  braketsTest1,
  notTest0,
  notTest1,
  notTest2,
  notTest3,
  notTest4,
  resultsTest1,
} from "./expressionData";

describe("splitExpression", () => {
  it("should properly split 'AvB'", () => {
    const controller = new TreeController("AvB"); // just a random expression, does not matter what goes here for this test
    const actual = controller.splitExpression("AvB");
    const expected = ["A", "v", "B"];

    expect(actual).toEqual(expected);
  });
  it("should properly split 'A-->B'", () => {
    const controller = new TreeController("AvB"); // just a random expression, does not matter what goes here for this test
    const actual = controller.splitExpression("A-->B");
    const expected = ["A", "-->", "B"];

    expect(actual).toEqual(expected);
  });
});

describe("basic expresssion (one operator)", () => {
  it("should properly convert AvB --> head = ON(NN(A),NN(B),'v')", () => {
    const controller = new TreeController("AvB");
    const actual = controller.head;
    const expected = new OperatorNode(
      new NumberNode({ letter: "A", not: false }),
      new NumberNode({ letter: "B", not: false }),
      "v"
    );

    expect(actual).toEqual(expected);
  });
  it("should properly convert A^B --> head = ON(NN(A),NN(B),'^')", () => {
    const controller = new TreeController("A^B");
    const actual = controller.head;
    const expected = new OperatorNode(
      new NumberNode({ letter: "A", not: false }),
      new NumberNode({ letter: "B", not: false }),
      "^"
    );

    expect(actual).toEqual(expected);
  });
  it("should properly convert A-->B --> head = ON(NN(A),NN(B),'-->')", () => {
    const controller = new TreeController("A-->B");
    const actual = controller.head;
    const expected = new OperatorNode(
      new NumberNode({ letter: "A", not: false }),
      new NumberNode({ letter: "B", not: false }),
      "-->"
    );

    expect(actual).toEqual(expected);
  });
});

describe("more complex expressions (multiple operators)", () => {
  it("should properly convert AvB^C --> head = ON(ON(NN(A), NN(B), 'v'),NN(C), '^')", () => {
    const controller = new TreeController("AvB^C");
    const actual = controller.head;
    const expected = new OperatorNode(
      new OperatorNode(
        new NumberNode({ letter: "A", not: false }),
        new NumberNode({ letter: "B", not: false }),
        "v"
      ),
      new NumberNode({ letter: "C", not: false }),
      "^"
    );

    expect(actual).toEqual(expected);
  });
});

describe("Full expression test", () => {
  it("should fully calculate the result of AvB: A=1, B=0, res=1", () => {
    const controller = new TreeController("AvB");
    controller.head.propogateVal([
      {
        letter: "A",
        val: true,
      },
      {
        letter: "B",
        val: false,
      },
    ]);

    const actual = controller.head.calcRes();
    const expected = true;

    expect(actual).toBe(expected);
  });
});

describe("full results test", () => {
  it("should calc all results for AvB", () => {
    const controller = new TreeController("AvB");

    const actual = controller.calcResults();
    const expected: Results = resultsTest0;

    expect(actual).toEqual(expected);
  });
  it("should calc all results for A-->B", () => {
    const controller = new TreeController("A-->B");

    const actual = controller.calcResults();
    const expected: Results = resultsTest1;

    expect(actual).toEqual(expected);
  });
});

describe("brakets testing", () => {
  it("should generate correct head for (AvB)^C", () => {
    const controller = new TreeController("(AvB)^C");

    const actual = controller.head;
    const expected = new OperatorNode(
      new OperatorNode(
        new NumberNode({ letter: "A", not: false }),
        new NumberNode({ letter: "B", not: false }),
        "v"
      ),
      new NumberNode({ letter: "C", not: false }),
      "^"
    );

    expect(actual).toEqual(expected);
  });
  it("should fully calculate results for Av(B^C)", () => {
    const controller = new TreeController("Av(B^C)");

    const actual = controller.calcResults();
    const expected = braketsTest0;

    expect(actual).toEqual(expected);
  });
  it("should fully calculate results for (Av(B^C))vD", () => {
    const controller = new TreeController("(Av(B^C))vD");

    const actual = controller.calcResults();
    const expected = braketsTest1;

    expect(actual).toEqual(expected);
  });
});

describe("NOT tests", () => {
  it("should calculate Av¬B", () => {
    const controller = new TreeController("Av¬B");

    const actual = controller.calcResults();
    const expected = notTest0;

    expect(actual).toEqual(expected);
  });
  it("should calculate ¬AvB", () => {
    const controller = new TreeController("¬AvB");

    const actual = controller.calcResults();
    const expected = notTest1;

    expect(actual).toEqual(expected);
  });
  it("should calculate ¬(AvB)", () => {
    const controller = new TreeController("¬(AvB)");

    const actual = controller.calcResults();
    const expected = notTest2;

    expect(actual).toEqual(expected);
  });
  it("should calculate ¬(A^B)v(C^¬D) (just a random complexish expression)", () => {
    const controller = new TreeController("¬(A^B)v(C^¬D)");

    const actual = controller.calcResults();
    const expected = notTest3;

    expect(actual).toEqual(expected);
  });
  it("should calculate ¬(¬(AvB))", () => {
    const controller = new TreeController("¬(¬(AvB))");

    const actual = controller.calcResults();
    const expected = notTest4;

    expect(actual).toEqual(expected);
  });
});
