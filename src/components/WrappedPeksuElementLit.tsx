import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { PeksuElementLit } from "../elements/peksu-element-lit";

const WrappedPeksuElementLit = createComponent(
  React,
  "peksu-element-lit",
  PeksuElementLit,
  {
    onPeksuClick: "peksu-click",
  }
);

export default WrappedPeksuElementLit;
