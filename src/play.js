//game board
const agent = {
  element: "",
  win: "",
  update(e, w) {
    this.element = e;
    this.win = w;
  },
};

function selector(max) {
  return Math.floor(Math.random() * max);
}

function updateAgent(mode) {
  //randon num generator between 1 - 90
  const selection = mode ? selector(101) : selector(91);
  console.log(selection);
  console.log(`mode: ${mode}`);
  if (mode) {
    if (selection < 33) {
      agent.update("fire", ["water"]);
    } else if (selection < 44) {
      agent.update("rock", ["paper", "fire"]);
    } else if (selection < 55) {
      agent.update("paper", ["scissors", "fire"]);
    } else if (selection < 66) {
      agent.update("scissors", ["rock", "fire"]);
    } else {
      agent.update("water", ["scissors", "rock", "paper"]);
    }
  } else {
    if (selection < 30) {
      agent.update("rock", ["paper"]);
    } else if (selection > 30 && selection < 60) {
      agent.update("paper", ["scissors"]);
    } else {
      agent.update("scissors", ["rock"]);
    }
  }
}

//compare and find winner
function winner(player, mode) {
  updateAgent(mode);

  return player === agent.element
    ? "draw"
    : agent.win.includes(player)
      ? "you win"
      : "you lose";
}

//game loop
export function play(element, mode) {
  console.log(`${winner(element, mode)}`);
  console.log(`agent: ${elementEmoji(agent.element)}`);
}

function elementEmoji(element) {
  return element === "rock"
    ? "🗿"
    : element === "paper"
      ? "🧻"
      : element === "scissors"
        ? "✂️"
        : element === "fire"
          ? "🔥"
          : "🌊";
}
