import { delay, defer } from "@defer/client"

import helloWorld from "./helloWorld"

const basicAuth = (username, password) => {
  const credentials = btoa(`${username}:${password}`);
  return `Basic ${credentials}`;
};

const reschedule = async () => {
  const { id: executionID } = await delay(helloWorld, "1h")("John")

  try {
    const response = await fetch(`${process.env.DEFER_ENDPOINT}/public/v1/executions/${executionID}/reschedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuth("", process.env.DEFER_TOKEN),
      },
      body: JSON.stringify({
        schedule_for: new Date(new Date().getTime() + 30000)
      })
    })
    console.log(await response.text())
  } catch(error) {
    console.log(error)
  }
}

export default defer(reschedule)
