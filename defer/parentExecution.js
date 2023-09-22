import "dotenv/config"
import {defer} from "@defer/client"
import helloWorld from "./helloWorld"

const parentFunction = async () => {
  console.log("Parent", process.env.DEFER_TOKEN)
  helloWorld(undefined, {metadata: {new: "NEW", new1: "NEW1", overriden: "OVER1"}}),
  await helloWorld(undefined, {metadata: {new3: "NEW3", new4: "NEW4", overriden: "OVER2"}})
}

export default defer(parentFunction)