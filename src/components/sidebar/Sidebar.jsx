import "./Sidebar.css"
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon "/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon "/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon fa fa-bell"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon fa fa-comment"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon fa fa-bookmark"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon fa fa-flag"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon fa fa-gift"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon fa fa-gift"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon fa fa-gift"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/src/assets/person/Pravi.jpeg" alt="" className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Pravi</span>
          </li>
          <li className="sidebarFriend">
            <img src="/src/assets/person/Pravi.jpeg" alt="" className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Pravi</span>
          </li>
          <li className="sidebarFriend">
            <img src="/src/assets/person/Pravi.jpeg" alt="" className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Pravi</span>
          </li>
          <li className="sidebarFriend">
            <img src="/src/assets/person/Pravi.jpeg" alt="" className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Pravi</span>
          </li>
          <li className="sidebarFriend">
            <img src="/src/assets/person/Pravi.jpeg" alt="" className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Pravi</span>
          </li>
          <li className="sidebarFriend">
            <img src="/src/assets/person/Pravi.jpeg" alt="" className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Pravi</span>
          </li>
        </ul>       
      </div>
    </div>
  )
}

