import { useEffect, useState } from "react"

export const useGameLogic=(cardValues)=>{
    const [cards,setCards]=useState([])
  const [flippedCards,setFlippedCards]=useState([])
  const [matchCard,setMatchedCard]=useState([])
  const [score,setScore]=useState(0)
  const [moves,setMoves]=useState(0)

   


  const shuffleArray = (array)=>{
    const shuffled =[...array]
    for (let i = shuffled.length-1; i>0 ; i--){
    const j = Math.floor(Math.random()*(i+1));
    [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
    }
    return shuffled
  }
  const initializeGame =()=>{

    const shuffled=shuffleArray(cardValues)
    // upadating the values of cards in a object way and setting it back to the Cards state
   const finalCards= shuffled.map((value,index)=>(
      {
        id :index,
        value,
        isFlipped: false,
        isMatched:false
      }
    ))
    setCards(finalCards)
    setMoves(0)
    setScore(0)
    setMatchedCard([])
    setFlippedCards([])
  }

  // when the website re-render it should run this useEffect first
  useEffect(()=>{
    initializeGame()
  },[])

  // when the user click on that card this fuction gets called with that card as a prop

  const handleCardClick=(card)=>{
    //if the selected card is already flipped or matched do nothing 

    if(card.isFlipped || card.isMatched || flippedCards.length===2){
     return
    }
    // c.id is the id of cards.id and card.id is the prop where the user clicked we check and change its proper to true of flipped
    const newCards= cards.map((c)=>{
      if(c.id===card.id){
        return{...c,isFlipped:true}
      }
      else{  
        return c
      }
    })
    setCards(newCards)

    // its storing the ids of flipped card and well as the prevoius  values
    const newFlippedCards=[...flippedCards,card.id]
    setFlippedCards(newFlippedCards)
    if(flippedCards.length===1){

      const firstCard =cards[flippedCards[0]]

// checking if card is matched if yes then updating rhe card.id and c.id of both matched card inside the setMatchCard state
      if(firstCard.value===card.value){
        setTimeout(()=>{
        setMatchedCard((prev)=>[...prev,firstCard.id,card.id])
        setScore((prev)=>prev+1)
          setCards((prev)=>prev.map((c)=>{
      if(c.id===card.id || c.id === firstCard.id){
       
        return{...c,isMatched:true}
        
      }
      else{  
        return c
      }
    }))
    setFlippedCards([])
  },500)
      }
// if card is not matching flipping it back and making sure it flips after a second so user can see the second flippedCard
      else {     
        setTimeout(()=>{
          const flippedBackCards= newCards.map((c)=>{
         if( newFlippedCards.includes(c.id ) || c.id === card.id){
          return {...c,isFlipped:false}
         }else{
          return c
         }
        })
        setCards(flippedBackCards)
        setFlippedCards([])

        },1000)     
      }
   
    }
    setMoves((prev)=> prev+1)
  }
  const isGameComplete = matchCard.length===cardValues.length
   
    return {
        cards,score,moves,isGameComplete,handleCardClick,initializeGame
    }
}