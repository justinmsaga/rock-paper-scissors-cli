import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { play } from "./play.js";

yargs(hideBin(process.argv))
  .command(
    "start <element>",
    "start game with element",
    (yargs) => {
      return yargs.positional("element", {
        describe: "start the game with an element [rock|paper|scissors]",
        type: "string",
      });
    },
    (argv) => {
      play(argv.element, argv.mode);
    },
  )
  .option("mode", {
    alias: "m",
    type: "number",
    description: "0 -> regular |  greater than 0 -> fire/water",
    default: 0,
  })

  .parse();
