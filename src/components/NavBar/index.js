import './index.css'

const Header = props => {
  const {score, totalScore, headshow} = props
  return (
    <nav className="nav-header">
      <div className="navbg1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navmargin"
        />
        <h1 className="navmargin">Emoji Game</h1>
      </div>
      <div className="navbg1">
        {headshow && <p className="navmargin">Score: {score}</p>}
        {headshow && <p className="navmargin">Top Score: {totalScore}</p>}
      </div>
    </nav>
  )
}

export default Header
