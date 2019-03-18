const grille = document.querySelectorAll('td')
const table = document.querySelector('table')
const restartButton = document.querySelector('.restart')
const scoreCounter = document.querySelector('.scoreCounter')
const info = document.querySelector('.info p')
let finishByWin = false
let randomCell
let score = 0
let tableFull = false

function initGame(){
  score = 0
  initGrille()
  info.innerHTML = "Jouez !"
}

function initGrille(){
  tableFull = false
  testFull = 0
  for (var i = 0; i < grille.length; i++) {
    grille[i].style.backgroundColor = "white"
    grille[i].innerHTML = ""
  }
  scoreCounter.innerHTML = "Votre score est : " + score
}

function win(){
  score = score + 1
  scoreCounter.innerHTML = "Votre score est : " + score
  info.innerHTML = "Gagné !"
  finishByWin = true
  setTimeout(function(){
      initGrille()
      finishByWin=false
    }
    ,500)
  setTimeout(function(){
    info.innerHTML = "Gagné !"
  }
  ,520)
}

function lose(){
  console.log("playerLose")
  score = score - 1
  scoreCounter.innerHTML = "Votre score est : " + score
  info.innerHTML = "Perdu !"
  finishByWin=true
  setTimeout(function(){
      initGrille()
      finishByWin=false
    }
    ,1500)
}

function testDraw(){
  finishByWin=false
  fullCheck()
  if (tableFull == true) {
    info.innerHTML = "Egalité !"
    setTimeout(function(){
        initGrille()
      }
      ,510)
  }
}

function fullCheck(){
  let testFull = 0
  grille.forEach(function(e){
    if (e.innerHTML != "") {
      testFull++
    }
    if (testFull==9) {
      tableFull = true
      console.log(tableFull)
    }
  })
}

function botPlay(){

// WIN
// LIGNE 1
  if(grille[0].innerHTML == "O" && grille[1].innerHTML == "O" && grille[2].innerHTML == "" ){
    grille[2].innerHTML = "O"
  }
  else if(grille[1].innerHTML == "O" && grille[2].innerHTML == "O" && grille[0].innerHTML == "" ){
    grille[0].innerHTML = "O"
  }
  else if(grille[0].innerHTML == "O" && grille[2].innerHTML == "O" && grille[1].innerHTML == "" ){
    grille[1].innerHTML = "O"
  }
// LIGNE 2
  else if(grille[3].innerHTML == "O" && grille[4].innerHTML == "O" && grille[5].innerHTML == "" ){
    grille[5].innerHTML = "O"
  }
  else if(grille[4].innerHTML == "O" && grille[5].innerHTML == "O" && grille[3].innerHTML == "" ){
    grille[3].innerHTML = "O"
  }
  else if(grille[3].innerHTML == "O" && grille[5].innerHTML == "O" && grille[4].innerHTML == "" ){
    grille[4].innerHTML = "O"
  }
// LIGNE 3
  else if(grille[6].innerHTML == "O" && grille[7].innerHTML == "O" && grille[8].innerHTML == "" ){
    grille[8].innerHTML = "O"
  }
  else if(grille[7].innerHTML == "O" && grille[8].innerHTML == "O" && grille[6].innerHTML == "" ){
    grille[6].innerHTML = "O"
  }
  else if(grille[6].innerHTML == "O" && grille[8].innerHTML == "O" && grille[7].innerHTML == "" ){
    grille[7].innerHTML = "O"
  }
// COLONNE 1
  else if(grille[0].innerHTML == "O" && grille[3].innerHTML == "O" && grille[6].innerHTML == "" ){
    grille[6].innerHTML = "O"
  }
  else if(grille[3].innerHTML == "O" && grille[6].innerHTML == "O" && grille[0].innerHTML == "" ){
    grille[0].innerHTML = "O"
  }
  else if(grille[0].innerHTML == "O" && grille[6].innerHTML == "O" && grille[3].innerHTML == "" ){
    grille[3].innerHTML = "O"
  }
// COLONNE 2
  else if(grille[1].innerHTML == "O" && grille[4].innerHTML == "O" && grille[7].innerHTML == "" ){
    grille[7].innerHTML = "O"
  }
  else if(grille[4].innerHTML == "O" && grille[7].innerHTML == "O" && grille[1].innerHTML == "" ){
    grille[1].innerHTML = "O"
  }
  else if(grille[1].innerHTML == "O" && grille[7].innerHTML == "O" && grille[4].innerHTML == "" ){
    grille[4].innerHTML = "O"
  }
// COLONNE 3
  else if(grille[2].innerHTML == "O" && grille[5].innerHTML == "O" && grille[8].innerHTML == "" ){
    grille[8].innerHTML = "O"
  }
  else if(grille[5].innerHTML == "O" && grille[8].innerHTML == "O" && grille[2].innerHTML == "" ){
    grille[2].innerHTML = "O"
  }
  else if(grille[2].innerHTML == "O" && grille[8].innerHTML == "O" && grille[5].innerHTML == "" ){
    grille[5].innerHTML = "O"
  }
//DIAGONALE DOWN
  else if(grille[0].innerHTML == "O" && grille[4].innerHTML == "O" && grille[8].innerHTML == "" ){
    grille[8].innerHTML = "O"
  }
  else if(grille[4].innerHTML == "O" && grille[8].innerHTML == "O" && grille[0].innerHTML == "" ){
    grille[0].innerHTML = "O"
  }
  else if(grille[0].innerHTML == "O" && grille[8].innerHTML == "O" && grille[4].innerHTML == "" ){
    grille[4].innerHTML = "O"
  }
//DIAGONALE UP
  else if(grille[6].innerHTML == "O" && grille[4].innerHTML == "O" && grille[2].innerHTML == "" ){
    grille[2].innerHTML = "O"
  }
  else if(grille[4].innerHTML == "O" && grille[2].innerHTML == "O" && grille[6].innerHTML == "" ){
    grille[6].innerHTML = "O"
  }
  else if(grille[6].innerHTML == "O" && grille[2].innerHTML == "O" && grille[4].innerHTML == "" ){
    grille[4].innerHTML = "O"
  }

// ANTI LOOSE
// LIGNE 1
  else if(grille[0].innerHTML == "X" && grille[1].innerHTML == "X" && grille[2].innerHTML == "" ){
    grille[2].innerHTML = "O"
  }
  else if(grille[1].innerHTML == "X" && grille[2].innerHTML == "X" && grille[0].innerHTML == "" ){
    grille[0].innerHTML = "O"
  }
  else if(grille[0].innerHTML == "X" && grille[2].innerHTML == "X" && grille[1].innerHTML == "" ){
    grille[1].innerHTML = "O"
  }
// LIGNE 2
  else if(grille[3].innerHTML == "X" && grille[4].innerHTML == "X" && grille[5].innerHTML == "" ){
    grille[5].innerHTML = "O"
  }
  else if(grille[4].innerHTML == "X" && grille[5].innerHTML == "X" && grille[3].innerHTML == "" ){
    grille[3].innerHTML = "O"
  }
  else if(grille[3].innerHTML == "X" && grille[5].innerHTML == "X" && grille[4].innerHTML == "" ){
    grille[4].innerHTML = "O"
  }
// LIGNE 3
  else if(grille[6].innerHTML == "X" && grille[7].innerHTML == "X" && grille[8].innerHTML == "" ){
    grille[8].innerHTML = "O"
  }
  else if(grille[7].innerHTML == "X" && grille[8].innerHTML == "X" && grille[6].innerHTML == "" ){
    grille[6].innerHTML = "O"
  }
  else if(grille[6].innerHTML == "X" && grille[8].innerHTML == "X" && grille[7].innerHTML == "" ){
    grille[7].innerHTML = "O"
  }
// COLONNE 1
  else if(grille[0].innerHTML == "X" && grille[3].innerHTML == "X" && grille[6].innerHTML == "" ){
    grille[6].innerHTML = "O"
  }
  else if(grille[3].innerHTML == "X" && grille[6].innerHTML == "X" && grille[0].innerHTML == "" ){
    grille[0].innerHTML = "O"
  }
  else if(grille[0].innerHTML == "X" && grille[6].innerHTML == "X" && grille[3].innerHTML == "" ){
    grille[3].innerHTML = "O"
  }
// COLONNE 2
  else if(grille[1].innerHTML == "X" && grille[4].innerHTML == "X" && grille[7].innerHTML == "" ){
    grille[7].innerHTML = "O"
  }
  else if(grille[4].innerHTML == "X" && grille[7].innerHTML == "X" && grille[1].innerHTML == "" ){
    grille[1].innerHTML = "O"
  }
  else if(grille[1].innerHTML == "X" && grille[7].innerHTML == "X" && grille[4].innerHTML == "" ){
    grille[4].innerHTML = "O"
  }
// COLONNE 3
  else if(grille[2].innerHTML == "X" && grille[5].innerHTML == "X" && grille[8].innerHTML == "" ){
    grille[8].innerHTML = "O"
  }
  else if(grille[5].innerHTML == "X" && grille[8].innerHTML == "X" && grille[2].innerHTML == "" ){
    grille[2].innerHTML = "O"
  }
  else if(grille[2].innerHTML == "X" && grille[8].innerHTML == "X" && grille[5].innerHTML == "" ){
    grille[5].innerHTML = "O"
  }
//DIAGONALE DOWN
  else if(grille[0].innerHTML == "X" && grille[4].innerHTML == "X" && grille[8].innerHTML == "" ){
    grille[8].innerHTML = "O"
  }
  else if(grille[4].innerHTML == "X" && grille[8].innerHTML == "X" && grille[0].innerHTML == "" ){
    grille[0].innerHTML = "O"
  }
  else if(grille[0].innerHTML == "X" && grille[8].innerHTML == "X" && grille[4].innerHTML == "" ){
    grille[4].innerHTML = "O"
  }
//DIAGONALE UP
  else if(grille[6].innerHTML == "X" && grille[4].innerHTML == "X" && grille[2].innerHTML == "" ){
    grille[2].innerHTML = "O"
  }
  else if(grille[4].innerHTML == "X" && grille[2].innerHTML == "X" && grille[6].innerHTML == "" ){
    grille[6].innerHTML = "O"
  }
  else if(grille[6].innerHTML == "X" && grille[2].innerHTML == "X" && grille[4].innerHTML == "" ){
    grille[4].innerHTML = "O"
  }
// RANDOM
  else{
    do {
      randomCell = grille[Math.floor(Math.random()*grille.length)]
    } while (randomCell.innerHTML != "" && !tableFull);
    randomCell.innerHTML = "O"
  }
}

function testWinPlayer(){

// TEST WIN X

  if(grille[0].innerHTML == "X" && grille[1].innerHTML == "X" && grille[2].innerHTML == "X"){
    grille[0].style.backgroundColor = "orange"
    grille[1].style.backgroundColor = "orange"
    grille[2].style.backgroundColor = "orange"
    win()
  }
  else if(grille[3].innerHTML == "X" && grille[4].innerHTML == "X" && grille[5].innerHTML == "X"){
    grille[3].style.backgroundColor = "orange"
    grille[4].style.backgroundColor = "orange"
    grille[5].style.backgroundColor = "orange"
    win()
  }
  else if(grille[6].innerHTML == "X" && grille[7].innerHTML == "X" && grille[8].innerHTML == "X"){
    grille[6].style.backgroundColor = "orange"
    grille[7].style.backgroundColor = "orange"
    grille[8].style.backgroundColor = "orange"
    win()
  }
  else if(grille[0].innerHTML == "X" && grille[4].innerHTML == "X" && grille[8].innerHTML == "X"){
    grille[0].style.backgroundColor = "orange"
    grille[4].style.backgroundColor = "orange"
    grille[8].style.backgroundColor = "orange"
    win()
  }
  else if(grille[2].innerHTML == "X" && grille[4].innerHTML == "X" && grille[6].innerHTML == "X"){
    grille[2].style.backgroundColor = "orange"
    grille[4].style.backgroundColor = "orange"
    grille[6].style.backgroundColor = "orange"
    win()
  }
  else if(grille[0].innerHTML == "X" && grille[3].innerHTML == "X" && grille[6].innerHTML == "X"){
    grille[0].style.backgroundColor = "orange"
    grille[3].style.backgroundColor = "orange"
    grille[6].style.backgroundColor = "orange"
    win()
  }
  else if(grille[1].innerHTML == "X" && grille[4].innerHTML == "X" && grille[7].innerHTML == "X"){
    grille[1].style.backgroundColor = "orange"
    grille[4].style.backgroundColor = "orange"
    grille[7].style.backgroundColor = "orange"
    win()
  }
  else if(grille[2].innerHTML == "X" && grille[5].innerHTML == "X" && grille[8].innerHTML == "X"){
    grille[2].style.backgroundColor = "orange"
    grille[5].style.backgroundColor = "orange"
    grille[8].style.backgroundColor = "orange"
    win()
  }

}

function testWinBot(){
  if(grille[0].innerHTML == "O" && grille[1].innerHTML == "O" && grille[2].innerHTML == "O"){
    grille[0].style.backgroundColor = "orange"
    grille[1].style.backgroundColor = "orange"
    grille[2].style.backgroundColor = "orange"
    lose()
  }
  else if(grille[3].innerHTML == "O" && grille[4].innerHTML == "O" && grille[5].innerHTML == "O"){
    grille[3].style.backgroundColor = "orange"
    grille[4].style.backgroundColor = "orange"
    grille[5].style.backgroundColor = "orange"
    lose()
  }
  else if(grille[6].innerHTML == "O" && grille[7].innerHTML == "O" && grille[8].innerHTML == "O"){
    grille[6].style.backgroundColor = "orange"
    grille[7].style.backgroundColor = "orange"
    grille[8].style.backgroundColor = "orange"
    lose()
  }
  else if(grille[0].innerHTML == "O" && grille[4].innerHTML == "O" && grille[8].innerHTML == "O"){
    grille[0].style.backgroundColor = "orange"
    grille[4].style.backgroundColor = "orange"
    grille[8].style.backgroundColor = "orange"
    lose()
  }
  else if(grille[2].innerHTML == "O" && grille[4].innerHTML == "O" && grille[6].innerHTML == "O"){
    grille[2].style.backgroundColor = "orange"
    grille[4].style.backgroundColor = "orange"
    grille[6].style.backgroundColor = "orange"
    lose()
  }
  else if(grille[0].innerHTML == "O" && grille[3].innerHTML == "O" && grille[6].innerHTML == "O"){
    grille[0].style.backgroundColor = "orange"
    grille[3].style.backgroundColor = "orange"
    grille[6].style.backgroundColor = "orange"
    lose()
  }
  else if(grille[1].innerHTML == "O" && grille[4].innerHTML == "O" && grille[7].innerHTML == "O"){
    grille[1].style.backgroundColor = "orange"
    grille[4].style.backgroundColor = "orange"
    grille[7].style.backgroundColor = "orange"
    lose()
  }
  else if(grille[2].innerHTML == "O" && grille[5].innerHTML == "O" && grille[8].innerHTML == "O"){
    grille[2].style.backgroundColor = "orange"
    grille[5].style.backgroundColor = "orange"
    grille[8].style.backgroundColor = "orange"
    lose()
  }

}


initGame()

restartButton.addEventListener('click',function(){
  initGame()
})

grille.forEach(function(e){
  e.addEventListener('click',function(){
    if(e.innerHTML == ""){
      e.innerHTML = "X"
      testWinPlayer()
      if(finishByWin==false){
        testDraw()
      }
      fullCheck()
      if (tableFull==false) {
        setTimeout(function(){
          botPlay()
          testWinBot()
          if(finishByWin==false){
            testDraw()
          }
        }
        ,490)
      }
    }
  })
})





// do {
//   randomCell = grille[Math.floor(Math.random()*grille.length)]
// } while (randomCell.innerHTML != "" && !tableFull);
// randomCell.innerHTML = "O"
