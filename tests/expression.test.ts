import { NumberNode, OperatorNode, TreeController } from "../src/tree";
import { Results } from "../src/models";
import { resultsTest0, braketsTest0, braketsTest1 } from "./expressionData";

describe("basic expresssion (one operator)", () => {
  it("should properly convert AvB --> head = ON(NN(A),NN(B),'v')", () => {
    const controller = new TreeController("AvB");
    const actual = controller.head;
    const expected = new OperatorNode(
      new NumberNode({ letter: "A" }),
      new NumberNode({ letter: "B" }),
      "v"
    );

    expect(actual).toEqual(expected);
  });
  it("should properly convert A^B --> head = ON(NN(A),NN(B),'^')", () => {
    const controller = new TreeController("A^B");
    const actual = controller.head;
    const expected = new OperatorNode(
      new NumberNode({ letter: "A" }),
      new NumberNode({ letter: "B" }),
      "^"
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
        new NumberNode({ letter: "A" }),
        new NumberNode({ letter: "B" }),
        "v"
      ),
      new NumberNode({ letter: "C" }),
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
});

describe("brakets testing", () => {
  it("should generate correct head for (AvB)^C", () => {
    const controller = new TreeController("(AvB)^C");

    const actual = controller.head;
    const expected = new OperatorNode(
      new OperatorNode(
        new NumberNode({ letter: "A" }),
        new NumberNode({ letter: "B" }),
        "v"
      ),
      new NumberNode({ letter: "C" }),
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
