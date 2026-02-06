import { GameHeader } from "./component/GameHeader"
import { Card } from "./component/Card"
import { WinMessage } from "./component/WinMessage"

import { useGameLogic } from "./hooks/useGameLogic"
 const cardValues=[
    "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
]
 

function App() {
 const {cards,score,moves,handleCardClick,initializeGame,isGameComplete} = useGameLogic(cardValues)
  return <div className="app">
  <GameHeader score={score} moves={moves} onReset={initializeGame} />
  {isGameComplete && <WinMessage moves ={moves}/>}
  <div className="cards-grid">
    {cards.map((card)=>(
      <Card  card={card} onClick={handleCardClick}/>
    ))}
   
  </div>

  </div>

}

export default App
