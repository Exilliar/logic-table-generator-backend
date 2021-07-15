import { NumberNode, OperatorNode } from "../tree";

// export type LtgNode = NumberNode | OperatorNode;
export interface LtgNode {
  calcRes: () => boolean;
}
