// script.js
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let room = null;
let player = null;
let board = Array(9).fill("");
let current = {};

const boardDiv = document.getElementById("board");
const statusDiv = document.getElementById("status");

// Render the game board
function renderBoard() {
  boardDiv.innerHTML = "";
  board.forEach((cell, i) => {
    const div = document.createElement("div");
    div.className = "cell";
    div.innerText = cell;

    // Disable clicks if it's not player's turn, room incomplete, or game over
    if (!current.players || current.players.length < 2 || checkWinner(board) || current.turn !== player) {
      div.style.pointerEvents = "none";
      div.style.opacity = 0.7;
    } else {
      div.onclick = () => makeMove(i);
      div.style.pointerEvents = "auto";
      div.style.opacity = 1;
    }

    boardDiv.appendChild(div);
  });
}

// Check for winner or draw
function checkWinner(b) {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let w of wins) {
    const [a,b1,c] = w;
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
  }
  return b.includes("") ? null : "draw";
}

// Make a move
function makeMove(i) {
  if (!room || board[i] || player !== current.turn || checkWinner(board)) return;

  board[i] = player;

  db.ref("rooms/" + room).update({
    board,
    turn: player === "X" ? "O" : "X"
  });
}

// Listen for room changes
function listenRoom() {
  db.ref("rooms/" + room).on("value", snap => {
    current = snap.val();
    if (!current) return;

    board = current.board || Array(9).fill("");
    renderBoard();

    if (!current.players || current.players.length < 2) {
      statusDiv.innerText = "Waiting for another player to join...";
      return;
    }

    const winner = checkWinner(board);
    if (winner) {
      statusDiv.innerText = winner === "draw" ? "Draw!" : winner + " wins!";
    } else {
      statusDiv.innerText = current.turn === player ? "Your turn" : "Opponent's turn";
    }
  });
}

// Join or create a room
function joinRoom() {
  room = document.getElementById("roomInput").value.trim();
  if (!room) return alert("Enter a room code!");

  const ref = db.ref("rooms/" + room);

  ref.once("value", snap => {
    const data = snap.val();

    if (!data) {
      // First player joins
      player = "X";
      ref.set({ board: Array(9).fill(""), turn: "X", players: ["X"] });
    } else if (data.players && data.players.length === 1) {
      // Second player joins
      player = "O";
      data.players.push("O");
      ref.update(data);
    } else if (data.players && data.players.length >= 2) {
      // Room full
      return alert("Room full! Choose another code.");
    }

    listenRoom();
    statusDiv.innerText = "You are " + player;
  });
}

// Reset the game
function resetGame() {
  if (!room) return;

  db.ref("rooms/" + room).once("value", snap => {
    const data = snap.val();
    if (!data || !data.players || data.players.length < 2) return;

    db.ref("rooms/" + room).update({
      board: Array(9).fill(""),
      turn: "X"
    });
  });
}

renderBoard();
