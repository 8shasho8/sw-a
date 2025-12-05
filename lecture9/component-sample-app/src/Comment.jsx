import './Comment.css'
import LikeButton from './LikeButton'

const Comment = ({ bgColor = 'lightgray', avatarUrl, userName = '名無し', text = '' }) => {
  return (
    <div className="Comment" style={{ backgroundColor: bgColor }}>
      <div className="Comment-left">
        <img className="Comment-avatar" src={avatarUrl} alt="User Avatar" />
        <p className="Comment-user">ID: {userName}</p>
      </div>
      <div className="Comment-right">
        <div className="Comment-likeBtn">
          <LikeButton />
        </div>
        <p className="Comment-text">{text}</p>
      </div>
    </div>
  )
}

export default Comment
