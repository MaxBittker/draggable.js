import "./styles.css";
import {
  setDragStartCallback,
  setDragMoveCallback,
  setDragEndCallback
} from "./draggable.js";

// If you want to attach extra logic to the drag motions, you can use these callbacks:
// they are not required for the homework!
setDragStartCallback(function (element, x, y, scale, angle) {
  // console.log(element)
});
setDragMoveCallback(function (element, x, y, scale, angle) {
  // console.log(element)
});
setDragEndCallback(function (element, x, y, scale, angle) {
  // console.log(element)
});

// your code here
