import './index.css'
const EmojiCard = props => {
  const {each, addtolist} = props
  const {id, emojiName, emojiUrl} = each
  const addfun = () => {
    addtolist(id)
  }
  return (
    <li className="emojibg1">
      <button onClick={addfun} className="emojibutton">
        <img className="emojiimg" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}
export default EmojiCard
