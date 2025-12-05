import { useState } from 'react'

const LikeButton = () => {
  const [liked, setLiked] = useState(false)
  const toggleLiked = () => setLiked((v) => !v)

  return (
    <button onClick={toggleLiked} className="LikeButton">
      {liked ? 'いいね済み😍' : 'いいね前👍'}
    </button>
  )
}

export default LikeButton
