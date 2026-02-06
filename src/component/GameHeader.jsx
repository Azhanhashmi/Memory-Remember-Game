export const GameHeader =({score,moves,onReset})=>{
    return <div className="game-header">
<h1>𝙈𝙚𝙢𝙤𝙧𝙮 𝘾𝙖𝙧𝙙 𝙂𝙖𝙢𝙚</h1>
      <div className="stats">
    <div className="stat-item">
    <span className="stat-label">𝑺𝒄𝒐𝒓𝒆: </span >
       <span className="stat-value"> {score}</span> 
    </div>
    <div className="stat-item"><span className="stat-label">𝙈𝙤𝙫𝙚𝙨: </span >
       <span className="stat-value"> {moves}</span> </div>
  </div>
  <div>
    <button className="reset-btn" onClick={onReset}>𝑵𝒆𝒘 𝑮𝒂𝒎𝒆</button>
  </div>
    </div>
}