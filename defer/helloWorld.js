import { defer } from "@defer/client";

const helloWorld = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello World");
      resolve()
    }, 1000)
  })

};

export default defer(helloWorld, {maxDuration: 332});
