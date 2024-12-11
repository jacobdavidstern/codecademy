// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = function(event) {
  console.log(`keyPlay function expression called on ${event}`)
  event.target.style.backgroundColor = '#00FFFF'; 
};
const keyReturn = function(event) {
  console.log(`keyReturn function expression called on ${event}`)
  event.target.style.backgroundColor = ''; 
}

// Step 3: Named function with event handler properties (for Step 4)
let assignEventHandlers = function(note) {
  console.log('Assigning event handler for:', note.id);
  
  note.addEventListener('mousedown', function(event) {
    keyPlay(event);
  });

  note.addEventListener('mouseup', function(event) {
    keyReturn(event);
  });
}

// Step 4: Add event listeners to each key using the new function
notes.forEach(assignEventHandlers);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.addEventListener('click', function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').textContent = 'D';
  document.getElementById('letter-note-six').textContent = 'C';
});

// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click', function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').textContent = 'DEAR';
  document.getElementById('word-six').textContent = 'FRI';

  document.getElementById('letter-note-three').textContent = 'G';
  document.getElementById('letter-note-four').textContent = 'E';
  document.getElementById('letter-note-five').textContent = 'C';
  document.getElementById('letter-note-six').textContent = 'B';
  lastLyric.style.display = 'inline-block';
});

// Write anonymous event handler property and function for the third progress button
nextThree.addEventListener('click', function() {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').textContent = 'HAP-';
  document.getElementById('word-two').textContent = 'PY';
  document.getElementById('word-three').textContent = 'BIRTH';
  document.getElementById('word-four').textContent = 'DAY';
  document.getElementById('word-five').textContent = 'TO';
  document.getElementById('word-six').textContent = 'YOU';

  document.getElementById('letter-note-one').textContent = 'F';
  document.getElementById('letter-note-two').textContent = 'F';
  document.getElementById('letter-note-three').textContent = 'E';
  document.getElementById('letter-note-four').textContent = 'EC';
  document.getElementById('letter-note-five').textContent = 'D';
  document.getElementById('letter-note-six').textContent = 'C';

  lastLyric.style.display = 'none';
});

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').textContent = 'HAP-';
  document.getElementById('letter-note-one').textContent = 'G';
  document.getElementById('word-two').textContent = 'PY';
  document.getElementById('letter-note-two').textContent = 'G';
  document.getElementById('word-three').textContent = 'BIRTH-';
  document.getElementById('letter-note-three').textContent = 'A';
  document.getElementById('word-four').textContent = 'DAY';
  document.getElementById('letter-note-four').textContent = 'G';
  document.getElementById('word-five').textContent = 'TO';
  document.getElementById('letter-note-five').textContent = 'C';
  document.getElementById('word-six').textContent = 'YOU!';
  document.getElementById('letter-note-six').textContent = 'B';
}