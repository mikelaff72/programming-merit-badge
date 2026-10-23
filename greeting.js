const readline = require("node:readline");
const { stdin, stdout } = require("node:process");

const salutations = {
  morning: "Good morning",
  afternoon: "Good afternoon",
  evening: "Good evening",
};

async function main() {
  const prompt = readline.createInterface({ input: stdin, output: stdout });
  stdout.write("Choose morning, afternoon, or evening: ");

  for await (const answer of prompt) {
    const period = answer.trim().toLowerCase();

    if (!Object.hasOwn(salutations, period)) {
      console.log("Please enter morning, afternoon, or evening.");
      stdout.write("Choose morning, afternoon, or evening: ");
      continue;
    }

    const now = new Date();
    const currentTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const currentDate = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    console.log(`${salutations[period]}! Current time: ${currentTime} | Date: ${currentDate}`);
    prompt.close();
    return;
  }
}

main();