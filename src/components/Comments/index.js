import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentList: [], count: 0}

  userName = event => {
    this.setState({name: event.target.value})
  }

  userComment = event => {
    this.setState({comment: event.target.value})
  }

  likebuttonFunc = id => {
    const {commentList} = this.state
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isliked: !eachComment.isliked}
        }
        return eachComment
      }),
    }))
  }

  deletebuttonFunc = id => {
    const {count, commentList} = this.state
    const filterdComments = commentList.filter(eachCom => id !== eachCom.id)
    this.setState({commentList: filterdComments})
    this.setState({count: count - 1})
  }

  submitbutton = event => {
    event.preventDefault()
    const {name, comment, commentList, count} = this.state
    const containerbgColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    // console.log(containerbgColor)
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isliked: false,
      color: containerbgColor,
      date: formatDistanceToNow(new Date()),
    }
    // console.log(newComment)
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
    this.setState({count: count + 1})

    // const displayComment = () => {
    //   commentList.map(eachComment => (
    //     <CommentItem key={eachComment.id} eachComment={eachComment} />
    //   ))
    // }
  }

  render() {
    const {name, comment, commentList, count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="card-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <form className="form-container" onSubmit={this.submitbutton}>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              value={name}
              onChange={this.userName}
              className="name-tag"
            />
            <textarea
              placeholder="Your Comment"
              value={comment}
              onChange={this.userComment}
              className="comment-tag"
            />
            <button type="submit" className="add-btn">
              Add Comment
            </button>
          </form>
        </div>
        <hr className="line" />
        <div className="comment-count-container">
          <span className="comment-count">{count}</span>
          <p className="comment-text-heading">Comments</p>
        </div>
        <ul className="ul-container">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              eachComment={eachComment}
              likebuttonFunc={this.likebuttonFunc}
              deletebuttonFunc={this.deletebuttonFunc}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
