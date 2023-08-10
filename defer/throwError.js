import { defer } from "@defer/client";

const throwError = async () => {
  throw("MAMEN");
};

export default defer(throwError, {retry: 2});
