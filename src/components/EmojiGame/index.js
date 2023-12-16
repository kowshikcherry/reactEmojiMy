/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import Header from '../NavBar'
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinorLoose from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    list: [],
    score: 0,
    totalScore: 0,
    initial: true,
    winGameornot: false,
  }
  addtolist = id => {
    const {list} = this.state
    if (list.includes(id)) {
      this.setState(prevState => {
        let totalscorevalue =
          prevState.score > prevState.totalScore
            ? prevState.score
            : prevState.totalScore
        return {
          winGameornot: false,
          totalScore: totalscorevalue,
          winGameornot: false,
          initial: false,
        }
      })
    } else if (list.length === 11) {
      this.setState(prevState => {
        let totalscorevalue =
          prevState.score > prevState.totalScore
            ? prevState.score
            : prevState.totalScore
        return {
          score: prevState.score + 1,
          totalScore: 12,
          initial: false,
          winGameornot: true,
        }
      })
    } else {
      this.setState(prevState => ({
        list: [...prevState.list, id],
        score: prevState.score + 1,
      }))
    }
  }

  winorloosefunctiion = () => {
    this.setState({initial: true, score: 0, list: []})
  }
  render() {
    const {initial} = this.state
    const {emojisList} = this.props

    let suffling = emojisList.sort(() => Math.random() - 0.5)
    console.log(this.state.list)
    return (
      <div className="bg1">
        <Header
          headshow={this.state.initial}
          score={this.state.score}
          totalScore={this.state.totalScore}
        />
        {initial && (
          <ul className="bg2">
            {suffling.map(each => {
              return (
                <EmojiCard
                  addtolist={this.addtolist}
                  key={each.id}
                  each={each}
                />
              )
            })}
          </ul>
        )}
        {!initial && (
          <WinorLoose
            personscore={this.state.score}
            displaywinorloose={this.state.winGameornot}
            winorloosefunctiion={this.winorloosefunctiion}
          />
        )}
      </div>
    )
  }
}
export default EmojiGame
/*

<ul className="bg2">
            {suffling.map(each => {
              return <EmojiCard key={each.id} each={each} />
            })}
          </ul>


this.setState(prevState => {
      const {list} = this.state
      if (list.includes(id)) {
        return {initial: !prevState.initial, totalScore: prevState.score}

      } else {
        return {list: [...prevState.list, id], score: prevState.score + 1}
      }
      if (list.length===12){
        
      }
    })
 */
