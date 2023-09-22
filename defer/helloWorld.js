import { defer } from "@defer/client";

const helloWorld = async (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Hello ${name}`);
      resolve()
    }, 1000)
  })

};

export default defer(helloWorld, {maxDuration: 332});
