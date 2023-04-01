import './index.css'

const CommentItem = props => {
  const {eachComment, likebuttonFunc, deletebuttonFunc} = props
  const {id, name, comment, isliked, color, date} = eachComment
  console.log(isliked)
  //   console.log(eachComment)
  const bgcontainerclassName = `color-container ${color}`
  //   console.log(bgcontainerclassName)
  const onLike = () => {
    likebuttonFunc(id)
  }

  const onDelete = () => {
    deletebuttonFunc(id)
  }
  const like = isliked ? 'likecolortext' : ''

  const likedimage = isliked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="list-container">
      <div className="flex-container">
        <div className={bgcontainerclassName}>
          <p>{name[0]}</p>
        </div>
        <div className="comment-container">
          <p className="comment-username">
            {name} <span className="date-text">{date}</span>
          </p>
          <p className="comment-text">{comment}</p>
        </div>
      </div>

      <div className="like-delete-container">
        <button type="button" className="btn-like" onClick={onLike}>
          <img src={likedimage} className="like-image" alt="like" />
          <span className={`like-text ${like}`}>Like</span>
        </button>
        <button
          type="button"
          data-testid="delete"
          className="btn-delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="line2" />
    </li>
  )
}

export default CommentItem
