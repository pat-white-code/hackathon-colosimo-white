console.log('hangman.js here...')


//global variables
const codeWord = 'coding';
const feedbackSection = document.querySelector('.feedback');
const feedbackText = document.querySelector('.feedback__text');
//target submit button
const submit = document.querySelector('#guess-submit');

//takes a codeword and returns an array the length of the word, where each element in the array is *
const createBoard = (codeWord) => {
  const board = [];
  for(let i = 0 ; i<codeWord.length ; i++) {
    board[i] = '*'
  }
  return board
}

//creates board using codeWord
const board = createBoard(codeWord);

//renders the board to the GUI...
const renderBoard = () => {
  
  //targets board section of gui
  const boardSection = document.querySelector('.board')

  //for each item in board array, create an element and place it in board section
  for (let i = 0 ; i < board.length ; i++) {
    let newPiece = document.createElement('span');
    newPiece.classList.add('board__piece');
    newPiece.textContent = '*';
    //creates unique data-piece for each piece, corresponding with the spot in the array. this will be used to target that piece and insert successful guess.
    newPiece.dataset.piece=i;
    boardSection.appendChild(newPiece)
  }
}

const renderGuess = () => {
  let textArea = document.querySelector('#guess-input');
  let userInput = textArea.value;
  guess(userInput);
  textArea.value = '';
}
//When submit button is clicked, render guess
submit.addEventListener('click', renderGuess);

const guess = (letter) => {
  //if any letter in code word matches letter input,
  //call the updateBoard function, and pass in letter and index.
  let success = false;
  for (let i = 0 ; i < codeWord.length ; i++) {
    if (codeWord[i] === letter) {
      updateBoard(letter, i)
      success = true
    }
  }
  if (success) {
    console.log(`Success! ... ${board}`)
    renderSuccess(letter)
  } else {
    console.log (`Letter is not in codeword : ( ... ${board}`)
    renderFail(letter)
  }
  checkWin()
}

const renderFail = (letter) =>{
  //clear the feedbackSection
  feedbackSection.innerHTML = '';
  //create new p element
  const failText = document.createElement('p');
  //add class for tracking/selecting purposes.
  failText.classList.add('feedback__text');
  //create failtext
  failText.innerHTML = `<i>Ha! The letter '${letter}' does not exist in the hidden word! Guess again... if you dare...</i>`
  //append to section
  feedbackSection.appendChild(failText);
  //invoke addguess function to add guessed letter to list
  addGuess(letter);
}


//see comments for renderFail for explanation
const renderSuccess = (letter) =>{
  feedbackSection.innerHTML = ''
  const successText = document.createElement('p');
  successText.classList.add('feedback__text');
  successText.innerHTML = `<i>Yarr... the letter '${letter}' there be...</i>`
  feedbackSection.appendChild(successText);
}
const renderWin = () =>{
  feedbackSection.innerHTML = '';
  const winText = document.createElement('p');
  winText.classList.add('feedback__text');
  winText.innerHTML = `<i>You. Shall. Not. Hang... the codeword was '${codeWord}'</i>`
  feedbackSection.appendChild(winText);
}

//This function takes in a letter and adds that letter to the list of guessed letters:
const addGuess = (letter) =>{
  //target and save the ul element with class guess-list
  const guessedSection = document.querySelector('.guess-list');
  //create new li element
  const newGuess = document.createElement('li');
  //add class for styling purposes
  newGuess.classList.add('guess-list__letter');
  //add letter to innerText
  newGuess.innerText = letter;
  //append to ul element
  guessedSection.appendChild(newGuess);
}

const updateBoard = (letter, index) => {
  board[index] = letter;
  let piece = document.querySelector(`[data-piece='${index}']`)
  piece.innerText = letter;
}

const checkWin = () => {
  if (!board.includes('*')) {
    console.log(`YOU WINN! THE WORD WAS ${codeWord}!!!`)
    renderWin();
  }
}

// const displayBoard = board.join();
console.log(board);
renderBoard();