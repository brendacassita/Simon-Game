const redPiece = document.querySelector ("#color-red")
  console.log(redPiece)

  redPiece.addEventListener(
    "click", // event type
  
    function(event){
      console.log("event", event.target)
      
    } 
    
    )