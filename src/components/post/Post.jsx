import "./post.css"
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData"

export default function Post({post}) {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop"></div>
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">{Users.filter(u=>u.id===post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img
              className="postImg"
              src={post.photo}
              alt=""
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeButton"
                src="/src/assets/post/like.png"
                alt=""
              />
              <img
                className="likeButton"
                src="/src/assets/post/heart.png"
                alt=""
              />
              <span className="postLikeCounter">{post.like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} Comments</span>
            </div>
          </div>
      </div>
    </div>
  )
}
