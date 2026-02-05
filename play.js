//game board
const agent = {
  element: "",
  win: "",
};

function updateAgent() {
  //randon num generator between 1 = 90
  const selection = Math.floor(Math.random() * (91 - 1) + 1);
  return selection < 30
    ? ["rock", "paper"]
    : selection > 30 && selection < 60
      ? ["paper", "scissors"]
      : ["scissors", "rock"];
}

//compare and find winner
function winner(player) {
  const playBall = updateAgent();

  //set agent element and winning based on random number
  agent.element = playBall[0];
  agent.win = playBall[1];

  return player === agent.element
    ? "draw"
    : player === agent.win
      ? "you win"
      : "you lose";
}

//game loop
export function play(element) {
  console.log(`${winner(element)}`);
  console.log(`agent: ${agent.element}`);
}
