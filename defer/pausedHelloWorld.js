import { defer } from "@defer/client";

const paused = async () => {
  console.log("Hello World");
};

export default defer(paused);

