const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printSeconds()
  printMinutes()
}

// {/* <span id="minDec" class="number">0</span> */}

function printMinutes() {
  const getMinUni = chronometer.split()[1];
  const getMinDec = chronometer.split()[0];
  minUniElement.innerText = getMinUni;
  minDecElement.innerText = getMinDec;
}


function printSeconds() {
  // console.log({minUniElement})
  // console.log(chronometer.split()[4])
  const getSecUni = chronometer.split()[4];
  const getSecDec = chronometer.split()[3];
  secUniElement.innerText = getSecUni;
  secDecElement.innerText = getSecDec;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.split();
  let parent = document.getElementById('splits');
  parent.appendChild(newSplit);
}

function clearSplits() {
  let parent = document.getElementById('splits');
  let theSplits = Array.from(document.getElementsByTagName('li'))
  theSplits.forEach(element => {
    parent.removeChild(element);
  });
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP'
  btnLeftElement.className = 'btn stop'
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT'
  btnRightElement.className = 'btn split'
}

function setStartBtn() {
  btnLeftElement.innerText = 'START'
  btnLeftElement.className = 'btn start'
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET'
  btnRightElement.className = 'btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className === 'btn start') {
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  } else {
    setStartBtn()
    chronometer.stop()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className === 'btn split') {
    printSplit()
  } else {
    clearSplits()
    chronometer.reset()
    printTime()
  }
});
