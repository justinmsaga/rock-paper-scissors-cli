//randon num generator between 1 = 90
const selection = Math.floor(Math.random() * (91 - 1) + 1);

//placeholder for elements
let agentElement = "";
let win = "";

//set agent element and winning based on random number
if (selection < 30) {
  agentElement = "rock";
  win = "paper";
} else if (selection > 30 && selection < 60) {
  agentElement = "paper";
  win = "scissors";
} else {
  agentElement = "scissors";
  win = "rock";
}

//compare and find winner
function winner(player) {
  if (player === agentElement) {
    return "draw";
  } else {
    return player === win ? "you win" : "you lose";
  }
}

//game loop
export function play(element) {
  console.log(`agent element: ${agentElement}`);
  console.log(`${winner(element)}`);
}
