<script>
import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';

// Deklarasi variabel
const boardSize = 10;
const pieces = [
  { type: 'pawn', color: 'black', x: 0, y: 0 },
  { type: 'pawn', color: 'black', x: 1, y: 0 },
  { type: 'pawn', color: 'black', x: 2, y: 0 },
  { type: 'pawn', color: 'black', x: 3, y: 0 },
  { type: 'pawn', color: 'black', x: 4, y: 0 },
  { type: 'pawn', color: 'black', x: 5, y: 0 },
  { type: 'pawn', color: 'black', x: 6, y: 0 },
  { type: 'pawn', color: 'black', x: 7, y: 0 },
  { type: 'pawn', color: 'black', x: 8, y: 0 },
  { type: 'pawn', color: 'black', x: 9, y: 0 },
  { type: 'pawn', color: 'white', x: 0, y: 9 },
  { type: 'pawn', color: 'white', x: 1, y: 9 },
  { type: 'pawn', color: 'white', x: 2, y: 9 },
  { type: 'pawn', color: 'white', x: 3, y: 9 },
  { type: 'pawn', color: 'white', x: 4, y: 9 },
  { type: 'pawn', color: 'white', x: 5, y: 9 },
  { type: 'pawn', color: 'white', x: 6, y: 9 },
  { type: 'pawn', color: 'white', x: 7, y: 9 },
  { type: 'pawn', color: 'white', x: 8, y: 9 },
  { type: 'pawn', color: 'white', x: 9, y: 9 },
];

// Deklarasi store
const selectedPiece = writable(null);
const turn = writable('black');

// Fungsi untuk melangkahkan bidak
function movePiece(piece, x, y) {
  piece.x = x;
  piece.y = y;
}

// Fungsi untuk memilih bidak
function selectPiece(piece) {
  selectedPiece.set(piece);
}

// Fungsi untuk mengecek apakah bidak dapat bergerak
function canMove(piece, x, y) {
  // Implementasikan logika untuk mengecek apakah bidak dapat bergerak
  return true;
}

// Fungsi untuk mengubah giliran
function changeTurn() {
  turn.set(get(turn) === 'black' ? 'white' : 'black');
}

// Hook onMount untuk menjalankan fungsi saat komponen pertama kali dipasang
onMount(() => {
  // Implementasikan logika awal permainan
});
</script>

<style>
.board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.piece {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 50%;
}

.black {
  background-color: black;
}

.white {
  background-color: white;
}

.selected {
  background-color: red;
}
</style>

<div class="board">
  {#each pieces as piece}
    <button class="piece"
      class:black={piece.color === 'black'}
      class:white={piece.color === 'white'}
      class:selected={piece === get(selectedPiece)}
      on:click={() => selectPiece(piece)}
    />
  {/each}
</div>

