import React from "react";
import DemoParagraph from "./DemoParagraph";

const DemoOutput = (props) => {
  console.log("Running");
  return <DemoParagraph>{props.show ? "this is new" : ""}</DemoParagraph>;
};

export default React.memo(DemoOutput);
