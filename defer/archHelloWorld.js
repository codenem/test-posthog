import { defer } from "@defer/client";

const archived  = async () => {
  console.log("Hello World");
};

export default defer(archived);
