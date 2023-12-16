import './index.css'
const WinorLoose = props => {
  const {winorloosefunctiion, displaywinorloose, personscore} = props
  const fun = () => {
    winorloosefunctiion()
  }
  let head
  let bestcorepara
  let score
  let imgurl
  console.log(personscore)
  if (displaywinorloose === true) {
    head = 'You Won'
    bestcorepara = 'Best Score'
    score = `${personscore}/12`
    imgurl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    head = 'You Lose'
    bestcorepara = 'Score'
    score = `${personscore}/12`
    imgurl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }
  return (
    <div className="winbg1">
      <div>
        <h1>{head}</h1>
        <p>{bestcorepara}</p>
        <p>{score}</p>
        <button onClick={fun}>Play Again</button>
      </div>
      <div>
        <img alt='win or lose' src={imgurl} />
      </div>
    </div>
  )
}
export default WinorLoose
