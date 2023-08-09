import { defer } from "@defer/client";

const helloWorld = async () => {
  console.log("Hello World");
};

export default defer(helloWorld, {maxDuration: 332});
