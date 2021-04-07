import React from "react";
import "./Button.css";

export default function Button({ children, outline, size }) {
  let classes = "";

  // seeing  if the buttons in stories file has the outline prop
    if (outline) classes += "outline ";
    classes += size;
  return <button className={classes}>{children}</button>;
}
