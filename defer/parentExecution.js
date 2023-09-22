import {addMetadata, defer} from "@defer/client"
import helloWorld from "./helloWorld"

const parentFunction = async () => {
  console.log("Parent", process.env.DEFER_TOKEN)
  await Promise.all([
    addMetadata(helloWorld, {new: "NEW", new1: "NEW1", overriden: "OVER1"})(),
    addMetadata(helloWorld, {new3: "NEW3", new4: "NEW4", overriden: "OVER2"})()
  ])
}

export default defer(parentFunction)