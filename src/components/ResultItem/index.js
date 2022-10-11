import './index.css'

const ResultItem = props => {
  const {score, onResetClick} = props

  return (
    <div className="card-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
      </div>
      <p className="your-score">YOUR SCORE</p>
      <p className="final-score">{score}</p>
      <button className="reset-btn" type="button" onClick={onResetClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ResultItem
