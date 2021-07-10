import express from "express";
import { TreeController } from "./tree";
import { OperatorDesc } from "./models";
import cors from "cors";

const app = express();
const port = 8080; // default port to listen
app.use(cors());

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/calculate/:expression", (req, res) => {
  const controller = new TreeController(req.params.expression);
  const results = controller.calcResults();
  res.send(results);
});

app.get("/operators", (req, res) => {
  const operators: OperatorDesc[] = [{
    operator: "^",
    name: "AND",
    desc: "Returns true if A AND B are true",
    examples: ["1 ^ 1 ==> 1", "1 ^ 0 ==> 0"]
  }, {
    operator: "v",
    name: "OR",
    desc: "Returns true if A OR B are true (both can be true)",
    examples: ["1 v 1 ==> 1", "1 v 0 ==> 1", "0 v 0 ==> 0"]
  }, {
    operator: "¬",
    name: "NOT",
    desc: "Inverts the value. Symbol placed before the letter in the expression (eg. ¬A)",
    examples: ["¬1 ==> 0", "¬0 ==> 1"]
  }];
  res.send(operators);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
