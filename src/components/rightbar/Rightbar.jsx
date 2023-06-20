import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar ">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/src/assets/post/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Yuvarani</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/src/assets/post/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/src/assets/person/pravi.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
              
            </div>
            <span className="rightbarUsername">Pravi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/src/assets/person/yuvarani.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Yuvarani</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/src/assets/person/sravani.png"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
              
            </div>
            <span className="rightbarUsername">Sravani</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/src/assets/person/yamini.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
              
          </div>
          <span className="rightbarUsername">Yamini</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/src/assets/person/Naveena.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
              
            </div>
            <span className="rightbarUsername">Naveena</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
