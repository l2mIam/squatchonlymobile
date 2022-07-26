import { useState } from "react";
import { SQUATCHES } from "../shared/squatches";
import { DirectoryScreen } from "./DirectoryScreen";

const Main = () => {
  const [squatches, setSquatches] = useState(SQUATCHES);

  return (
    <DirectoryScreen squatches={squatches} />
  )
}

export default Main;