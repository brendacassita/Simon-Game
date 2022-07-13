const greenButton = document.querySelector( "#color-green" )
// console.log( "greenButton: " , greenButton )  //

greenButton.addEventListener( "click" , function( event ){ 
    // console.log( event.target.id )  //
    
    addPlayerChoice( greenButton )
    // addPlayerChoice( event.target.id )
} )


const redButton = document.querySelector( "#color-red" )
// console.log( "redButton: " , redButton )  //

redButton.addEventListener( "click" , function( event ){ 
    // console.log( event.target.id )  //
    
    addPlayerChoice( redButton )
    // addPlayerChoice( event.target.id )
} )


const blueButton = document.querySelector( "#color-blue" )
// console.log( "blueButton: " , blueButton )  //

blueButton.addEventListener( "click" , function( event ){ 
    // console.log( event.target.id )  //
    
    addPlayerChoice( blueButton )
    // addPlayerChoice( event.target.id )
} )

const yellowButton = document.querySelector( "#color-yellow" )
// console.log( "yellowButton: " , yellowButton )  //
yellowButton.addEventListener( "click" , function( event ){ 
    // console.log( event.target.id )  //
    
    addPlayerChoice( yellowButton )
    // addPlayerChoice( event.target.id )
} )



    // <div id="color-green"  class="game-piece-sizes" ></div>
    // <div id="color-red"    class="game-piece-sizes" ></div>
    // <div id="color-blue"   class="game-piece-sizes" ></div>
    // <div id="color-yellow" class="game-piece-sizes" ></div>



// {...}
// let willinOut = [ greenButton, redButton, blueButton, yellowButton ]


let arrayOfPiecesForRandomization = [

greenButton , redButton , yellowButton , blueButton

]




////////  All About Pieces  ////////







////////  All About Gameplay/Functionality  ////////




let scoreActualValue = 0

let scoreOnHTML = document.querySelector( ".game-score-text" )
console.log( "scoreOnHTML: " , scoreOnHTML )  //





let playerGameChoices = []
// To Keep Track of Our Game Choices

let simonSaysPrompts = []
// To Keep Track of The Random Choices of Simon for Player to Click
// simonSaysPrompts = ['color-yellow', 'color-blue', 'color-yellow']




function checkCorrect( simonArray , playerArray ){

for( countingChecks = 0 ; countingChecks < playerGameChoices.length         ; countingChecks++ ){


console.log( "simonArray: " , simonArray[ countingChecks ] )  //
console.log( "playerArray: " , playerArray[ countingChecks ] )  //

let simonSaid = simonArray[ countingChecks ]
let playerChose = playerArray[ countingChecks ]
if( simonSaid.id == playerChose.id){

  console.log(" CORRECT ^.^ ")  //

  if( simonArray.length == playerArray.length ){


      let currentScore = scoreActualValue
      let newScore = currentScore + 1
      // let newScore = scoreActualValue + 1
      // scoreActualValue = scoreActualValue + 1
    
      // scoreActualValue++
        
      scoreActualValue = newScore
      //// !!  So The Base Score Reference Value 
      //// Can Actually Change

    
      scoreOnHTML.textContent = `Score: ${newScore}`    

    clearChoices( )
    
    simonSays() // Add Another Piece

    flashPieces( simonSaysPrompts )  // Flash Next Set Of Pieces
    
  }
  
  
}else{

  console.log(" incorrect :[ ")  //
  console.log(" Try Again / Game Over ")  //

  clearChoices(  )
  
}

}


}




function addPlayerChoice( playerClickedChoice ){

if( playerGameChoices.length < simonSaysPrompts.length ){

  playerGameChoices.push( playerClickedChoice )


    console.log( "simonSaysPrompts: " , simonSaysPrompts )  //  
    console.log( "playerGameChoices: " , playerGameChoices )  //  
  
    checkCorrect( simonSaysPrompts , playerGameChoices )

  //// playerChoice Array should be less than simonArrayUntil Done

}else{ 
  
  console.log( "YOU CAN'T CLICK ANYMORE 🙃 ....relax 😅" )  //  

  //// comparison logic / clear the user choices

}


console.log( "Clicked Pices So-Far: " , playerGameChoices )  //


}




function clearChoices(){

console.log( "clearChoices" ) 

playerGameChoices = [  ]

}
// *** reset it after each correct/incorrect match








let amountOfPieces = arrayOfPiecesForRandomization.length
function simonSays(){


let randomValue = parseInt(Math.random() * amountOfPieces)

let nextPieceAtRandom = arrayOfPiecesForRandomization[ randomValue ] 

simonSaysPrompts.push( nextPieceAtRandom )
console.log( "pieces NOW: 👀" , simonSaysPrompts )  //

// return

}
simonSays()
// simonSays()
// simonSays()
// *** add go to another level / start with 1
//// **** where we'll need our randomizer - math.floor 










function flashPiece( pieceToFlash ){


// pieceToFlash.classList.add = "flash"

let originalColor = pieceToFlash.style.backgroundColor

pieceToFlash.style.backgroundColor = "white"

setTimeout( 

function(){

pieceToFlash.style.backgroundColor = originalColor

}
, 

500  // 1000 = 1sec
)


// quickPause()


}
function quickPause(){

setTimeout( 

function(){

console.log("...pausing")

}
, 

3500  // 1000 = 1sec

) 

}
// flashPiece( redButton )  
// flashPiece( blueButton )
// flashPiece( greenButton )


////X
// simonSaysPrompts = [ redButton, blueButton, yellowButton ]
  // simonSaysPrompts.forEach( flashPiece )
////X



// !!!! Rename :: function flashGamePieces
function flashPieces( arrayOfPieces ){


let numberOfFlashes = arrayOfPieces.length
let countingNumberOfFlashes = 0  // starting at 0

// flashPiece( arrayOfPieces[ countingNumberOfFlashes ]  )



let keepGoingIfThereIsMoreToFlash = 

setInterval(


function(){

  // console.log("keepGoing: " , keepGoingIfThereIsMoreToFlash)
  
  console.log("FLASH")  //

  /*   
    !!!! do a let pieceToFlash = 
    arrayOfPieces[ countingNumberOfFlashes ]
  */
  flashPiece( arrayOfPieces[ countingNumberOfFlashes ]  )
  // console.log(  arrayOfPieces[ countingNumberOfFlashes ]  )


    // if it IS firstPiece -> There's NOT One Before It
    // if( countingNumberOfFlashes < 1 ){

    //   let pieceToFlash = arrayOfPieces[ countingNumberOfFlashes ]
  
    //   //x// let originalColor = pieceToFlash.style.backgroundColor

    //   pieceToFlash.style.backgroundColor = "white"

      
    // }else{ // its the NOT the firstPiece


    //   //// Reset Color of Previous Piece
    //   let previousPiece = arrayOfPieces[ countingNumberOfFlashes -1 ]
    //   console.log( "previousPiece: " , previousPiece )  //
      
    //   let originalColor = previousPiece.style.backgroundColor

    //   previousPiece.style.backgroundColor = originalColor


    //   //// Flash Current Piece
    //   pieceToFlash = arrayOfPieces[ countingNumberOfFlashes ]
       
    //   pieceToFlash.style.backgroundColor = "white"

      
    // }

  

    countingNumberOfFlashes = countingNumberOfFlashes + 1

    console.log(  "at: " , countingNumberOfFlashes  )


    //// Stop or NOT
    if( countingNumberOfFlashes == numberOfFlashes ){

      console.log(  "STOP!" )  //
      clearInterval( keepGoingIfThereIsMoreToFlash )
    
    }else{

      console.log(  "Next Piece 👀..." )  //
      
    }

  
    
  }

,

  1000  // time

)


countingNumberOfFlashes = 0


// }

}

// simonSaysPrompts = [ redButton, blueButton, yellowButton ]
// console.log( "pieces NOW: 👀" , simonSaysPrompts )  //








const startButton = document.querySelector( "#circle-illusion-button" )
console.log( "startButton: " , startButton )  //

startButton.addEventListener( "click" , function( event ){

startGame()

} )




function startGame(){

flashPieces( simonSaysPrompts )  // Start 

}
startGame()




//////// **** ADVANCED ****


function playlerCorrect(){  }
function playerIncorrect(){  }


//// **** ADVANCED ****
function playerDone(){

console.log( "playerDone" ) 

}
// *** check if playerGameChoices.length == simonSaysPrompts.length
/// *** That Means the Person Chose 
//// as many as the current level is waiting to "hear"


//////// **** ADVANCED ****





////////  All About Gameplay/Functionality  ////////














