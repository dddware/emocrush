import config from "../config";
import Board from "./Board.html";

const app = new Board({
  target: document.body,
  data: config
});

export default app;
