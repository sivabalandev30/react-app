import React, { useContext } from "react";
import { UserContext } from "../App";

function CompB() {
  const user = useContext(UserContext);
  return <div>{user}</div>;
}

export default CompB;
