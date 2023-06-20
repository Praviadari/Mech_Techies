import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/src/assets/person/pravi.jpeg"
            alt="img"
          />
          <input className="shareInput" placeholder="What's in your mind?" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon fa fa-photo" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon fa fa-photo" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon fa fa-photo" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon fa fa-photo" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton ">Share</button>
        </div>
      </div>
    </div>
  );
}
